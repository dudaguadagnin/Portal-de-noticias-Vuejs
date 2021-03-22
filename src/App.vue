<template>
  <div>
    <nav class="navbar sticky-top navbar-expand-lg navbar-home">
      <a class="navbar-brand" href="#" v-on:click="getNoticia('home')">Home</a>
      <a class="navbar-brand" href="#" v-on:click="getNoticia('science')">Science</a>
      <a class="navbar-brand" href="#" v-on:click="getNoticia('technology')">Technology</a>
    </nav>
  
    <Grid>
      <novoCard :posts="noticias" />
    </Grid>
  </div>
</template>

<script>
import axios from "axios";
import Grid from "./components/Grid";
import novoCard from "./components/novoCard";

export default {
  data() {
    return {
      noticias: [],
    };
  },

  components: {
    Grid,
    novoCard,
  },

  mounted() {
   this.getNoticia("home");
 },

  methods: {
    getNoticia(section) {
      const response = axios
        .get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=lTj6LO5Y6a79PmUcJMukzeaAAN2TFBzs`)
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
  background-color: darkcyan;
}
.navbar-home a {
  color: #fff;
}
.navbar-home a:hover {
  color: #000;
}
</style>
