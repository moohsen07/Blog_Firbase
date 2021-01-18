<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Blog</router-link>
      <router-link to="/add">Add-Blog</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  background: #181818;
  padding: 30px;
  margin-bottom: 40px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #ccc;
  padding: 5px 30px;
  text-decoration: none;

  transition: 0.5s all ease-in-out;
}

#nav a.router-link-exact-active {
  background-color: #ccc;
  color: #181818;
}
</style>
