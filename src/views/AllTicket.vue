<template>
<SidebarAdmin>
    
<div class="h-screen">
        <div class="bg-white rounded-xl shadow p-6 mt-4">
    <!-- Header -->
    <div class="flex justify-between">
      <h2 class="text-xl font-bold text-gray-800">Ticket List</h2>
      <!-- <a href="#" class="text-sm text-indigo-600 hover:underline">
        View All
      </a> -->

<div class="flex md:space-x-4 space-x-2 mb-6 mt-5">
  <div>
    <label for="name" class="block text-sm font-medium text-ungutext">nama user</label>
    <input
      id="name"
      v-model="name"
      type="text"
      class="mt-1 block w-full border border-gray-300 rounded-md p-2 text-xs md:text-sm"
    />
  </div>

<div>
    <label for="prioritas" class="block text-sm font-medium text-ungutext">
  prioritas
</label>

<select
  id="prioritas"
  name="prioritas"
  class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ungutua"
>
  <option value="">-- Pilih prioritas --</option>
  <option value="reward">Reward</option>
  <option value="promote">Promote</option>
  <option value="archive">Archive</option>
  <option value="delete">Delete</option>
</select>

  </div>

  <div>
    <label for="status" class="block text-sm font-medium text-ungutext">
  status
</label>

<select
  id="status"
  name="status"
  class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ungutua"
>
  <option value="">-- Pilih status --</option>
  <option value="reward">Reward</option>
  <option value="promote">Promote</option>
  <option value="archive">Archive</option>
  <option value="delete">Delete</option>
</select>

  </div>

  <div>
  <label class="block text-sm font-medium opacity-0 text-ungutext">Reset</label>
  <button
    @click="resetFilter"
    class="bg-blue-500 hover:bg-gray-600 text-ungutext px-4 py-2 rounded-md text-xs md:text-sm mt-1 w-full"
  >
    Reset Filter
  </button>
</div>
</div>

    </div>
    

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-600">
        <thead class="bg-gray-50 text-gray-500 uppercase text-xs">
          <tr>
            <th class="px-4 py-3">Ticket ID</th>
            <th class="px-4 py-3">Subject</th>
            <th class="px-4 py-3">Status</th>
            <th class="px-4 py-3">Assigned To</th>
            <th class="px-4 py-3">Date</th>
            <th class="px-4 py-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody class="divide-y">
          <tr v-for="ticket in tickets" :key="ticket.id">
            <td class="px-4 py-3 font-medium text-gray-800">
              #{{ ticket.ticket_code }}
            </td>

            <td class="px-4 py-3 truncate max-w-[180px]">
              {{ ticket.subject }}
            </td>

            <td class="px-4 py-3">
              <span
                class="px-3 py-1 rounded-full text-xs font-medium"
                :class="statusClass(ticket.status)"
              >
                {{ ticket.status }}
              </span>
            </td>

            <td class="px-4 py-3 flex items-center gap-2">
              <!-- <img
                :src="ticket.avatar"
                class="w-8 h-8 rounded-full"
                alt="avatar"
              /> -->
              <span>{{ ticket.user.name }}</span>
            </td>

            <td class="px-4 py-3">
                {{ new Date(ticket.created_at).toLocaleDateString('id-ID') }}
            </td>

            <td class="px-4 py-3 text-center">
              <div class="flex items-center justify-center gap-3">
                <!-- View -->
                <RouterLink :to="`/detailticket/${ticket.id}`">
                  <button class="text-indigo-600 hover:text-indigo-800">
                    👁️
                  </button>
                </RouterLink>
                <!-- Edit -->
                <button class="text-gray-600 hover:text-gray-800" @click="showModalEdit(ticket)">
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

</div>
</SidebarAdmin>

 <!-- Modal Edit -->
<div v-if="showModal.edit" class="fixed inset-0 bg-transparent flex items-center justify-center z-50">
  <div class="bg-blue-100 p-4 rounded-lg max-w-md w-full">
 <h2 class="text-lg font-semibold mb-2 text-center">Edit Tiket</h2>

          <div class="mt-2">
            <label class="block text-black">Ticket ID</label>
            <input
              v-model="ticket.ticket_code"
              type="text"
              class="w-full border border-gray-300 p-1 rounded-md bg-gray-200"
              readonly
            >
          </div>
          <div class="mt-1">
            <label class="block text-black">Name</label>
            <div v-if="ticket.user">
              <input
                :value="ticket.user.name"
                class="w-full border border-gray-300 p-1 rounded-md bg-gray-200"
                readonly
              >
            </div>
          </div>
          <div class="mt-1">
            <label class="block text-black">Subject</label>
            <input
              v-model="ticket.subject"
              type="text"
              class="w-full border border-gray-300 p-1 rounded-md bg-gray-200"
              readonly
            >
          </div>
          <div class="mt-1">
            <label class="block text-black">Status</label>
            <select
              v-model="ticket.status"
              class="w-full border rounded-lg px-3 py-2 bg-amber-50"
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <div class="mt-1">
          <label class="block text-black">Prioritas</label>
          <select
            v-model="ticket.priority"
            class="w-full border rounded-lg px-3 py-2 bg-amber-50"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          </div>
          <div class="flex justify-between">
          <button
          @click="updateTicket"
          class="bg-green-400 text-white px-4 py-2 rounded-lg mt-3 hover:bg-gray-600"
        >
          Save Changes
        </button>
          <button 
          @click="closeModalEdit" 
          class="bg-red-500 px-4 py-2 mt-3 rounded-lg hover:bg-gray-600">
          Tutup
        </button>
          </div>
  </div>
