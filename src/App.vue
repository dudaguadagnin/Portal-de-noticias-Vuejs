<template>
  <div >
    <Cabecalho />
    <button>oi</button>

    
  </div>
</template>


<script>
import Cabecalho from './components/Cabecalho'
import Api from './API/Api.js'
import axios from 'axios'
export default {

 
  components:{
    Cabecalho,
    "minha-api": Api
  },
  mounted() {
    this.getPosts();
  },

methods: {
  getPosts() {

    const promise = axios.get('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=lTj6LO5Y6a79PmUcJMukzeaAAN2TFBzs')

    promise.then(response => {
      this.err = null;
      this.apiData = response.data;
      console.log(this.apiData)
    })
    promise.catch(err => {
      this.err = err;
      this.apiData = null;
    })
  }
}


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
