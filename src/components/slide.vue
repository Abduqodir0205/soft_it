<template>
  <carousel :items-to-show="3.4">
    <slide v-for="(slide, index) in slides" :key="index">
      <img :src="slide.src" :alt="slide.alt" />
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        { src: 'https://picsum.photos/300/200?random=2', alt: 'Image 2' },
        { src: 'https://picsum.photos/300/200?random=1', alt: 'Image 1' },
        { src: 'https://picsum.photos/300/200?random=3', alt: 'Image 3' },
        { src: 'https://picsum.photos/300/200?random=4', alt: 'Image 4' },
        { src: 'https://picsum.photos/300/200?random=5', alt: 'Image 5' },
        { src: 'https://picsum.photos/300/200?random=6', alt: 'Image 6' },
        { src: 'https://picsum.photos/300/200?random=7', alt: 'Image 7' },
        { src: 'https://picsum.photos/300/200?random=8', alt: 'Image 8' },
        { src: 'https://picsum.photos/300/200?random=9', alt: 'Image 9' },
        { src: 'https://picsum.photos/300/200?random=10', alt: 'Image 10' }
      ]
    }
  }
}
</script>

<style>
/* You can customize the carousel styles here if needed */
img {
  /* width: 100%; */
  height: auto;
  border-radius: 5px;
}
</style>