</div>

    <!-- Modal Detail -->
<!-- <div v-if="showModal.detail" class="fixed inset-0 bg-transparent flex items-center justify-center z-50">
  <div class="bg-blue-100 p-4 rounded-lg max-w-md w-full">
    <h2 class="text-lg font-semibold mb-2 text-center">Detail Tiket</h2>

          <div class="mt-2">
            <label class="block text-black">Ticket ID</label>
            <input type="text" class="w-full border border-gray-300 p-1 rounded-md bg-gray-200">
          </div>
          <div class="mt-1">
            <label class="block text-black">Name</label>
            <input type="text" class="w-full border border-gray-300 p-1 rounded-md bg-gray-200">
          </div>
          <div class="mt-1">
            <label class="block text-black">Subject</label>
            <input type="text" class="w-full border border-gray-300 p-8 rounded-md bg-gray-200">
          </div>
          <div class="mt-1">
            <label class="block text-black">Status</label>
            <input type="text" class="w-full border border-gray-300 p-1 rounded-md bg-gray-200">
          </div>

    <button @click="closeModalDetail" class="bg-red-500 px-4 py-2 rounded w-full hover:bg-gray-600 mt-3">Tutup</button>
  </div> -->
<!-- </div> -->

</template>

<script>
import SidebarAdmin from '../components/SidebarAdmin.vue'
 import axios from 'axios'
 import Swal from 'sweetalert2'

export default {
  name: 'AllTicket',
  components: {
    SidebarAdmin
  },

  data() {
    return {
      tickets: [
       
      ],
      ticket: {
      id: null,
      status: '',
      priority: ''
    },
      showModal: {
        Edit: false,
        Detail: false,
      },
    }
  },

    mounted() {
    this.fetchTicket() 
    // this.fetchDetailTicket() 
  },

 methods: {

  fetchTicket() {
      this.isLoading = true

      const config = {
        method: 'get',
        url: import.meta.env.VITE_APP_BACKEND_URL_API + '/tickets',
         headers: {
          Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
          Accept: 'application/json'
        }
      }

      axios(config)
        .then((response) => {
          if (response.data.success) {
            this.tickets = response.data.data
          } else {
            console.error('API error:', response.data.message)
          }
        })
        .catch((error) => {
          console.error('Gagal mengambil data tickets:', error)
        })
        .finally(() => {
          this.isLoading = false
        })
    },


  statusClass(status) {
    switch (status) {
      case "In Progress":
        return "bg-purple-100 text-purple-700"
      case "Closed":
        return "bg-red-100 text-red-700"
      case "Resolved":
        return "bg-green-100 text-green-700"
      case "Open":
        return "bg-blue-100 text-blue-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  },

   fetchDetailTicket() {
      this.isLoading = true

      const id = this.$route.params.id

      const config = {
        method: 'get',
        url: `${import.meta.env.VITE_APP_BACKEND_URL_API}/detailtickets/${id}`,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
          Accept: 'application/json',
        },
      }

      axios(config)
        .then((response) => {
          if (response.data.success) {
            this.ticket = response.data.data
          } else {
            console.error('API error:', response.data.message)
          }
        })
        .catch((error) => {
          console.error('Gagal mengambil data ticket:', error)
        })
        .finally(() => {
          this.isLoading = false
        })
    },

  updateTicket()
{
  this.isLoading = true

  const id = this.ticket.id

  const config = {
    method: 'put',
    url: import.meta.env.VITE_APP_BACKEND_URL_API + `/edittickets/${id}`,
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      Accept: 'application/json'
    },
    data: {
      status: this.ticket.status,
      priority: this.ticket.priority
    }
  }

  axios(config)
    .then((response) => {
      if (response.data.success) {

        Swal.fire({
          icon: 'success',
          title: 'Berhasil',
          text: 'Ticket berhasil diperbarui'
        })

        this.closeModalEdit()
         this.fetchTicket()

      } else {
        console.error('API error:', response.data.message)
      }
    })
    .catch((error) => {
      console.error('Gagal update ticket:', error)

      Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: 'Gagal memperbarui ticket'
      })
    })
    .finally(() => {
      this.isLoading = false
    })
},

showModalEdit(ticket) {

  this.ticket = JSON.parse(JSON.stringify(ticket))

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

