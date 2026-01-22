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
            <input
                v-model="password"
                type="password"
                class="form-input w-full border border-ungutext rounded-lg h-10 pl-4"
                placeholder="password"
              />
            </div>
   
          <!-- Confirm Password -->
          <div>
            <label class="block text-sm font-medium text-blue-900 mb-1">Confirm Password</label>
            <input
              v-model="password_confirmation"
              type="password"
              class="form-input w-full border border-ungutext rounded-lg h-10 pl-4"
              placeholder="confirm password"
            />
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

