<template>
  <nav class="nav-bar">
      <router-link to="/">Home</router-link>
    <div>
      <router-link to="/about">About</router-link> |
      <router-link to="/product-card">Test</router-link>
    </div>
    <router-link to="/user-profile">Profile</router-link>
    
  </nav>
  <div class="page">
    <router-view/>

  </div>
</template>

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
