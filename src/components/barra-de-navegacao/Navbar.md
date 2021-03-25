NavBar example:
```vue
<template>
  <div>
  <NavBar>
    <nav class="navbar sticky-top navbar-dark bg-dark nav-cor">
      <button class="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarTogglerDemo03" 
        aria-controls="navbarTogglerDemo03" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>

      <a class="navbar-brand active" href="#" >Portal de Notícias</a>
      <div class="collapse navbar-collapse cor" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">Science</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Technology</a>
          </li>           
        </ul>
      </div>
    </nav>
    </NavBar>
  </div>
</template>

<style scoped>
.nav-cor {
  background-color: rgb(81, 163, 163);
}
.active {
  color: whitesmoke;
}
</style>

```