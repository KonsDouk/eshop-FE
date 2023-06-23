import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from "bootstrap-vue";
// import "./assets/main.css";

// Import Bootstrap and BootstrapVue CSS files (order is important)

// Make BootstrapVue available throughout your project
createApp.use(BootstrapVue);

// // Optionally install the BootstrapVue icon components plugin
// createApp.use(IconsPlugin);

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.js'

createApp(App).use(store).use(router).mount('#app')
