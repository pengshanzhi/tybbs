<template>
  <div id="app">
     <!-- <img src="./assets/logo.png"> -->
     <!-- <keep-alive> -->
    <router-view/>
    <!-- <router-view v-if="true"></router-view>
  </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: 'App',
methods: {
   
 }


}
</script>

<style>
#app {
  margin-left: 0%;
  margin-right: 0%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  /* margin-top: 60px; */
 
}

/* *{
  padding: 0;
  margin: 0;
} */
</style>
