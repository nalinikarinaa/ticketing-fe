<template>
<SidebarAdmin>
  <div class="bg-white rounded-2xl mx-5 px-5 py-6">
    <h1 class="mb-6 text-xl font-semibold">Nomor tiket</h1>

    <p class="text-lg">pesan keluhan:</p>
    <p class="text-lg">Status:</p>
    <p class="text-lg">Priority:</p>
  </div>

    <div class="bg-white rounded-2xl mx-5 px-5 py-6 mt-6">
    <h1 class="mb-6 text-xl font-semibold">Chatting</h1>

         <div>
            <label class="block text-sm font-medium text-blue-900 mb-1">Send messages here</label>
            <input
            
              type="text"
              class="form-input w-full border border-ungutext rounded-lg h-10 pl-4"
              placeholder="messages..."
            />
          </div>
          <button class="bg-green-100 text-green-700 hover hover:bg-gray-200 rounded-md px-2 mt-3">send</button>
  </div>
</SidebarAdmin>


</template>

<script>
 import SidebarAdmin from '../components/SidebarAdmin.vue';
  
  export default {
    name: 'Layout',
    components: {
      SidebarAdmin,
    }
  }
  </script>