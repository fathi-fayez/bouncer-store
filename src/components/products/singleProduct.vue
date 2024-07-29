<template>
  <!-- product card -->
  <div :class="{ 'product-list': !isGridView }" class="card border-1 shadow-sm text-center">
    <div class="image-container">
      <img :src="product.image" :alt="product.title" />
    </div>
    <router-link
      :to="{ name: 'productDetails', params: { id: product.id, category: product.category } }"
    >
      <div class="card-body">
        <h5 class="mt-3">{{ product.title.split(' ').slice(0, 3).join(' ') }}</h5>

        <div class="rating">
          <i
            class="fa-solid fa-star"
            style="color: #ffc600"
            v-for="i in Math.round(product.rating.rate)"
            :key="i"
          ></i>
          <i
            class="fa-solid fa-star"
            v-for="i in 5 - Math.round(product.rating.rate)"
            :key="'empty' + i"
          ></i>
        </div>
        <div class="price">
          <span class="last-price">${{ product.price }}</span> <span class="old-price">$599</span>
        </div>
      </div>
    </router-link>
    <div class="overlay-buttons">
      <button class="add-to-favorite" aria-label="Add to favorite">
        <i class="fa-solid fa-heart"></i>
      </button>
      <button class="add-to-cart" @click="addToCart()" aria-label="Add to cart">
        <i class="fa-solid fa-cart-shopping"> </i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

// Access the Vuex store
const store = useStore()

const props = defineProps({
  product: {
    type: Object,
    default() {
      return {
        image:
          'https://st4.depositphotos.com/13324256/24475/i/450/depositphotos_244751462-stock-photo-top-view-product-lettering-made.jpg',
        title: 'Product',
        price: 50,
        rating: {
          rate: 4.5
        }
      }
    }
  },
  isGridView: {
    type: Boolean,
    default: true
  }
})

// Method to add product to the cart
const addToCart = () => {
  store.dispatch('addToCart', props.product)
  toast.success('Added To Cart', {
    autoClose: 500
  })
}
</script>

<style lang="scss" scoped>
.product-list {
  flex-direction: row;
  height: fit-content !important;
  padding: 30px;
  align-items: center;
  justify-content: center;

  .image-container {
    flex-basis: 50%;
  }
}

.card {
  a {
    text-decoration: none;
  }
  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }

  &:hover .overlay-buttons {
    opacity: 1;
  }

  .image-container {
    height: 200px;

    img {
      margin: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }

  .card-body {
    position: relative;
    z-index: 999 !important;
  }

  .overlay-buttons {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    background: rgba(214, 210, 210, 0.6);
    transition: opacity 0.5s;

    .add-to-favorite,
    .add-to-cart {
      border-radius: 50%;
      padding: 12px;
      margin: 4px;
      color: rgb(51, 160, 255);
      border: none;
      transform: translateY(-50%);
    }
  }

  .price {
    margin-top: 15px;

    span.last-price {
      color: #ff4858;
    }

    span.old-price {
      text-decoration: line-through;
      margin-left: 10px;
    }
  }
}
</style>
