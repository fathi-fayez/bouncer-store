<template>
  <Header> </Header>
  <navBar />
  <carousel />
  <bannersContainer />
  <bestSeller />
  <!-- <RouterView /> -->
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import navBar from './components/navBar.vue'
import carousel from './components/carousel.vue'
import bannersContainer from './components/bannersContainer.vue'
import bestSeller from './components/bestSeller.vue'
</script>

<style scoped></style>
