<template>
  <div>
    <Navbar @home="getNoticia('home')" @science="getNoticia('science')" @technology="getNoticia('technology')"  />
    <Grid @science="getNoticia('science')" @technology="getNoticia('technology')">
      <NovoCard :posts="noticias" />
    </Grid>
  </div>
</template>

<script>
import axios from "axios";
import Grid from "./components/noticias/Grid";
import NovoCard from "./components/noticias/NovoCard";
import Navbar from './components/barra de navegacao/Navbar';

export default {
  data() {
    return {
      noticias: [],
    };
  },

  components: {
    Grid,
    NovoCard,
    Navbar,
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

</style>
