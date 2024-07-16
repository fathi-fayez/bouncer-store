<template>
  <div class="navBar container-fluid">
    <h1 class="logo">BOUNCER</h1>
    <ul class="nav-icons">
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
    color: #ff4858;
    font-weight: bold;
    letter-spacing: 5px;
  }
  .nav-icons {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    // background-color: #eee;

    li {
      & > a:hover {
        color: #2196f3;
        background-color: #fafafa;
      }
      a {
        text-decoration: none;
        padding: 5px 20px;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 1rem;
        transition: 0.3s;

        @media (max-width: 767px) {
          padding: 5px;
          font-size: 14px;
        }
      }
    }
  }
}
.router-link-exact-active {
  color: rgb(51, 160, 255) !important;
  font-weight: bold;
  padding: 10px 20px;
  transition: 0.3s;
  border-bottom: 2px solid #2196f3;
}
</style>
