<template>
  <div class="app">
    <Header> </Header>
    <currentPageStatus v-if="!$route.meta.PageStatus && !$route.meta.emptyCart" />
    <RouterView />
    <footerComponent />
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import Header from './components/Header.vue'
import currentPageStatus from './components/currentPageStatus.vue'
import footerComponent from './components/footer.vue'

const store = useStore()

// Fetch products on component mount
onMounted(() => {
  store.dispatch('fetchProducts')
})
</script>

<style lang="scss">
.app {
  overflow-x: hidden;
}
a {
  color: #888 !important;
  text-decoration: none;
}

input[type='submit'] {
  border-color: transparent;
  color: white;
}
</style>
