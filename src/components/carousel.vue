<template>
  <swiper
    style="height: 600px"
    :spaceBetween="30"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="mySwiper"
  >
    <!-- Slide One -->
    <swiper-slide class="slide-container">
      <div class="slide-content">
        <div class="text">
          <h2>iPhone X</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy.
          </p>
          <a href="">MORE</a>
        </div>
        <div class="image">
          <img src="/src/assets/images/31P8qn2ZCFL._AC__1_-removebg-preview.png" alt="" />
        </div>
      </div>
    </swiper-slide>
    <!-- Slide Two -->
    <swiper-slide>
      <singleBanner />
    </swiper-slide>
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
import singleBanner from '@/components/banners/singleBanner.vue'

const modules = ref([Pagination])
</script>
<style lang="scss" scoped>
.slide-container {
  background: linear-gradient(
    219deg,
    rgba(252, 121, 69, 1) 0%,
    rgba(253, 29, 139, 1) 30%,
    rgba(131, 58, 180, 1) 90%
  );
  padding: 0 150px;
}
.slide-content {
  display: flex;
  justify-content: space-around;

  height: 100%;

  .text {
    width: 350px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: start;
    color: white;
    a {
      color: white;
      width: fit-content;
      text-decoration: none;
      border-bottom: 2px solid white;
    }
    p {
      margin: 30px 0;
    }
  }

  .image {
    position: relative;
    top: 160px;
    // img {

    // }
  }
}
</style>
