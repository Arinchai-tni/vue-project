<template>
  <div id="app">
    <div class="nav">
    <router-link to="/">To-do</router-link>
    <router-link to="/archive">Archive Task</router-link>
    </div>
      <router-view />
    </div>
  
</template>

<script>

export default {
  name: 'App',

  }

</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 
}
.nav{
  width: 100%;
  padding: 20px 0;
  margin-bottom: 20px;
  background-color: #2c3e50;
}
.nav a{
    color: #ffffff;
    margin: 0 20px;
    
}
</style>
