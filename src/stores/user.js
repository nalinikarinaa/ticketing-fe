import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    setUser(user, token) {
      this.user = user
      this.token = token
      // simpan ke sessionStorage juga
      sessionStorage.setItem('user', JSON.stringify(user))
      sessionStorage.setItem('access_token', token)
    },
    logout() {
      this.user = null
      this.token = null
      sessionStorage.removeItem('user')
      sessionStorage.removeItem('access_token')
    },
    restoreUser() {
      const user = sessionStorage.getItem('user')
      const token = sessionStorage.getItem('access_token')
      if (user && token) {
        this.user = JSON.parse(user)
        this.token = token
      }
    }
  }
})
