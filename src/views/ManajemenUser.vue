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
                <button class="text-indigo-600 hover:text-indigo-800" @click="showModalDetail">
                  👁️
                </button>
                <!-- Edit -->
                <button class="text-gray-600 hover:text-gray-800" @click="showModalEdit">
                  ✏️
                </button>
                <!-- Delete -->
                <button class="text-red-500 hover:text-red-700">
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
            <input type="text" class="w-full border border-gray-300 p-1 rounded-md bg-gray-200">
          </div>
          <div class="mt-1">
            <label class="block text-black">Email</label>
            <input type="text" class="w-full border border-gray-300 p-1 rounded-md bg-gray-200">
          </div>
          <div class="mt-1">
            <label class="block text-black">Role</label>
            <input type="text" class="w-full border border-gray-300 p-1 rounded-md bg-gray-200">
          </div>
          <div class="mt-1">
            <label class="block text-black">Status</label>
            <input type="text" class="w-full border border-gray-300 p-1 rounded-md bg-gray-200">
          </div>
    <button @click="closeModalEdit" class=" px-4 py-2 mt-3 rounded w-full hover:bg-gray-600">Tutup</button>
  </div>
</div>

    <!-- Modal Detail -->
<div v-if="showModal.detail" class="fixed inset-0 bg-transparent flex items-center justify-center z-50">
  <div class="bg-blue-100 p-4 rounded-lg max-w-md w-full">
    <h2 class="text-lg font-semibold mb-2 text-center">Detail User</h2>

          <div class="mt-2">
            <label class="block text-black">Name</label>
            <input type="text" class="w-full border border-gray-300 p-1 rounded-md bg-gray-200">
          </div>
          <div class="mt-1">
            <label class="block text-black">Email</label>
            <input type="text" class="w-full border border-gray-300 p-1 rounded-md bg-gray-200">
          </div>
          <div class="mt-1">
            <label class="block text-black">Role</label>
            <input type="text" class="w-full border border-gray-300 p-1 rounded-md bg-gray-200">
          </div>
          <div class="mt-1">
            <label class="block text-black">Status</label>
            <input type="text" class="w-full border border-gray-300 p-1 rounded-md bg-gray-200">
          </div>

    <button @click="closeModalDetail" class="bg-red-500 px-4 py-2 rounded w-full hover:bg-gray-600 mt-3">Tutup</button>
  </div>
</div>


</template>

<script>
 import SidebarAdmin from '../components/SidebarAdmin.vue';
 import axios from 'axios'
  
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
            this.tickets = response.data.data // ✅ INI YANG BENAR
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
    
  statusClass(status) {
    switch (status) {
      case "Non Aktif":
        return "bg-red-100 text-red-700"
      case "Aktif":
        return "bg-green-100 text-green-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  },

  showModalEdit() {
    this.showModal.edit = true
  },

  closeModalEdit() {
    this.showModal.edit = false
  },
    showModalDetail() {
    this.showModal.detail = true
  },

  closeModalDetail() {
    this.showModal.detail = false
  }
},


  }
  </script>