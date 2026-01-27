<template>
<SidebarAdmin>
    
<div class="bg-white rounded-xl shadow p-6 mt-4">
    <!-- Header -->
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-lg font-semibold text-gray-800">Manajemen Users</h2>
      <!-- <a href="#" class="text-sm text-indigo-600 hover:underline">
        View All
      </a> -->
    </div>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-600">
        <thead class="bg-gray-50 text-gray-500 uppercase text-xs">
          <tr>
            <th class="px-4 py-3">Nama</th>
            <th class="px-4 py-3">Email</th>
            <th class="px-4 py-3">Role</th>
            <th class="px-4 py-3">Status</th>
            <th class="px-4 py-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody class="divide-y">
          <tr v-for="ticket in tickets" :key="ticket.id">
            <td class="px-4 py-3 font-medium text-gray-800">
              {{ ticket.name }}
            </td>

            <td class="px-4 py-3 truncate">
              {{ ticket.email }}
            </td>

            <td class="px-4 py-3 truncate">
              {{ ticket.role }}
            </td>

            <td class="px-4 py-3">
              <span
                class="px-3 py-1 rounded-full text-xs font-medium"
                :class="statusClass(ticket.status)"
              >
                {{ ticket.status }}
              </span>
            </td>
            <td class="px-4 py-3 text-center">
              <div class="flex items-center justify-center gap-3">
                <!-- View -->
                <button class="text-indigo-600 hover:text-indigo-800" @click="openDetail(ticket)">
                  👁️
                </button>
                <!-- Edit -->
                <button class="text-gray-600 hover:text-gray-800" @click="openEdit(ticket)">
                  ✏️
                </button>
                <!-- Delete -->
                <button class="text-red-500 hover:text-red-700" @click="deleteUser(ticket.id)">
                  🗑️
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</SidebarAdmin>

 <!-- Modal Edit -->
<div v-if="showModal.edit" class="fixed inset-0 bg-transparent flex items-center justify-center z-50">
  <div class="bg-blue-100 p-4 rounded-lg max-w-md w-full">
 <h2 class="text-lg font-semibold mb-2 text-center">Edit User</h2>

          <div class="mt-2">
            <label class="block text-black">Nama</label>
            <input type="text" v-model="form.name" class="w-full border border-gray-300 p-1 rounded-md bg-gray-200">
          </div>
          <div class="mt-2">
            <label class="block text-black">Email</label>
            <input type="text" v-model="form.email" class="w-full border border-gray-300 p-1 rounded-md bg-gray-200">
          </div>

          <div class="mt-2">
            <label class="block text-black">Role</label>
            <select v-model="form.role" class="w-full border border-gray-300 p-1 rounded-md bg-gray-200">
            <option value="user">User</option>
            <option value="admin">Admin</option>
            </select>  
          </div>
          <!-- <div class="mt-2">
          <select v-model="form.role" class="w-full border border-gray-300 p-1 rounded-md bg-gray-200">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          </div> -->

          <div class="mt-2">
            <label class="block text-black">Status</label>
           <select v-model="form.status" class="w-full border border-gray-300 p-1 rounded-md bg-gray-200">
              <option value="Aktif">Aktif</option>
              <option value="Non Aktif">Non Aktif</option>
            </select>
          </div>
          <!-- <div class="mt-2">
            <select v-model="form.status" class="w-full border border-gray-300 p-1 rounded-md bg-gray-200">
              <option value="Aktif">Aktif</option>
              <option value="Non Aktif">Non Aktif</option>
            </select>
          </div> -->

        <button
          @click="updateUser"
          class="bg-gray-400 text-white px-4 py-2 mt-3 rounded w-full hover:bg-gray-500"
        >
          Simpan Perubahan
        </button>
    <button @click="closeModalEdit" class=" px-4 py-2 mt-3 rounded w-full hover:bg-gray-600 bg-red-500">Tutup</button>
  </div>
</div>

    <!-- Modal Detail -->
