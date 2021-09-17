<template>
  <div id="app">
    <Gallery/>
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
