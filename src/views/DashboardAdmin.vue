<template>
<SidebarAdmin>

  <div class="h-screen">
    <h1 class="text-xl font-bold">HELLO ADMIN</h1>

        <div class="p-6 space-y-6 w-full">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6" >
            <div class="bg-blue-100 shadow rounded-xl md:p-6 p-4 flex items-center md:space-x-2 space-x-2 hover:bg-ungutua" @click="showDetailPendaftarAktif">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                </svg>
              <div>
                <p class="text-sm font-bold">Total Ticket</p>
                <p class="text-xl font-semibold text-ungutext">{{ pendaftarAktifTotal }}</p>
              </div>
            </div>

            <div class="bg-blue-100 shadow rounded-xl p-4 flex items-center space-x-4 hover:bg-ungutua" @click="showDetailKelasAktif">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
            <div>
                <p class="text-sm font-bold">Open</p>
                <p class="text-xl font-semibold text-ungutext">{{ kelasAktifTotal }}</p>
              </div>
            </div>

            <div class="bg-blue-100 shadow rounded-xl p-4 flex items-center space-x-4 hover:bg-ungutua" @click="showDetailKelasKosong">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            <div>
                <p class="text-sm font-bold">In Progress</p>
                <p class="text-xl font-semibold text-ungutext">{{ kelasKosongTotal }}</p>    
              </div>
            </div>

            <div class="bg-blue-100 shadow rounded-xl p-4 flex items-center space-x-4 hover:bg-ungutua" @click="showDetailKelasAktif">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            <div>
                <p class="text-sm font-bold">Resolved</p>
                <p class="text-xl font-semibold text-ungutext">{{ kelasAktifTotal }}</p>
              </div>
            </div>
          </div>
        </div>
        </div>


           <!-- statistik -->
    <div class="bg-white shadow rounded-xl p-6">
      <h2 class="text-lg font-semibold mb-4">Statistic</h2>
      <canvas id="prestasiChart"></canvas>
      <div class="flex justify-center gap-32 mt-4 text-sm">
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 bg-pinktua rounded-full"></div>
          <span>Total Ticket</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 bg-ungutua rounded-full"></div>
          <span>Ticket Open</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 bg-abuabu rounded-full"></div>
          <span>In Progress</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 bg-abuabu rounded-full"></div>
          <span>Resolved</span>
        </div>
      </div>
    </div>
      
    <div class="bg-white rounded-xl shadow p-6 mt-4">
    <!-- Header -->
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-lg font-semibold text-gray-800">Ticket List</h2>
      <a href="#" class="text-sm text-indigo-600 hover:underline">
        View All
      </a>
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
    <button @click="closeModalEdit" class=" px-4 py-2 mt-3 rounded w-full hover:bg-gray-600">Tutup</button>
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
import Chart from 'chart.js/auto'

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

  mounted() {
    const ctx = document.getElementById('prestasiChart')

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2025'],
        datasets: [
          {
            label: 'Total Ticket',
            data: [8],
            backgroundColor: '#9F4C5F'
          },
          {
            label: 'Open',
            data: [1],
            backgroundColor: '#E4B6C0'
          },
          {
            label: 'In Progress',
            data: [2],
            backgroundColor: '#9CA3AF'
          },
          {
            label: 'Resolved',
            data: [5],
            backgroundColor: '#6B7280'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: { grid: { display: false } },
          y: {
            beginAtZero: true,
            ticks: { stepSize: 1 }
          }
        }
      }
    })
  }
}
</script>

