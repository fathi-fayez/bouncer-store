<template>
  <div class="container">
    <navBar />
    <div class="products">
      <div class="row">
        <div v-for="product in products" :key="product.id" class="col-sm-6 col-md-4 col-lg-3 mt-3">
          <router-link
            :to="{
              name: 'productDetails',
              params: { id: product.id, category: product.category }
            }"
          >
            <singleProduct :image="product.image" :title="product.title" :price="product.price" />
          </router-link>
        </div>
      </div>
    </div>
    <h4 class="text-center my-5"><a href="">LOAD MORE</a></h4>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import navBar from '../navBar.vue'
import singleProduct from './singleProduct.vue'
const products = ref([])
onMounted(async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=8')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    products.value = data
  } catch (error) {
    console.error('Failed to fetch categories:', error)
  }
})
</script>
