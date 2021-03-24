<template>
<div>
  <section class="jumbotron text-center">
    <div class="container">
      <h1 class="jumbotron-heading">Welcome to the News Portal!</h1>
          <p class="lead text-muted">Access the sections</p>
          <p>
            <!--
            aciona a seção science
            @event science
          -->
            <a href="#" class="btn btn-primary my-2" @click="$emit('science')">Science</a>
            <!--
              aciona a seção technology
              @event technology
            -->
            <a href="#" class="btn btn-secondary my-2" @click="$emit('technology')">Technology</a>
          </p>
    </div>
  </section >


  <div class="card-columns cor espaco">
    <div class=" col-6 ">
      <main class="container flex-grow px-4 mx-auto my-12 ">
        <slot />
      </main>
    </div>
  </div>




</div>
</template>

<script>
/**
   * Orgaliza o grid dos cards de noticia.
   * @displayName Grid
   */
export default {
};
</script>
<style scoped>
.cor{
  background-color: ghostwhite;
}
.jumbotron{
  margin: 0;
}
.espaco{
  padding-top: 2rem;
}
</style>