<template>

<div>
      <div class="card" style="width: 18rem" v-for="post in posts">
        <a :href="post.url" target="_blanck"><img :src="post.multimedia" alt=""/></a>
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.abstract }}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>

</template>

<script>


export default {
  props: {
    posts: {
      type: Object,
      required: true,
    },
  },
  
}
</script>