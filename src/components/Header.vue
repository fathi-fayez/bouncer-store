<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container justify-content-end">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- Dropdowns -->
            <div class="d-lg-flex">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Action</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  USD
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Action</a></li>
                </ul>
              </li>
            </div>
            <!-- Items -->
            <div class="d-lg-flex">
              <li class="nav-item me-5">
                <a class="nav-link active" aria-current="page" href="#"
                  ><i class="fa-regular fa-user"></i> My profile</a
                >
              </li>
              <li class="nav-item me-5">
                <router-link
                  :to="{
                    name: 'cartPage'
                  }"
                  class="nav-link position-relative"
                  href="#"
                >
                  <span
                    v-show="count"
                    class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger"
                  >
                    {{ count }}
                  </span>
                  <i class="fa-solid fa-cart-shopping"></i> Items</router-link
                >
              </li>
            </div>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              v-model="searchQuery"
              placeholder="Search products..."
              aria-label="Search"
              @focus="showResults = true"
              @blur="handleBlur"
            />
          </form>
        </div>
        <div class="search-results" v-if="showResults" ref="dropdown">
          <ul>
            <li v-for="product in filteredProducts" :key="product.id">
              <router-link
                :to="{
                  name: 'productDetails',
                  params: { id: product.id, category: product.category }
                }"
              >
                <div class="d-flex align-items-center justify-content-around">
                  <h5 class="w-50">{{ product.title.split(' ').slice(0, 3).join(' ') }}</h5>
                  <span>{{ product.price }} $</span>
                  <img :src="product.image" :alt="product.title" />
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <button
          class="navbar-toggler mt-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    <navBar />
  </div>
</template>

<script setup>
import navBar from './navBar.vue'
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const count = computed(() => {
  return store.getters.cartItemsCount
})

const searchQuery = computed({
  get: () => store.getters.searchQuery,
  set: (value) => store.dispatch('updateSearchQuery', value)
})

// Get products from Vuex store
const products = computed(() => store.getters.products)

const showResults = ref(false)
const dropdown = ref(null)

// Computed property to filter products based on search query
const filteredProducts = computed(() => {
  if (!searchQuery.value) {
    return []
  }
  return products.value
    .filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    .slice(0, 5)
})

// Function to close the dropdown menu
const closeDropdown = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    showResults.value = false
  }
}

// Function to hide results on blur event
const handleBlur = () => {
  setTimeout(() => {
    if (!dropdown.value || !dropdown.value.contains(document.activeElement)) {
      showResults.value = false
    }
  }, 200)
}

// Add and remove event listeners for clicks outside the dropdown
onMounted(() => {
  document.addEventListener('mousedown', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', closeDropdown)
})
</script>

<style scoped>
.container {
  position: relative;
}
.navbar-nav {
  flex-grow: 1;
  justify-content: space-between;
}
.search-results {
  position: absolute;
  background: rgb(225, 224, 224);
  border: 1px solid #817575;
  width: 60%;
  z-index: 1000;
  top: 48px;
  border-radius: 8px;
}

.search-results ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.search-results li {
  padding: 10px;
  cursor: pointer;
}

.search-results li:hover {
  background-color: #f1f1f1;
}

.search-results li img {
  width: 70px;
}
@media (max-width: 991px) {
  .search-results {
    top: 270px;
    width: 80%;
  }
  .search-results li {
    padding: 0 5px;
  }
  .search-results li img {
    width: 40px;
  }
}
</style>
