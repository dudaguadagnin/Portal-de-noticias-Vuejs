<template>
    <div class="row">
      <div class="col-sm-6 responsiv">
        <div class="card mb-3" style="width: 18rem" v-for="post in posts">
          <a :href="post.url" target="_blanck"
            ><img class="imagem-responsiva" :src=post.multimedia[0].url alt=""
          /></a>
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.abstract }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      
    </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.imagem-responsiva{
  width: 100%;
}
.respondiv .respondivo{
display: inline-block;
}
.respondiv{
  list-style: none;
}
</style>