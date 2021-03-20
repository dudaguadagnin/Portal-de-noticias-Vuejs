<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-home">
      <a class="navbar-brand" href="#" v-on:click="getNoticia('home')">Home</a>
      <a class="navbar-brand" href="#" v-on:click="getNoticia('science')">Science</a>
      <a class="navbar-brand" href="#" v-on:click="getNoticia('technology')">Technology</a>
    </nav>

    

    <Layout>
      <novoCard :posts="noticias" />
    </Layout>
  </div>
</template>


<script>
//import Cabecalho from "./components/Cabecalho";  <Cabecalho/>
import axios from "axios";
import Layout from "./components/Layout";
import novoCard from "./components/novoCard";


export default {
  data() {
    return {
      noticias: [],
    };
  },

  components: {
    // Cabecalho,
    Layout,
    novoCard,

  },

  
  mounted() {
   this.getNoticia("home");

 },
  methods: {
    getNoticia(section) {
      const response = axios
        .get(
          `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=lTj6LO5Y6a79PmUcJMukzeaAAN2TFBzs`
        )
        .then((response) => {
          this.noticias = response.data.results;
        })
        .catch((err) => console.log(err));
    },
  },

};
</script>

<style>
.navbar {
  background: rgb(102, 211, 211);
}
.navbar-home a {
  color: #fff;
}
.navbar-home a:hover {
  color: #000;
}
</style>
