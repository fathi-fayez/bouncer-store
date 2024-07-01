<template>
  <div class="home">
    <carousel />
    <bannersContainer />
    <bestSeller />
    <singleBanner />
    <whyUsComponent />
    <latestNewsComponent />
    <featuredProducts />
  </div>
</template>
<script setup>
import carousel from '../components/carousel.vue'
import bannersContainer from '../components/banners/bannersContainer.vue'
import bestSeller from '../components/products/bestSeller.vue'
import singleBanner from '../components/banners/singleBanner.vue'
import whyUsComponent from '../components/whyUsComponent.vue'
import latestNewsComponent from '../components/latestNewsComponent.vue'
import featuredProducts from '../components/products/featuredProducts.vue'
</script>
