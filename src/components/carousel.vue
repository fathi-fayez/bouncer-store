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
      <div class="main-product overflow-hidden px-3 py-4 primary">
        <div
          class="info-img-product w-100 h-100 container d-flex flex-column flex-md-row align-items-center justify-content-center"
        >
          <div class="info-product text-white w-50">
            <h2 class="product-name mb-4 mt-5 text-nowrap">iPhone X</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy.
            </p>
            <a href="">MORE</a>
          </div>
          <div class="image-product">
            <img class="img-fluid" src="/src/assets/images/mobile.1777fab3.png" alt="" />
          </div>
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
  .main-product {
    height: 610px;
  }
  background: linear-gradient(
    219deg,
    rgba(252, 121, 69, 1) 0%,
    rgba(253, 29, 139, 1) 30%,
    rgba(131, 58, 180, 1) 90%
  );

  .info-product {
    h2 {
      font-size: 4rem;
      @media ((max-width: 991px)) {
        font-size: 30px;
      }
    }

    @media (max-width: 769px) {
      text-align: center;
      width: 100% !important;
      margin-top: 5rem;
    }
  }

  .image-product {
    transform: translateX(-50px);
    img {
      @media (min-width: 769px) {
        transform: translateY(90px);
      }
    }
  }
}
</style>
