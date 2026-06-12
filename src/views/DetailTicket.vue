<template>
<SidebarAdmin>
<div class="bg-white rounded-2xl mx-5 px-5 py-6 mt-6 shadow-sm">
  <h1 class="text-xl font-semibold mb-6">Ticket Information</h1>

  <div class="space-y-4">
      <div>
      <p class="text-sm text-gray-500">Kode Tiket</p>
      <p class="text-gray-800 font-medium mt-1">
        {{ ticket.ticket_code }}
      </p>
    </div>

    <div>
      <p class="text-sm text-gray-500">Pesan Keluhan</p>
      <p class="text-gray-800 font-medium mt-1">
        {{ ticket.description }}
      </p>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <p class="text-sm text-gray-500">Status</p>
        <span
          class="inline-flex px-3 py-1 mt-1 rounded-full text-sm bg-yellow-100 text-yellow-700"
        >
          {{ ticket.status }}
        </span>
      </div>

      <div>
        <p class="text-sm text-gray-500">Priority</p>
        <span
          class="inline-flex px-3 py-1 mt-1 rounded-full text-sm bg-red-100 text-red-700"
        >
          {{ ticket.priority }}
        </span>
      </div>
    </div>
  </div>
</div>

    <div class="bg-white rounded-2xl mx-5 px-5 py-6 mt-6 shadow-sm">
  <h1 class="mb-6 text-xl font-semibold">Discussion</h1>

  <!-- Chat User -->
  <div class="mb-4">
    <div class="bg-gray-100 rounded-xl px-4 py-3 max-w-lg">
      <p class="text-xs text-gray-500 mb-1">User</p>
      <p>Printer tidak bisa menyala sejak pagi.</p>
    </div>
  </div>

  <!-- Chat Admin -->
  <div class="mb-4 flex justify-end">
    <div class="bg-blue-100 rounded-xl px-4 py-3 max-w-lg">
      <p class="text-xs text-blue-700 mb-1">Admin</p>
      <p>Baik, sedang kami cek terlebih dahulu.</p>
    </div>
  </div>

  <!-- Input -->
  <div class="border-t pt-4 mt-6">
    <label class="block text-sm font-medium text-gray-700 mb-2">
      Send Message
    </label>

    <div class="flex gap-3">
      <input
        type="text"
        class="flex-1 border border-gray-300 rounded-lg h-11 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
        placeholder="Type your message..."
      />

      <button
        class="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-lg"
      >
        Send
      </button>
    </div>
  </div>
</div>
</SidebarAdmin>


</template>

<script>
import SidebarAdmin from '../components/SidebarAdmin.vue'
import axios from 'axios'

export default {
  name: 'DetailTicket',

  components: {
    SidebarAdmin,
  },

  data() {
    return {
      ticket: {},
      isLoading: false,
    }
  },

  mounted() {
    this.fetchDetailTicket()
  },

  methods: {
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
  },
}
</script>