<div v-if="showModal.detail" class="fixed inset-0 bg-transparent flex items-center justify-center z-50">
  <div class="bg-blue-100 p-4 rounded-lg max-w-md w-full">
    <h2 class="text-lg font-semibold mb-2 text-center">Detail User</h2>

          <div class="mt-2">
            <label class="block text-black">Name</label>
            <input type="text" v-model="selectedUser.name" disabled class="w-full border p-1 rounded-md bg-gray-200">
            </div>
          <div class="mt-2">
            <label class="block text-black">Email</label>
           <input type="text" v-model="selectedUser.email" disabled class="w-full border p-1 rounded-md bg-gray-200 ">
          </div>
          <div class="mt-2">
            <label class="block text-black">Role</label>
            <input type="text" v-model="selectedUser.role" disabled class="w-full border p-1 rounded-md bg-gray-200 ">
          </div>
          <div class="mt-2">
            <label class="block text-black">Status</label>
            <input type="text" v-model="selectedUser.status" disabled class="w-full border p-1 rounded-md bg-gray-200 ">
          </div>

          <!-- <input type="text" v-model="selectedUser.name" disabled class="w-full border p-1 rounded-md bg-gray-200">
          <input type="text" v-model="selectedUser.email" disabled class="w-full border p-1 rounded-md bg-gray-200 mt-2">
          <input type="text" v-model="selectedUser.role" disabled class="w-full border p-1 rounded-md bg-gray-200 mt-2">
          <input type="text" v-model="selectedUser.status" disabled class="w-full border p-1 rounded-md bg-gray-200 mt-2"> -->

    <button @click="closeModalDetail" class="bg-red-500 px-4 py-2 rounded w-full hover:bg-gray-600 mt-3">Tutup</button>
  </div>
</div>


</template>

<script>
 import SidebarAdmin from '../components/SidebarAdmin.vue';
 import axios from 'axios'
 import Swal from 'sweetalert2'

  
  export default {
    name: 'Layout',
    components: {
      SidebarAdmin,
    },
    data() {
    return {
      tickets: [],
      showModal: {
        edit: false,
        detail: false,
      },
       selectedUser: {}, // buat detail
      form: {
        id: null,
        name: '',
        email: '',
        role: '',
        status: '',
      },
    }
  },

   mounted() {
    this.fetchUsers() 
  },

  methods: {
    fetchUsers() {
      this.isLoading = true

      const config = {
        method: 'get',
        url: import.meta.env.VITE_APP_BACKEND_URL_API + '/users',
      }

      axios(config)
        .then((response) => {
          // response.data = { success, message, data }
          if (response.data.success) {
            this.tickets = response.data.data 
          } else {
            console.error('API error:', response.data.message)
          }
        })
        .catch((error) => {
          console.error('Gagal mengambil data users:', error)
        })
        .finally(() => {
          this.isLoading = false
        })
    },

     // 🔹 OPEN DETAIL
    openDetail(user) {
      this.selectedUser = { ...user }
      this.showModal.detail = true
    },

    closeModalDetail() {
      this.showModal.detail = false
      this.selectedUser = {}
    },

    // 🔹 OPEN EDIT
    openEdit(user) {
      this.form = { ...user }
      this.showModal.edit = true
    },

    closeModalEdit() {
      this.showModal.edit = false
      this.form = {
        id: null,
        name: '',
        email: '',
        role: '',
        status: '',
      }
    },

    // 🔹 UPDATE USER
    updateUser() {
      axios
        .put(
          import.meta.env.VITE_APP_BACKEND_URL_API + `/users/${this.form.id}`,
          this.form
        )
        .then((res) => {
          if (res.data.success) {
            Swal.fire({
              icon: 'success',
              title: 'Berhasil',
              text: 'User berhasil diupdate',
              position: 'center',
              timer: 1500,
              showConfirmButton: false
            })

            this.closeModalEdit()
            this.fetchUsers()
          }
        })
        .catch((err) => {
          console.error('Gagal update user:', err)

          Swal.fire({
            icon: 'error',
            title: 'Gagal',
            նույնպես: 'User gagal diupdate'
          })
        })
      },

    // 🔹 DELETE USER
   deleteUser(id) {
      Swal.fire({
        title: 'Yakin mau hapus?',
        text: 'User ini akan dihapus permanen!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Ya, hapus!',
        cancelButtonText: 'Batal'
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(import.meta.env.VITE_APP_BACKEND_URL_API + `/users/${id}`)
            .then((res) => {
              if (res.data.success) {
                Swal.fire({
                  icon: 'success',
                  title: 'Berhasil',
                  text: 'User berhasil dihapus',
                  position: 'center',
                  timer: 1500,
                  showConfirmButton: false
                })

                this.fetchUsers()
              }
            })
            .catch((err) => {
              console.error('Gagal menghapus user:', err)

              Swal.fire({
                icon: 'error',
                title: 'Gagal',
                text: 'User gagal dihapus'
              })
            })
        }
      })
    },

    statusClass(status) {
      switch (status) {
        case 'Non Aktif':
          return 'bg-red-100 text-red-700'
        case 'Aktif':
          return 'bg-green-100 text-green-700'
        default:
          return 'bg-gray-100 text-gray-700'
      }
    },
  },
}
</script>
    
  