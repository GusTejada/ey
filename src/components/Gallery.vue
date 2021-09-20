<template>
  <div class="container">
    <div class="loading" v-if="loading">
      <img src="../assets/loading-load.gif" class="loadingImg">
    </div>
    <div v-if="imagesArray.length" class="gallery">
        <img
          :ref="`img-${index}`"
          :data-id="`img-${index}`"
          loading="lazy"
          :src="imagesArray[index].url"
          v-for="(image, index) in imagesArray"
          :key="index"
          @click="deleteImage(index)"
          class="list-complete-item"
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
      imagesArray: [],
      error: '',
      loading: true
    }
  },
  methods: {
    async getApi () {
      try {
        this.imagesArray = await (
          await fetch('https://jsonplaceholder.typicode.com/photos')
        ).json()
      } catch (e) {
        this.error = e
      } finally {
        this.loading = false
      }
    },
    deleteImage (i = 0) {
      const [ref] = this.$refs[`img-${i}`]
      ref.classList.add('img-transition')
    }
  },
  mounted () {
    this.getApi()
    document.addEventListener('transitionend', ({ target }) => {
      target.classList.add('hide')
    }, false)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$breakpoint-tablet: 768px;
$breakpoint-medium-desktop: 1024px;
$breakpoint-large-desktop: 1200px;
.container {
  .loading {
    background:rgba(255, 255, 255, 0.5);
    position:absolute;
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    .loadingImg {
      width:15%;
    }
  }
  .gallery {
    display: flex;
    flex-wrap: wrap;
    img {
      margin: 5px;
      cursor: pointer;
    }
  }
  @media (min-width: $breakpoint-tablet) {
    .gallery {
      img {
        width: calc(50% - 10px);
      }
    }
  }
  @media (min-width: $breakpoint-medium-desktop) {
    .gallery {
      img {
        width: calc(33% - 10px);
      }
    }
  }
  @media (min-width: $breakpoint-large-desktop) {
    .gallery {
      img {
        width: calc(25% - 10px);
      }
    }
  }
  .img-transition {
    opacity:0;
    transition: 250ms ease-in-out;
  }
  .hide {
    display:none;
  }
}
</style>
