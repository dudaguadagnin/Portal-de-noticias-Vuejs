# Portal de Noticias Vue.js

Utilizando Api do New Yourk Times para obter as notícias;
Os estilos vem da biblioteca Bootstrap

As noticias estão expostas em forma de card com imagem e título, ao clicar no card exibe um modal contendo titulo, url, e descrição da notícia.

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
## Piramidde de testes

contem 3 niveis : Testes unitarios
Testes de integração e Testes de ponta a ponta

Testes unitarios: são pequenos e rapidos, com testes independentes, sobre partes especificas da aplicaçao como um componente

Testes de integração: testam como as unidades interagem entre si, são usados em comunicações com banco de dados e microserviços

Testes de ponta a ponta: validam todo o funcionamento de fluxos que o usuario mais faz, testam a aplicação como um todo, com isso o tempo de teste é maior


For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
