<template>
  <Header> </Header>
  <navBar />
  <carousel />
  <bannersContainer />
  <bestSeller />
  <singleBanner />
  <whyUsComponent />
  <latestNewsComponent />
  <featuredProducts />
  <!-- <RouterView /> -->
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import navBar from './components/navBar.vue'
import carousel from './components/carousel.vue'
import bannersContainer from './components/banners/bannersContainer.vue'
import bestSeller from './components/products/bestSeller.vue'
import singleBanner from './components/banners/singleBanner.vue'
import whyUsComponent from './components/whyUsComponent.vue'
import latestNewsComponent from './components/latestNewsComponent.vue'
import featuredProducts from './components/products/featuredProducts.vue'
</script>

<style scoped></style>
