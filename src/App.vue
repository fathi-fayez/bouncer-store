<template>
  <Header> </Header>
  <navBar />
  <currentPageStatus v-if="!$route.meta.PageStatus" />
  <RouterView />
  <!-- <cartPage />
  <productsList /> -->
  <footerComponent />
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import navBar from './components/navBar.vue'
import currentPageStatus from './components/currentPageStatus.vue'
import footerComponent from './components/footer.vue'
// import productDetails from './components/products/productDetails.vue'
// import cartPage from './components/cartPage.vue'
// import productsList from './components/products/productsList.vue'
</script>

<style>
a {
  color: #888 !important;
}
.router-link-exact-active {
  color: rgb(51, 160, 255) !important;
  font-weight: bold;
  padding: 10px 20px;
  transition: 0.3s;
}
</style>
