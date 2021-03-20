<template>
  <div>
    
    

    <div class="row">
      <div class="col-sm-6 responsiv">
        <div class="card mb-3" style="width: 18rem" v-for="post in posts">

          <a :href="post.url" target="_blanck">
            <img class="imagem-responsiva" :src="post.multimedia[0].url"/>
          </a>

          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.abstract }}</p>
            <a :href="post.url" class="btn btn-primary">Go somewhere</a>
            <modal :title="title"/>
            <button type="button" class="btn btn-primary" @click="$root.$emit('open-modal')">modal</button>
        
          </div>
          
        


        </div>
        

      </div>
    </div>
  
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

};
</script>

<style scoped>
.imagem-responsiva {
  width: 100%;
}
.respondiv .respondivo {
  display: inline-block;
}
.respondiv {
  list-style: none;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>


<!--
<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

 Modal 
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    Modal content
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal Header</h4>
      </div>
      <div class="modal-body">
        <p>Some text in the modal.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
-->