<template>
  <div>
    <Cabecalho />
   <Layout>

    <novoCard :posts="noticias" />
  </Layout>
    
  </div>
</template>


<script>
import Cabecalho from "./components/Cabecalho";
import axios from "axios";
import Layout from "./components/Layout"
import novoCard from "./components/novoCard"

export default {
  data() {
    return {
      section: "science",
      noticias: [],
    };
  },

  components: {
    Cabecalho,
     Layout,
     novoCard
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
  mounted() {
    this.getNoticia("science");
    
  },

};
</script>

<style>
#app {
}
</style>
