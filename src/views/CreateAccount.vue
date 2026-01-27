<template>
  <div class="bg-blue-200 h-screen overflow-auto">

    <!-- Form -->
    <div class="flex items-center justify-center p-4 mt-28">
      <div class="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md animate-fade-in">
        <div class="flex items-center justify-center mb-5">
          <img src="../assets/img/logoo.png" class="w-24 h-auto" />
        </div>
        <h2 class="text-center font-bold text-lg mb-6 text-blue-900">CREATE ACCOUNT</h2>

        <form @submit.prevent="registerUser" class="space-y-4">
          <!-- Name -->
         <div>
            <label class="block text-sm font-medium text-blue-900 mb-1">Name</label> 
            <input
              v-model="name"
              type="name"
              class="form-input w-full border border-ungutext rounded-lg h-10 pl-4"
              placeholder="name"
            />
         </div>


          <!-- Email -->
            <div>
            <label class="block text-sm font-medium text-blue-900 mb-1">Email</label>
            <input
              v-model="email"
              type="email"
              class="form-input w-full border border-ungutext rounded-lg h-10 pl-4"
              placeholder="email"
            />
          </div>

          <!-- Password -->
      <div>
        <label class="block text-sm font-medium text-blue-900 mb-1">Password</label>
        <div class="relative">
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            class="form-input w-full border border-ungutext rounded-lg h-10 pl-4 pr-10"
            placeholder="password"
          />

          <button
            type="button"
            @click="showPassword = !showPassword"
            class="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
          >
              <span v-if="!showPassword"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            </span>
              <span v-else><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>
            </span>
          </button>
            </div>
          </div>
   
          <!-- Confirm Password -->
           <div>
        <label class="block text-sm font-medium text-blue-900 mb-1">Confirm Password</label>
        <div class="relative">
          <input
            v-model="password_confirmation"
            :type="showPassword ? 'text' : 'password'"
            class="form-input w-full border border-ungutext rounded-lg h-10 pl-4 pr-10"
            placeholder="confirm password"
          />

          <button
            type="button"
            @click="showPassword = !showPassword"
            class="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
          >
              <span v-if="!showPassword"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            </span>
              <span v-else><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>
            </span>
          </button>
            </div>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="text-black bg-blue-200 hover:bg-blue-300 w-full font-medium rounded-lg text-sm px-5 py-2.5 shadow-lg transition transform hover:scale-105"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'RegisterForm',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      showPassword: false
    }
  },

  methods: {
    registerUser() {
      if (!this.name || !this.email || !this.password || !this.password_confirmation) {
        Swal.fire({
          icon: 'warning',
          title: 'Form belum lengkap',
          text: 'Harap isi semua field terlebih dahulu!',
        })
        return
      }
        if (this.password !== this.password_confirmation) {
          Swal.fire({
            icon: 'warning',
            title: 'Password tidak cocok',
            text: 'Password dan konfirmasi password harus sama.',
          })
          return
        }

      Swal.fire({
        title: 'Mendaftarkan akun...',
        text: 'Mohon tunggu sebentar',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        }
      })

      const config = {
        method: 'post',
        url: import.meta.env.VITE_APP_BACKEND_URL_API + '/auth/register',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
        data: {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        },
      }

      axios(config)
        .then((response) => {
          Swal.fire({
          icon: 'info',
          title: 'Cek Email Kamu!',
          text: 'Link verifikasi telah dikirim ke email. Silakan verifikasi dulu sebelum login. Jangan lupa cek di spam inbox juga yaa',
        }).then(() => {
            this.$router.push('/')
          })
        })
        .catch((error) => {
        console.error("Register error:", error);

        if (error.response) {
          const errors = error.response.data?.errors;
          errorMessage = errors
            ? Object.values(errors).flat().join('\n')
            : error.response.data?.message || errorMessage;
        } else if (error.message) {
          errorMessage = error.message;
        }

        Swal.fire({
          icon: 'error',
          title: 'Pendaftaran Gagal',
          text: errorMessage,
        });
      });
    },
  }
}
</script>

