<template>
  <div>
    <div class="modal show fade" tabindex="-1" role="dialog" style="display: block">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{title}}</h5>
            <button
              type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('close')" >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
              <p>{{abstract}}</p>
              <a class="alink" :href=url>click to access</a>
          </div>
          <div class="modal-footer">
             <!--
              ao clicar emite fechamento do modal
              @event close
            -->
            <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show" ></div>
  </div>
</template>

<script>
['title', 'abstract', 'url',]
/**
   * As informaçoes do modal são exibidas ao clicar no card.
   * @displayName Modal
   */
export default {
  props: { 
    /**
       * Titulo da notícia
       */
    title: {
      required: true,
      type: String
    },
    /**
       * Resumo da notícia
       */
    abstract: {
      required: true,
      type: String
    },
    /**
       * Link de endereço da notícia
       */
    url: {
      required: true,
      type:String
    }
  },
};
</script>

<style scoped>
</style>