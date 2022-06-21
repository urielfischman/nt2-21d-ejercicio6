<template>
  <div>
    <Header/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  data (){
    return {
    }
  },
  components: {
    Header
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: #232323;
  margin: 0;
  font-family: "Montserrat", "Avenir";
}
</style>
