<template>



<nav class="navbar navbar-expand-lg navbar-light nav-cor">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#" @click="$emit('home')">Portal de Notícias</a>

  <div class="collapse navbar-collapse cor" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#" @click="$emit('science')">Science <span class="sr-only">(current)</span></a>
      </li>
    <li class="nav-item active">
        <a class="nav-link" href="#" @click="$emit('technology')">Technology <span class="sr-only">(current)</span></a>
      </li>

    </ul>
  </div>
</nav>


</template>



<script>

export default {
};
</script>
<style scoped>
.nav-cor{
    background-color:rgb(81, 163, 163);
}
</style>