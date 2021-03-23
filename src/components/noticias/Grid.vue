<template>
  <div class="card-columns cor">
    <div class=" col-6">
      <main class="container flex-grow px-4 mx-auto my-12">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
export default {
};
</script>
<style scoped>
.cor{
  background-color: ghostwhite;
}
</style>