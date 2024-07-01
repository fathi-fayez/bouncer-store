<template>
  <div>
    <Header> </Header>
    <navBar />
    <currentPageStatus />
    <div class="container">
      <div class="row">
        <!-- SideBar -->
        <div class="sideBar col-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae suscipit
            iure ex officiis sed nemo, dolores saepe quos doloribus exercitationem iste libero rem
            perspiciatis dolore quod earum ab dolorum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae suscipit
            iure ex officiis sed nemo, dolores saepe quos doloribus exercitationem iste libero rem
            perspiciatis dolore quod earum ab dolorum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae suscipit
            iure ex officiis sed nemo, dolores saepe quos doloribus exercitationem iste libero rem
            perspiciatis dolore quod earum ab dolorum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae suscipit
            iure ex officiis sed nemo, dolores saepe quos doloribus exercitationem iste libero rem
            perspiciatis dolore quod earum ab dolorum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae suscipit
            iure ex officiis sed nemo, dolores saepe quos doloribus exercitationem iste libero rem
            perspiciatis dolore quod earum ab dolorum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae suscipit
            iure ex officiis sed nemo, dolores saepe quos doloribus exercitationem iste libero rem
            perspiciatis dolore quod earum ab dolorum!
          </p>
        </div>
        <!-- Grid Container -->
        <div class="grid-container col-8">
          <div class="banner"><singleBanner :height="imageHeight" /></div>
          <!-- Bar -->
          <nav class="navbar navbar-expand-lg navbar-light bg-light my-4">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav d-flex justify-content-between w-100">
                <div class="d-flex">
                  <li class="nav-item me-5">
                    <a class="nav-link active" aria-current="page" href="#">13 items</a>
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
                <div class="icons d-flex">
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa-solid fa-grip"></i></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa-solid fa-table-list"></i></a>
                  </li>
                </div>
              </ul>
            </div>
          </nav>
          <!-- Products -->
          <div>
            <div class="row">
              <div class="col-sm-6 col-md-4 mt-3" v-for="product in products" :key="product.id">
                <singleProduct
                  :image="product.image"
                  :title="product.title"
                  :price="product.price"
                />
              </div>
            </div>
          </div>
          <!-- Pagination -->

          <nav aria-label="...">
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
    <footerComponent />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from '../../components/Header.vue'
import navBar from '../../components/navBar.vue'
import currentPageStatus from '../../components/currentPageStatus.vue'
import footerComponent from '../../components/footer.vue'
import singleBanner from '../banners/singleBanner.vue'
import singleProduct from './singleProduct.vue'
const imageHeight = ref(400)
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

<style lang="scss" scoped>
.banner .banner-container {
  height: 350px;
  background-color: red;
  border: 2px solid green;
}
</style>
