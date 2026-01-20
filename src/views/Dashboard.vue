<template>
<SidebarUser>
    
<div class="h-screen">
    <h1 class="text-xl font-bold">HELLO USER</h1>

<div class="bg-white rounded-xl shadow p-6 mt-4">
    <!-- Header -->
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-lg font-semibold text-gray-800">My Tickets</h2>
      <!-- <a href="#" class="text-sm text-indigo-600 hover:underline">
        View All
      </a> -->
    </div>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-600">
        <thead class="bg-gray-50 text-gray-500 uppercase text-xs">
          <tr>
            <th class="px-4 py-3">Ticket ID</th>
            <th class="px-4 py-3">Subject</th>
            <th class="px-4 py-3">Date</th>
            <th class="px-4 py-3">Status</th>
            <th class="px-4 py-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody class="divide-y">
          <tr v-for="ticket in tickets" :key="ticket.id">
            <td class="px-4 py-3 font-medium text-gray-800">
              #{{ ticket.id }}
            </td>

            <td class="px-4 py-3 truncate max-w-[180px]">
              {{ ticket.subject }}
            </td>

            <td class="px-4 py-3 truncate">
              {{ ticket.date }}
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
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>


</SidebarUser>

<!-- Modal Detail -->
<div v-if="showModal.detail" class="fixed inset-0 bg-transparent flex items-center justify-center z-50">
  <div class="bg-blue-100 p-4 rounded-lg max-w-md w-full">
    <h2 class="text-lg font-semibold mb-2 text-center">Detail Tiket</h2>

          <div class="mt-2">
            <label class="block text-black">Ticket ID</label>
            <input type="text" class="w-full border border-gray-300 p-1 rounded-md bg-gray-200">
          </div>
          <div class="mt-1">
            <label class="block text-black">Subject</label>
            <input type="text" class="w-full border border-gray-300 p-1 rounded-md bg-gray-200">
          </div>
          <div class="mt-1">
            <label class="block text-black">Date</label>
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
 import SidebarUser from '../components/SidebarUser.vue';
  
  export default {
    name: 'Layout',
    components: {
      SidebarUser,
    },
    data() {
    return {
      tickets: [
        {
          id: 112,
          subject: "vpn ga nyambung",
          status: "In Progress",
          date: "12 May 2025",
        },
        {
          id: 123,
          subject: "wifi ga nyambung",
          status: "Closed",
          date: "15 May 2025",
        },
        {
          id: 245,
          subject: "vpn ga nyambung",
          status: "Resolved",
          date: "18 May 2025",
        },
        {
          id: 888,
          subject: "vpn ga nyambung",
          status: "Open",
          date: "21 May 2025",
        },
      ],
      showModal: {
        Edit: false,
        Detail: false,
      },
    }
  },
  methods: {
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