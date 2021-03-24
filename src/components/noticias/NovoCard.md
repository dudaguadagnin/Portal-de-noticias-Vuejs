

```vue
//recebe array de posts(noticias)
<div class="row">
      <div class="col-md-4">
        <div class="card mb-4 shadow-sm clique" style="width: 18rem" v-for="post in posts">
          <a target="_blanck">
            <img class="imagem-responsiva" :src="post.multimedia[0].url" />
          </a>
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
          </div>
        </div>
      </div>
    </div>
```