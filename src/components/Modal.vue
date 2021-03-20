<template>
  <div>

    <!-- Modal -->
    <div class="modal show fade" id="exampleModal" tabindex="-1" role="dialog" style="display: block" v-if="visible">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{data.title}}</h5>
            <button
              type="button" class="close" data-dismiss="modal" aria-label="Close" @click="visible = false">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
              <p>{{abstract}}</p>
              <slot></slot>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="visible = false">
              Close
            </button>
            <button type="button" class="btn btn-primary">{{url}}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show" v-if="visible"></div>
  </div>
</template>

<script>
['data']
export default {
    props:{
      data:{
        type: String
      }
    },

data(){
    return{
        visible: false
    }
},
created(){
   // this.$root.$on('open-modal', () => {this.visible = true})
   this.showModal('post', () => {this.visible = true})

},
methods:{
  showModal(post){
      this.modalData = post
      //abrir modal
    }
}


};
</script>

<style scoped>
</style>