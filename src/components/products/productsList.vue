<template>
  <div>
    <div class="container">
      <div class="row">
        <!-- SideBar -->
        <div class="sideBar col-3">
          <!-- Accesories Component -->
          <div class="accesories-card">
            <div class="header">ACCESORIES</div>
            <div class="content">
              <div class="item"><span>Apple Car</span><span class="qty">2</span></div>
              <div class="item feature">
                <span>Air port & wireless</span><span class="qty">48</span>
              </div>
              <div class="item"><span>Cables & Docks</span><span class="qty">14</span></div>
              <div class="item"><span>Cases & Films</span><span class="qty">15</span></div>
              <div class="item"><span>Charging Devices</span><span class="qty">23</span></div>
              <div class="item"><span>Connected home</span><span class="qty">1</span></div>
              <div class="item"><span>Headphones</span><span class="qty">95</span></div>
            </div>
          </div>
          <!-- Color Box -->
          <div class="color-box d-flex my-3">
            <h5>Color</h5>
            <ul class="color-options">
              <li class="active" style="background-color: #f44336"></li>
              <li style="background-color: #03a9f4"></li>
              <li style="background-color: #e91e63"></li>
              <li style="background-color: #ffeb3b"></li>
            </ul>
          </div>
          <!--  Brand Selector  Component -->
          <div class="accesories-card">
            <div class="header">BRAND</div>
            <div class="content">
              <div class="item"><span>Apple</span><span class="qty">99</span></div>
              <div class="item feature"><span>Lg</span><span class="qty">99</span></div>
              <div class="item"><span>Samsung</span><span class="qty">14</span></div>
              <div class="item"><span>Siemens</span><span class="qty">15</span></div>
            </div>
          </div>
        </div>
        <!-- Grid Container -->
        <div id="products-list" class="grid-container col-9">
          <!-- Banner -->
          <div class="banner"><singleBanner :height="imageHeight" /></div>
          <!-- Bar -->
          <nav class="navbar navbar-expand-lg navbar-light bg-light my-4">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav d-flex justify-content-between w-100">
                <div class="d-flex">
                  <li class="nav-item me-5">
                    <a class="nav-link active" aria-current="page" href="#"
                      >{{ getLengthOfProducts }} items</a
                    >
                  </li>
                  <!-- dropdown one -->
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sort By
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <!-- dropdown two -->
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Show
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </div>
                <!-- Display Icons -->
                <div class="icons d-flex">
                  <li class="nav-item" :class="{ active: isGridView }">
                    <a class="nav-link" href="#" @click.prevent="isGridView = true"
                      ><i class="fa-solid fa-grip"></i
                    ></a>
                  </li>
                  <li class="nav-item" :class="{ active: !isGridView }">
                    <a class="nav-link" href="#" @click.prevent="isGridView = false"
                      ><i class="fa-solid fa-table-list"></i
                    ></a>
                  </li>
                </div>
              </ul>
            </div>
          </nav>

          <!-- Products -->
          <div>
            <div class="row">
              <div
                :class="{ 'col-sm-6 col-md-4': isGridView, 'col-12': !isGridView }"
                v-for="product in getProducts"
                :key="product.id"
              >
                <router-link
                  :to="{
                    name: 'productDetails',
                    params: { id: product.id, category: product.category }
                  }"
                >
                  <singleProduct :product="product" :isGridView="isGridView" />
                </router-link>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <nav class="pagination" aria-label="...">
            <ul class="pagination pagination-lg">
              <li class="page-item active" aria-current="page">
                <span class="page-link">1</span>
              </li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import singleBanner from '../banners/singleBanner.vue'
import singleProduct from './singleProduct.vue'
const imageHeight = ref(400)
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const isGridView = ref(true)
const route = useRoute()
const productCategory = ref(route.params.category)
const products = ref([])
const lengthOfProducts = ref(0)

// Fetch Products
const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    products.value = data
  } catch (error) {
    console.error('Failed to fetch product:', error)
  }
}

// Get All Products on Mount
onMounted(async () => {
  await fetchProducts()
})

// Watch Route Changes
watch(
  () => route.params,
  async (newParams) => {
    productCategory.value = newParams.category
  },
  () => getProducts
)

// Get The Selected Products
const getProducts = computed(() => {
  return products.value.filter((product) => product.category == productCategory.value)
})

const getLengthOfProducts = computed(() => {
  return (lengthOfProducts.value = getProducts.value.length)
})
</script>

<style lang="scss" scoped>
.banner .banner-container {
  height: 350px;
}
.pagination {
  margin: 20px auto;
}

.icons {
  svg {
    font-size: 20px;
  }
  li.active svg {
    color: #33a0ff;
  }
}

.accesories-card {
  height: 371px;
  background: #f6f7f8;
  border-radius: 4px;
  border: 1px solid;
  padding: 16px 20px;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 769px) {
    & {
      display: none;
    }
  }
}

.header {
  color: #22262a;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 55px;
}

.content .item {
  font-size: 14px;
  font-weight: 600;
  line-height: 16.8px;
  margin-bottom: 20px;
  position: relative;
}

.qty {
  position: absolute;
  right: 0;
  color: #22262a;
  opacity: 0.35;
  text-align: right;
}

.feature span {
  color: #33a0ff;
}
.color-box {
  background: #f6f7f8;
  border-radius: 4px;
  border: 1px solid;
  padding: 16px 20px;
  box-sizing: border-box;

  @media (max-width: 769px) {
    & {
      display: none !important;
    }
  }

  li {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
    display: inline-block;
    border: 3px solid #eee;
    &.active {
      border: 3px solid rgb(6, 153, 233);
    }
  }
}
</style>
