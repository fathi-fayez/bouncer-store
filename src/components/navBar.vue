<template>
  <div class="navBar container">
    <h1 class="logo">BOUNCER</h1>
    <ul class="nav-icons mx-auto">
      <li>
        <router-link to="/">Home</router-link>
      </li>

      <li v-for="category in categories" :key="category">
        <router-link
          :to="{
            name: 'productsList',
            params: { category: category }
          }"
          >{{ category }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'

const categories = ref([])

onMounted(async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products/categories')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    categories.value = data
  } catch (error) {
    console.error('Failed to fetch categories:', error)
  }
})
</script>

<style lang="scss">
.navBar {
  text-align: center;
  .logo {
    margin: 50px;
  }
  .nav-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    @media (max-width: 769px) {
      flex-direction: column;
      li {
        border: 1px solid #888;
        padding: 10px 20px;
        width: 150px;
      }
    }

    li {
      margin: 0 20px;
      font-weight: bold;

      a {
        text-decoration: none;
      }
    }
  }
}
</style>
