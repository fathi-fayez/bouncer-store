<template>
  <div>
    <div v-if="cartItems.length > 0" class="container">
      <div class="row">
        <div class="col-md-12">
          <!-- Container For Items -->
          <div class="cart-rewiew mb-4">
            <!-- Header -->
            <div class="header d-flex align-items-center justify-content-around rounded shadow-sm">
              <h6>PRODUCT</h6>
              <h6>NAME</h6>
              <h6>QUNTITY</h6>
              <h6>PRICE</h6>
              <h6>UNIT PRICE</h6>
            </div>
            <!-- item -->
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="item-control d-flex align-items-center justify-content-around rounded mt-3 px-3 shadow-sm"
            >
              <img :src="item.image" alt="product.id" />
              <h6 class="title">{{ item.title.split(' ').slice(0, 3).join(' ') }}</h6>
              <div class="d-flex align-items-center justify-content-around mx-1">
                <button @click="deleteItem(item)" class="btn btn-outline-secondary">-</button>
                <h6 class="m-3">{{ item.quantity }}</h6>
                <button @click="addToCart(item)" class="btn btn-outline-secondary">+</button>
              </div>
              <!--********* Search if there is a peter way to calcuaue th price of item *********-->
              <h6>{{ item.price }}</h6>
              <h6>{{ item.quantity * item.price }} $</h6>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="payment-box">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <!-- Voucher Code Input -->
                <form class="p-5">
                  <input type="search" name="search" id="" placeholder="Voucher code" />
                  <input class="bg-primary" type="submit" value="Search" />
                </form>
              </div>
              <div class="col-sm-12 col-md-6">
                <!-- container of details -->
                <div class="cart-detail card text-while rounded-0 border-0">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                      <h5>Cart Details</h5>
                      <i class="fa-solid fa-cart-shopping"> </i>
                    </div>
                    <hr />
                    <div class="d-flex justify-content-between">
                      <p class="mb-2">total</p>
                      <p class="mb-2">{{ totalPrice }} $</p>
                    </div>
                    <div class="d-flex justify-content-between">
                      <p class="mb-2">Shipping</p>
                      <p class="mb-2">{{ shippingCost }} $</p>
                    </div>
                    <hr />
                    <div class="d-flex justify-content-between mb-4">
                      <p class="mb-2">Subtotal</p>
                      <p class="mb-2">{{ subTotalPrice }} $</p>
                    </div>
                    <button class="btn bg-primary mt-2 btn-info btn-block btn-lg">Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <emptyCart />
    </div>
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import emptyCart from '../components/emptyCart.vue'
const store = useStore()
const shippingCost = ref(store.state.shippingCost)

const cartItems = computed(() => {
  return store.getters.cartItems
})
const totalPrice = computed(() => {
  let price = 0
  store.getters.cartItems.map((el) => (price += el.quantity * el.price))
  return price
})
const subTotalPrice = computed(() => {
  let price = shippingCost.value
  store.getters.cartItems.map((el) => (price += el.quantity * el.price))
  return price
})

const deleteItem = (item) => {
  store.dispatch('deleteItem', item)
}
const addToCart = (item) => {
  store.dispatch('addToCart', item)
}
</script>

<style lang="scss" scoped>
img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.item-control {
  background-color: #cbcbcb;
}
.payment-box {
  padding-top: 70px;
  padding-bottom: 70px;
}
@media (max-width: 769px) {
  .header {
    display: none !important;
  }
  .title {
    margin: 16px 0 8px;
  }
  h6 {
    font-size: 10px;
  }
  .item-control {
    flex-direction: column;
  }
}
</style>
