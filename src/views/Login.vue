<template>
  <div class="bg-blue-200 h-screen overflow-auto">

    <!-- Form -->
    <div class="flex items-center justify-center p-4 mt-28">
      <div class="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md animate-fade-in">
        <div class="flex items-center justify-center mb-5">
          <img src="../assets/img/logoo.png" class="w-24 h-auto" />
        </div>
        <h2 class="text-center font-bold text-lg mb-6 text-blue-900">SIGN IN</h2>

        <form @submit.prevent="loginUser" class="space-y-4">
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

          <!-- Submit -->
           <!-- <RouterLink to="/dashboardadmin"> -->
          <button
            type="submit"
            class="text-black bg-blue-200 hover:bg-blue-300 w-full font-medium rounded-lg text-sm border border-ungutext h-10 px-5 py-2.5 shadow-lg transition transform hover:scale-105"
          >
            SIGN IN
          </button>
          <!-- </RouterLink> -->

          <div class="flex mt-2">
            <p>Don't have an account?</p>
            <RouterLink to="/createaccount">
              <p class="ml-2 text-blue-700 transition-all duration-300 ease-in-out hover:text-blue-900">
                Register now
              </p>
            </RouterLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
      loading: false,
    };
  },
  methods: {
    async loginUser() {
      // Validasi input
      if (!this.email || !this.password) {
        Swal.fire({
          icon: 'warning',
          title: 'Form belum lengkap',
          text: 'Harap isi semua field terlebih dahulu!',
        });
        return;
      }

      this.loading = true;

      Swal.fire({
        title: 'Login...',
        text: 'Mohon tunggu sebentar',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      try {
        // Kirim request login
        const response = await axios.post(
          `${import.meta.env.VITE_APP_BACKEND_URL_API}/auth/login`,
          {
            email: this.email,
            password: this.password,
          },
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }
        );

        const { token, user, redirect, message } = response.data;

        // Simpan token di sessionStorage
        sessionStorage.setItem('access_token', token);
        sessionStorage.setItem('user', JSON.stringify(user));
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        // Simpan user ke Vuex
        // this.$store.commit('setUser', user);

  const targetRoute =
          user.role === 'admin'
            ? '/dashboardadmin'
            : '/dashboard';

        // Tampilkan sukses lalu redirect
        Swal.fire({
          icon: 'success',
          title: 'Login Berhasil',
          text: message || 'Berhasil login',
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          this.$router.push(targetRoute);
        });
      } catch (error) {
        console.error("Login error:", error);

        let errorMessage = 'Terjadi kesalahan!';
        if (error.response) {
          const errors = error.response.data.errors;
          errorMessage = errors
            ? Object.values(errors).flat().join('\n')
            : error.response.data.message || errorMessage;
        }

        Swal.fire({
          icon: 'error',
          title: 'Login Gagal',
          text: errorMessage,
        });

      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    // Restore token (jika ada)
    const token = sessionStorage.getItem('access_token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }
};
</script>

