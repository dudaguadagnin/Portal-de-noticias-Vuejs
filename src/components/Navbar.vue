<template>
<div>
 
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#" @click="$emit('home')"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Portal de Notícias</font></font></a>
  <button @click="showNav()"  class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="true" aria-label="Alternar de navegação">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="navbar-collapse collapse show" id="navbarTogglerDemo02" style="">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#" @click="$emit('science')">
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">
                    Science
                </font>
            </font>
            <span class="sr-only">
                <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">
                        (atual)
                    </font>
                </font>
            </span>
        </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#" @click="$emit('technology')">
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">
                    Tecnology
                </font>
            </font>
        </a>
      </li>
    </ul>
    
  </div>
</nav>



</div>

</template>



<script>

export default {
  data(){
    return{
      Navshow : false,

    }
  },
  methods:{
    showNav(post){
      this.Navshow = true
    }
  },



};
</script>