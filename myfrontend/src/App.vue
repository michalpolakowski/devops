<template>
  <div id="nav">
    <router-link to="/">Pubs</router-link> |
    <router-link to="/create-pub">Create pub</router-link>
  </div>
  <router-view/>
</template>

<style>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
