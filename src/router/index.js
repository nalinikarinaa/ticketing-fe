// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import CreateAccount from '../views/CreateAccount.vue'
import DashboardAdmin from '../views/DashboardAdmin.vue'
import AllTicket from '../views/AllTicket.vue'
import DetailTicket from '../views/DetailTicket.vue'
import ManajemenUser from '../views/ManajemenUser.vue'
import Dashboard from '../views/Dashboard.vue'
import AddTicket from '../views/AddTicket.vue'
import MyTicket from '../views/MyTicket.vue'

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/createaccount', name: 'CreateAccount', component: CreateAccount },
  { path: '/dashboardadmin', name: 'DashboardAdmin', component: DashboardAdmin },
  { path: '/allticket', name: 'AllTicket', component: AllTicket },
  { path: '/detailticket', name: 'DetailTicket', component: DetailTicket },
  { path: '/users', name: 'ManajemenUser', component: ManajemenUser },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/addticket', name: 'AddTicket', component: AddTicket },
  { path: '/myticket', name: 'MyTicket', component: MyTicket },
]

const router = createRouter({
  history: createWebHistory(), // pakai history mode
  routes
})

export default router
