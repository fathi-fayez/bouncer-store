<template>
  <swiper
    :spaceBetween="30"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(photo, index) in photos" :key="index"
      ><img :src="`src/assets/images/${photo}`" alt=""
    /></swiper-slide>
  </swiper>
</template>
<script setup>
import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import '../assets/main.css'
// import required modules
import { Pagination } from 'swiper/modules'

const modules = ref([Pagination])
const photos = ref(['CAROUSEL.png', '107926695_175772.jpg', '107920287_198894.jpg'])
</script>
