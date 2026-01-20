<template>
<div class="relative flex h-screen overflow-hidden w-full">

    <!-- sidebar -->
     <div class="bg-blue-200 w-64 h-screen hidden md:flex md:flex-col shrink-0">
        <div class="shadow text-xl px-2 py-4">
             LOGO
        </div>

        <div class="flex-1">
        <RouterLink to="/dashboard">
            <button class="w-64">
            <div class="flex mt-2 shadow justify-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-2 mx-1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <div class="py-2 font-semibold">Dashboard</div>
            </div>
            </button>
        </RouterLink>

        <RouterLink to="/myticket">
            <button class="w-64">
            <div class="flex mt-2 shadow justify-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-2 mx-1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                </svg>
                <div class="py-2 font-semibold">My Ticket</div>
            </div>
            </button>
        </RouterLink>

        <RouterLink to="/addticket">
            <button class="w-64">
            <div class="flex mt-2 shadow justify-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-2 mx-1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div class="py-2 font-semibold">New Tickets</div>
            </div>
            </button>
        </RouterLink>
        </div>

        <div class="justify-end">
        <RouterLink to="/">
            <button class="w-64">
            <div class="flex mt-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] justify-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-2 mx-1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </svg>
                <div class="py-2 font-semibold">Logout</div>
            </div>
            </button>
        </RouterLink>
        </div>
     </div>

        <div class="flex-1 min-w-0 w-full overflow-hidden flex flex-col">
        <!-- header -->
        <div class="shrink-0">
            <div class="shrink-0 bg-white shadow px-2 py-4 flex items-center">
                <h1 class="text-xl font-bold">Dashboard</h1>

            <div class="ml-auto flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <h1 class="ml-2 mr-2 md:mr-10 truncate">Nama</h1>
            </div>
            </div>
        </div>

        <!-- konten -->
       <!-- <div class="flex-1 w-full overflow-y-auto p-4 md:p-8">
          <slot />
        </div> -->

        <main class="flex-1 overflow-y-auto bg-gray-100 p-6">
      <slot />
    </main>

      </div>

 </div>
</template>



<style scoped>

button {
  transition: all 0.2s;
}
button:hover {
  transform: scale(1.05);
}
/* Warna default link */
a {
  color: #5D69B4;
  text-decoration: none;
}

/* Saat di-hover */
a:hover {
  color: #A55166;
}

/* Saat link di-klik */
a:active, a:focus {
  color: #A55166;
}

/* Saat link aktif (Vue Router) */
.router-link-active {
  color: #A55166;
}
  .animate-fade-in {
  animation: fade-in 0.7s ease-out forwards;
}
.animate-slide-down {
  animation: slide-down 0.6s ease-out forwards;
}
.animate-slide-up {
  animation: slide-up 0.6s ease-out forwards;
}
.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out forwards;
}
@keyframes fade-in {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes slide-down {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes slide-up {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fade-in-right {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

</style>
