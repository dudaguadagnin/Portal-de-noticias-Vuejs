<template>
  <div>
    <Cabecalho />
   <Layout>

    <novoCard :posts="noticias" />
  </Layout>
    <!-- 
    <div v-for="posts in processPost">
      <div class="card" style="width: 18rem" v-for="post in posts">
        <a :href="post.url" target="_blanck"><img :src="post.imagem" alt=""/></a>
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.abstract }}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>!-->
    
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
          this.noticias = results.map(noticia => ({
            title: noticia.title,
            abstract: noticia.abstract,
            url: noticia.url,
            multimedia: this.extractImage(noticia).url,
           
         
          }))
        })
        .catch((err) => console.log(err));
    },
    extractImage(noticias){

      const defaultImg = {
        url: "http://placehold.it/210x140?text=N/A",
       
      }
      if (!noticias.multimedia) {
        return defaultImg
      }
      let imgObj = noticias.multimedia.find(
        media => media.format === "mediumThreeByTwo210"
      )
      return imgObj ? imgObj : defaultImg
    }
  },
  mounted() {
    this.getNoticia("science");
    
  },
/*
  computed: {
    processPost() {
      let posts = this.noticias;
      posts.map((post) => {
        let img = post.multimedia.find(media => media.format === "sperJumbo");
        post.imagem = img
          ? img.url
          : "https://f.i.uol.com.br/fotografia/2020/06/10/15918320315ee16ddf0cab9_1591832031_3x2_md.jpg";
      });
      let i,
        j,
        chunedArray = [],
        chunk = 4;
      for (i = 0, j = 0; i < posts.length; i += chunk, j++) {
        chunedArray[j] = posts.slice(i, i + chunk);
      }
      return chunedArray;
    },
  },
*/
  /*
  created(){
    let promise = this.$http.get('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=lTj6LO5Y6a79PmUcJMukzeaAAN2TFBzs')
    .then(res => res.json())
   // .then(noticias => this.noticias = noticias)
    console.log('http')
    
  },
const promise = axios.get('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=lTj6LO5Y6a79PmUcJMukzeaAAN2TFBzs')

    promise.then(response => {
      this.err = null;
      this.apiData = response.data;
      console.log('axios')
      console.log(this.apiData)
    })
    promise.catch(err => {
      this.err = err;
      this.apiData = null;
    })




          <div class="card" style="width: 18rem;" v-for="post in posts">
        <div class="painel">
          <div class="painel-titulo">
            {{ post.title }}
          </div>
          <a :href="post.url" target="_blanck"
            ><img :src="post.imagem" alt=""
          /></a>

          <div class="painel-corpo">
            <p>{{ post.abstract }}</p>
          </div>
        </div>
      </div>
    </div>
*/
};
</script>

<style>
#app {
}
</style>
