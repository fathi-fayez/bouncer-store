<template>
  <div class="main-product overflow-hidden px-3 py-4 primary" :style="{ height: height + 'px' }">
    <div
      class="info-img-product w-100 h-100 container d-flex flex-column flex-md-row align-items-center justify-content-center"
    >
      <div class="info-product text-white w-50">
        <h2 class="product-name mb-4 mt-5 text-nowrap">iPhone 6 Plus</h2>
        <p>Performance and design. Taken right to the edge.</p>
        <a href="">SHOP NOW</a>
      </div>
      <div class="image-product">
        <img
          class="img-fluid"
          src="/src/assets/images/banners/iPhone6s_discover_desktop_08_iOS9.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  height: {
    type: Number,
    default: 600
  }
})
</script>
<style lang="scss" scoped>
.main-product {
  background-color: #2e90e5;

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
