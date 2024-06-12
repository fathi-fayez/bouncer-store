<template>
  <Header>
    <header />
  </Header>
  <navBar />
  <carousel />
  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import navBar from './components/navBar.vue'
import carousel from './components/carousel.vue'
</script>

<style scoped></style>
