
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './assets/main.css'ti einai auto?
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
import "bootstrap-icons/font/bootstrap-icons.css"


createApp(App).use(bootstrap).use(store).use(router).mount('#app')
