<template>
  <div class="bg-blue-200 h-screen overflow-auto">

    <!-- Form -->
    <div class="flex items-center justify-center p-4 mt-28">
      <div class="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md animate-fade-in">
        <div class="flex items-center justify-center mb-5">
          <img src="../assets/img/logoo.png" class="w-24 h-auto" />
        </div>
        <h2 class="text-center font-bold text-lg mb-6 text-blue-900">SIGN IN</h2>

        <form @submit.prevent="" class="space-y-4">
          <!-- Email -->
         <div>
            <label class="block text-sm font-medium text-blue-900 mb-1">Email</label>
            <input
            
              type="email"
              class="form-input w-full border border-ungutext rounded-lg h-10 pl-4"
              placeholder="email"
            />
          </div>


          <!-- Password -->
          <div>
           <label class="block text-sm font-medium text-blue-900 mb-1">Password</label>
            <input
              
                type="password"
                class="form-input w-full border border-ungutext rounded-lg h-10 pl-4"
                placeholder="password"
              />
            </div>

          <!-- Submit -->
           <RouterLink to="/dashboardadmin">
          <button
            type="submit"
            class="text-black bg-blue-200 hover:bg-blue-300 w-full font-medium rounded-lg text-sm border border-ungutext h-10 px-5 py-2.5 shadow-lg transition transform hover:scale-105"
          >
            SIGN IN
          </button>
          </RouterLink>

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
