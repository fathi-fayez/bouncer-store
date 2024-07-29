<template>
  <div class="best-seller-container container">
    <div class="navBar container">
      <h1 class="logo">BEST SELLER</h1>
      <ul class="nav-icons mx-auto">
        <li :class="{ active: !selectedCategory }" @click="fetchAllProducts()">All</li>
        <li
          v-for="category in categories"
          :key="category"
          :class="{ active: selectedCategory === category }"
          @click="selectedCategoryProducts(category)"
        >
          {{ category }}
        </li>
      </ul>
    </div>
    <div class="products">
      <div class="row">
        <div
          v-for="product in displayedProducts"
          :key="product.id"
          class="col-sm-6 col-md-4 col-lg-3 mt-3"
        >
          <singleProduct :product="product" />
        </div>
      </div>
    </div>
    <button class="loadMoreBtn" v-if="hasMoreProducts" @click="loadMoreProducts">Load More</button>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import singleProduct from './singleProduct.vue'

const categories = ref([])
const products = ref([])
const displayedProducts = ref([])
const selectedCategory = ref(null)
const itemsPerPage = ref(4)
const currentIndex = ref(0)
const hasMoreProducts = ref(false)

// Fetch Products
const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    products.value = data
    displayedProducts.value = data.slice(0, itemsPerPage.value)
    currentIndex.value = itemsPerPage.value
    hasMoreProducts.value = currentIndex.value < products.value.length
  } catch (error) {
    console.error('Failed to fetch products:', error)
  }
}
// Fetch  Categories
const fechCategories = async () => {
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
}

onMounted(async () => {
  await fetchProducts(), await fechCategories()
})

const selectedCategoryProducts = (category) => {
  selectedCategory.value = category
  const filtered = products.value.filter((product) => product.category === category)
  displayedProducts.value = filtered.slice(0, itemsPerPage.value)
  currentIndex.value = itemsPerPage.value
  hasMoreProducts.value = currentIndex.value < filtered.length
}

const loadMoreProducts = () => {
  if (selectedCategory.value) {
    const filtered = products.value.filter((product) => product.category === selectedCategory.value)
    const moreProducts = filtered.slice(currentIndex.value, currentIndex.value + itemsPerPage.value)
    displayedProducts.value = displayedProducts.value.concat(moreProducts)
    currentIndex.value += itemsPerPage.value
    hasMoreProducts.value = currentIndex.value < filtered.length
  } else {
    const moreProducts = products.value.slice(
      currentIndex.value,
      currentIndex.value + itemsPerPage.value
    )
    displayedProducts.value = displayedProducts.value.concat(moreProducts)
    currentIndex.value += itemsPerPage.value
    hasMoreProducts.value = currentIndex.value < products.value.length
  }
}

const fetchAllProducts = async () => {
  selectedCategory.value = null
  await fetchProducts()
}
</script>
<style lang="scss" scoped>
.best-seller-container {
  padding-bottom: 150px;

  .nav-icons {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    // background-color: #eee;

    li {
      cursor: pointer;
      color: #888;
      padding: 10px;

      &:hover {
        color: rgb(51, 160, 255);
      }
      &.active {
        color: rgb(51, 160, 255);
      }

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

  .loadMoreBtn {
    background-color: rgb(51, 160, 255);
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 50px auto;
    display: block;
    border-radius: 4px;
    font-size: 20px;
  }
}
</style>
