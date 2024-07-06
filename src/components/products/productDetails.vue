<template>
  <div>
    <div class="container">
      <div class="row">
        <!-- Product container -->
        <div id="product-details" class="product-container col-sm-12 col-md-9">
          <div v-if="getProduct" class="row">
            <!-- Images -->
            <div class="col-sm-12 col-md-5">
              <div class="row m-4">
                <div class="col-12 mainImageContainer">
                  <img class="main-image rounded d-block mx-auto" :src="getProduct.image" alt="" />
                </div>
                <div class="col-12 mt-4 d-flex flex-row">
                  <img
                    class="details-image rounded d-block mx-auto"
                    src="../../assets/images/products images/c04297141.png"
                  />
                  <img
                    class="details-image rounded d-block mx-auto"
                    src="../../assets/images/products images/c04297141.png"
                  />
                  <img
                    class="details-image rounded d-block mx-auto"
                    src="../../assets/images/products images/c04297141.png"
                  />
                  <img
                    class="details-image rounded d-block mx-auto"
                    src="../../assets/images/products images/c04297141.png"
                  />
                </div>
              </div>
            </div>
            <!-- Details -->
            <div class="col-sm-12 col-md-7">
              <h4 class="product-name">{{ getProduct.title }}</h4>
              <div class="rating d-flex">
                <!-- Rating Stars -->
                <div>
                  <i class="fa-solid fa-star" style="color: #ffc600"></i>
                  <i class="fa-solid fa-star" style="color: #ffc600"></i>
                  <i class="fa-solid fa-star" style="color: #ffc600"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <!-- Reviews -->
                <span>0 reviews</span>
                <a href="">Submit a review</a>
              </div>
              <!-- Shipping Details -->
              <div>
                <div class="price">
                  <span class="last-price">{{ getProduct.price }} </span
                  ><span class="old-price">$599</span>
                </div>
                <h5>Availability:<span class="ms-5">In stock</span></h5>
                <h5>
                  Category:<span class="ms-5">{{ getProduct.category }}</span>
                </h5>
                <h5>Free shipping</h5>
                <!-- Color Box -->
                <div class="d-flex">
                  <h5>Select Color:</h5>
                  <ul class="color-options ms-4">
                    <li class="active" style="background-color: #f44336"></li>
                    <li style="background-color: #03a9f4"></li>
                    <li style="background-color: #e91e63"></li>
                    <li style="background-color: #ffeb3b"></li>
                  </ul>
                </div>
                <!-- Size Selector -->
                <div class="d-flex">
                  <h5 class="me-5">Size</h5>
                  <select class="ms-5">
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                  </select>
                </div>
                <div class="d-flex justify-content-between">
                  <!-- Quantity Selector -->
                  <div class="d-flex align-items-center">
                    <button class="btn btn-outline-secondary">-</button>
                    <h6 class="m-3">5</h6>
                    <button class="btn btn-outline-secondary">+</button>
                  </div>
                  <div class="buttons d-flex">
                    <!-- Add To Cart Button -->
                    <button
                      type="button"
                      @click="addToCart(getProduct)"
                      class="btn add-to-cart-btn"
                    >
                      <i class="fas fa-shopping-cart"></i>
                    </button>
                    <!-- Add To Favorite Button -->
                    <button type="button" class="btn add-to-favorite">
                      <i class="fas fa-heart"></i>
                    </button>
                  </div>
                </div>
                <!-- Shares Buttons -->
                <div class="d-flex justify-content-between mt-4">
                  <button class="btn facebook-btn">
                    <i class="fa-brands fa-facebook"></i>Share on Facebook
                  </button>
                  <button class="btn twitter-btn">
                    <i class="fa-brands fa-twitter"></i>Share on Twitter
                  </button>
                </div>
              </div>
            </div>
            <!-- Tabs -->
            <div class="col-12 mt-5 text-center">
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Home
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Profile
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Contact
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, perspiciatis
                    culpa suscipit veniam voluptatem aliquid repellat, quaerat magnam error, animi
                    voluptatum ipsa deserunt quidem neque ut harum officia vero facere? Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Nesciunt, perspiciatis culpa
                    suscipit veniam voluptatem aliquid repellat, quaerat magnam error, animi
                    voluptatum ipsa deserunt quidem neque ut harum officia vero facere. Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Nesciunt, perspiciatis culpa
                    suscipit veniam voluptatem aliquid repellat, quaerat magnam error, animi
                    voluptatum ipsa deserunt quidem neque ut harum officia vero facere? Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Nesciunt, perspiciatis culpa
                  </p>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Right Content -->
        <div class="col-sm-12 col-md-3">
          <h4>BEST SELLER</h4>
          <singleProduct isGridView="falae" />
          <singleCard />
        </div>
        <!-- Related Products -->
        <div class="col-12">
          <h4 class="text-center my-5">RELATED PRODUCTS</h4>
          <div class="row align-items-center">
            <div
              v-for="product in relatedProducts"
              :key="product.id"
              class="col-sm-6 col-md-4 col-lg-3"
            >
              <router-link
                :to="{
                  name: 'productDetails',
                  params: { id: product.id, category: product.category }
                }"
              >
                <singleProduct :product="product" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import singleProduct from './singleProduct.vue'
import singleCard from '../../components/banners/singleCard.vue'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()
const productId = ref(route.params.id)
const productCategory = ref(route.params.category)

const products = ref([])

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
    productId.value = newParams.id
    productCategory.value = newParams.category
  }
)

// Get The Selected Product
const getProduct = computed(() => {
  return products.value.find((product) => product.id == productId.value)
})

// Get The Related Products
const relatedProducts = computed(() => {
  return products.value.filter((product) => product.category == productCategory.value)
})

const addToCart = (product) => {
  store.dispatch('addToCart', product)
}
</script>
<style lang="scss" scoped>
.row {
  margin-bottom: 150px;
}
.price {
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 24px;
  .last-price {
    color: #ff4858;
    margin-right: 10px;
  }
  .old-price {
    text-decoration: line-through;
    color: rgb(93, 101, 107);
  }
}
.color-options {
  list-style: none;
  text-align: center;
  padding: 0;

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
.add-to-cart-btn,
.add-to-favorite {
  color: rgb(193, 200, 206);
  background-color: #ebf6ff;
  &:hover {
    color: rgb(51, 160, 255);
  }
}
.add-to-cart-btn {
  margin-right: 20px;
}

.facebook-btn,
.twitter-btn {
  padding: 10px 30px;
  color: white;
}
.facebook-btn {
  background-color: #0078d7;
  margin-right: 10px;
}
.twitter-btn {
  background-color: #1da1f2;
}

.main-image {
  width: 100%;
}
.details-image {
  max-width: 100%;
  width: 25%;
}
</style>
