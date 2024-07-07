<template>
  <div>
    <Header> </Header>
    <navBar />
    <currentPageStatus v-if="!$route.meta.PageStatus && !$route.meta.emptyCart" />
    <RouterView />
    <footerComponent />
  </div>
</template>
<script setup>
import Header from './components/Header.vue'
import navBar from './components/navBar.vue'
import currentPageStatus from './components/currentPageStatus.vue'
import footerComponent from './components/footer.vue'
</script>

<style lang="scss">
a {
  color: #888 !important;

  &:hover {
    color: rgb(51, 160, 255) !important;
  }
}
.router-link-exact-active {
  color: rgb(51, 160, 255) !important;
  font-weight: bold;
  padding: 10px 20px;
  transition: 0.3s;
}
</style>
