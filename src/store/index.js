import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async logout(){
      // this.$router.push({name: 'home'})
      await axios.post('/api/logout')
      .then(() => {
        localStorage.setItem('authToken', null)
        location.reload()
      })
      .catch(() => {
      })
    }
  },
  modules: {
  }
})
