<template :key="refreshKey">
  <nav class="nav-bar">
      <router-link to="/">Home</router-link>
    <div>
      <router-link to="/about">About</router-link> |
      <router-link to="/product-card">Test</router-link> |
      <router-link to="/customers">Customers</router-link> |
      <router-link to="/test-view">Test View</router-link>
      

    </div>
    <div v-if="this.checkIfNull(this.authToken)">
      <button type="button" class="btn btn-success" @click="redirectToLogin">Login</button>
    </div>
    <div v-else>
      <button type="button" class="btn btn-danger" @click="logout">Logout</button>
    </div>

  </nav>


  <div class="page">
    <router-view/>

  </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid'

export default {
  components: {
    
  },
  data(){
    return {
      authToken: null,
      refreshKey: uuidv4(),
    }
  },
  mounted(){
    this.authToken = localStorage.getItem('authToken')
    console.log(this.authToken)
  },
  methods: {
    redirectToLogin(){
      this.$router.push('login')
    },
    logout(){
      this.$store.dispatch('logout')
    },
    checkIfNull(x){
      return x == null || x === 'null'
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-bar {
  display:flex;
  justify-content: space-between;
  position:fixed;
  z-index: 1000;
  width:100%;
  margin-bottom:2em;
  padding: 1em;
  border-bottom:solid 1px black;
  background-color: #0b8af4;
}
.page {
  padding-top:5em;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: white;
  /* color: #42b983; */
}
</style>
