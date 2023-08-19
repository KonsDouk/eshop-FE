<template>
  <nav class="nav-bar">
      <router-link to="/">Home</router-link>
    <div>
      <router-link to="/about">About</router-link> |
      <router-link to="/product-card">Test</router-link> |
      <router-link to="/customers">Customers</router-link> |
      <router-link to="/login">Login</router-link> |

    </div>
    <!-- <router-link to="/my-profile">Profile</router-link> -->

    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Profile
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">My Profile</a>
        <a class="dropdown-item" href="#">Logout</a>
      </div>
    </div>
    
  </nav>


  <div class="page">
    <router-view/>

  </div>
</template>

<script>

export default {
  components: {
    
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
