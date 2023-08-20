
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './assets/main.css'ti einai auto?
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
import "bootstrap-icons/font/bootstrap-icons.css"
import axios from 'axios'

self.axios = axios
//Sets the bearer token by default in every call
if (localStorage.getItem('authToken')){
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authToken')}`
}

createApp(App).use(bootstrap).use(store).use(router).mount('#app')
