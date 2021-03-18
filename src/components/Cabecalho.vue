<template>
  <nav class="navbar navbar-expand-lg navbar-home">
    <a class="navbar-brand" href="#">Home</a>
    <a class="navbar-brand" @dblclick="acessou = !acessou">tech</a>
  
  </nav>
</template>

<script>
import sectionsData from "../routes"
import { computed } from "vue"
export default {
  data(){
    return{
      acessou:true
    }
  }
}
</script>

<style>
.navbar {
  background:rgb(102, 211, 211);
}
.navbar-home a {
  color: #fff;
}
.navbar-home a:hover {
  color: #000;
}
</style>