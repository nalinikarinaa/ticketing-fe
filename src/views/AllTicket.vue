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
              #{{ ticket.id }}
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
              <img
                :src="ticket.avatar"
                class="w-8 h-8 rounded-full"
                alt="avatar"
              />
              <span>{{ ticket.assignedTo }}</span>
            </td>

            <td class="px-4 py-3">
              {{ ticket.date }}
            </td>

            <td class="px-4 py-3 text-center">
              <div class="flex items-center justify-center gap-3">
                <!-- View -->
                 <RouterLink to="/detailticket">
                <button class="text-indigo-600 hover:text-indigo-800" @click="showModalDetail">
                  👁️
                </button>
                </RouterLink>
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

</div>
</SidebarAdmin>

 <!-- Modal Edit -->
<div v-if="showModal.edit" class="fixed inset-0 bg-transparent flex items-center justify-center z-50">
  <div class="bg-blue-100 p-4 rounded-lg max-w-md w-full">
 <h2 class="text-lg font-semibold mb-2 text-center">Edit Tiket</h2>

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
    <button @click="closeModalEdit" class="bg-red-500 px-4 py-2 mt-3 rounded w-full hover:bg-gray-600">Tutup</button>
  </div>
</div>

    <!-- Modal Detail -->
<div v-if="showModal.detail" class="fixed inset-0 bg-transparent flex items-center justify-center z-50">
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
  </div>
</div>

</template>

<script>
import SidebarAdmin from '../components/SidebarAdmin.vue'

export default {
  name: 'DashboardAdmin',
  components: {
    SidebarAdmin
  },

  data() {
    return {
      tickets: [
        {
          id: 1236,
          subject: "VPN disconnecting issue",
          status: "In Progress",
          assignedTo: "Floyd",
          date: "11 May, 2025",
          avatar: "https://i.pravatar.cc/40?img=1",
        },
        {
          id: 459,
          subject: "Login page validation error",
          status: "Closed",
          assignedTo: "Jerome",
          date: "11 May, 2025",
          avatar: "https://i.pravatar.cc/40?img=2",
        },
        {
          id: 483,
          subject: "Update HR policy document",
          status: "Resolved",
          assignedTo: "Jacob",
          date: "11 May, 2025",
          avatar: "https://i.pravatar.cc/40?img=3",
        },
        {
          id: 779,
          subject: "New employee onboarding",
          status: "Open",
          assignedTo: "Eleanor",
          date: "11 May, 2025",
          avatar: "https://i.pravatar.cc/40?img=4",
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

