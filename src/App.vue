<template>
  <div id="app">
    <Gallery msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Gallery from './components/Gallery.vue'

export default {
  name: 'App',
  components: {
    Gallery
  }
}
</script>

<style lang="scss">
html, body {
  margin:0px;
}
#app {
}
</style>
