<template>
  <div>

    <!-- Modal -->
    <div class="modal show fade" id="exampleModal" tabindex="-1" role="dialog" style="display: block" v-if="visible">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{title}}</h5>
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
export default {
    props: ["title","abstract", "url"],

data(){
    return{
        visible: false
    }
},
created(){
    this.$root.$on('open-modal', () => {this.visible = true})
}


};
</script>

<style scoped>
</style>