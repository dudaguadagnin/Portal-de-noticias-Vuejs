<template>
  <div>
    <div class="row ">
      <div class="col-sm-6 responsiv">
        <div @click="showModal(post)" class="card mb-3 clique" style="width: 18rem" v-for="post in posts">
          <a   target="_blanck">
            <img  class="imagem-responsiva" :src="post.multimedia[0].url"/>
          </a>
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
          </div>
        </div>
      </div>
    </div>
    <Modal v-if="Modalshow" :title="title" :abstract="abstract" :url="url" @close="Modalshow=false"></Modal> 
  </div>
</template>


<script>
import Modal from "./Modal"

export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  components:{
    Modal
  },
  data(){
    return{
      Modalshow : false,
      title:'',
      abstract:'',
      url:''
    }
  },
  methods:{
    showModal(post){
      this.title = post.title
      this.abstract = post.abstract
      this.url = post.url
      this.Modalshow = true
    }
  },
};
</script>

<style scoped>
.imagem-responsiva {
  width: 100%;
}
.clique :hover{
  cursor: pointer;
}
</style>