<template>
  <div class="hello">
    <!-- <pre>{{ imagesArray[0].url }}</pre> -->
    <div v-if="imagesArray.length" class="gallery">
      <img
        :src="imagesArray[index].url"
        v-for="(image, index) in imagesArray"
        :key="index"
        @click="deleteImage(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    msg: String
  },
  data () {
    return {
      imagesArray: []
    }
  },
  methods: {
    getApi () {
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => (this.imagesArray = data))
        .catch(error => {
          console.log(error)
        })
    },
    deleteImage (i) {
      this.imagesArray.splice(i, 1)
    }
  },
  mounted () {
    this.getApi()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$breakpoint-tablet: 768px;
$breakpoint-medium-desktop: 1024px;
$breakpoint-large-desktop: 1200px;

.gallery {
  display:flex;
  flex-wrap:wrap;
  img {
    margin:5px;
    cursor:pointer;
  }
}
@media (min-width: $breakpoint-tablet) {
  .gallery {
    background:lime;
    img {
      width:calc(50% - 10px);
    }
  }
 }
@media (min-width: $breakpoint-medium-desktop) {
  .gallery {
    background:coral;
    img {
      width:inherit;
    }
  }
 }
@media (min-width: $breakpoint-large-desktop) {
  .gallery {
    background:blue;
  }

 }
</style>
