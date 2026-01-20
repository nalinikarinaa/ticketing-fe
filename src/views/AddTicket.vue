<template>
<SidebarUser>
    
<div class="h-screen">
    <div class="bg-white rounded-xl shadow p-6 mt-4">
        <h2 class="text-lg font-semibold text-gray-800 text-center">Add Tickets</h2>
        <form>
        <!-- judul -->
         <div class="mt-6">
            <label class="block text-sm font-medium text-blue-900 mb-1">Judul</label>
            <input
            
              type="judul"
              class="form-input w-full border border-ungutext rounded-lg h-10 pl-4 border border-gray-300"
              placeholder="judul"
            />
          </div>

          <!-- kategori -->
        <div class="mt-6">
            <label class="block text-sm font-medium text-blue-900 mb-1">Kategori</label>
                <select
                    id="kategori"
                    name="kategori"
                    class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ungutua"
                    >
                    <option value="">-- Pilih kategori --</option>
                    <option value="bug">Bug / error</option>
                    <option value="requestfitur">Request Fitur</option>
                    <option value="aksesakun">Akses / akun</option>
                    <option value="performa">Performa</option>
                    <option value="lainnya">Lainnya</option>
                </select>
          </div>
        
          <!-- prioritas -->
        <div class="mt-6">
            <label class="block text-sm font-medium text-blue-900 mb-1">Prioritas</label>
                <select
                    id="prioritas"
                    name="prioritas"
                    class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ungutua"
                    >
                    <option value="">-- Pilih Prioritas --</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
          </div>  
          
          <!-- deskripsi -->
        <div class="mt-6">
          <label class="block text-sm font-medium text-blue-900 mb-1">Deskripsi</label>
          <textarea
            placeholder="deskripsi"
            id="deskripsi"
            v-model="deskripsi"
            rows="4"
            class="block w-full border border-gray-300 rounded-md p-2 text-sm">
          </textarea>
        </div>

        <!-- upload file -->
        <div class="mt-5">
          <label class="block text-sm font-medium text-blue-900 mb-1">
            Upload Photo
          </label>

          <div class="flex items-center gap-3 border border-gray-300 rounded-md">
            <label
              for="file_input"
              class="cursor-pointer bg-gray-400 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-500"
            >
              Choose File
            </label>

            <span class="text-sm text-gray-500">
              {{ fileName || "No file chosen" }}
            </span>

            <input
              id="file_input"
              type="file"
              class="hidden"
              @change="handleFileUpload"
            >
          </div>
        </div>



         <!-- Tombol Submit -->
          <div class="pt-4">
            <button
              type="submit"
              class="bg-green-100 text-green-700 hover hover:bg-gray-200 border-black rounded-md px-6 mt-3"
            >
              Submit Ticket
            </button>
          
          </div>
          </form>

    </div>
</div>
</SidebarUser>

</template>

<script>
import SidebarUser from "../components/SidebarUser.vue";

export default {
  name: "Layout",
  components: {
    SidebarUser,
  },
  data() {
    return {
      form: {
        judul: "",
        kategori: "",
        prioritas: "",
        deskripsi: "",
        file: null,
        fileName: ""
      },
    };
  },
  methods: {
     handleFileUpload(e) {
    const file = e.target.files[0]
    if (file) this.fileName = file.name
  },
    submitForm() {
      console.log("Data form:", this.form);
      // nanti di sini bisa kamu fetch ke API Laravel
      alert("Ticket berhasil disubmit!");
    },
  },
};
</script>