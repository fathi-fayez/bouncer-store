<template>
  <div>
    <div v-if="cartItems.length > 0" class="container">
      <div class="row">
        <div class="col-md-12">
          <!-- Container For Items -->
          <div class="cart-review mb-4">
            <!-- Header -->
            <div
              class="header d-flex align-items-center justify-content-between rounded shadow-sm p-3 bg-primary-subtle"
            >
              <span class="header-col">PRODUCT</span>
              <span class="header-col">NAME</span>
              <span class="header-col">QUANTITY</span>
              <span class="header-col">PRICE</span>
              <span class="header-col">UNIT PRICE</span>
            </div>
            <!-- Items -->
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="item-control d-flex align-items-center justify-content-between rounded mt-3 px-3 shadow-sm"
            >
              <img :src="item.image" alt="product.id" class="item-col" />
              <span class="item-col">{{ item.title.split(' ').slice(0, 3).join(' ') }}</span>
              <div class="item-col d-flex align-items-center justify-content-around mx-1">
                <button @click="deleteItem(item)" class="btn btn-outline-secondary">-</button>
                <span class="m-3">{{ item.quantity }}</span>
                <button @click="addToCart(item)" class="btn btn-outline-secondary">+</button>
              </div>
              <span class="item-col">{{ item.price }}</span>
              <span class="item-col">{{ item.quantity * item.price }} $</span>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="payment-box">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <!-- Voucher Code Input -->
                <form class="p-5 d-flex justify-content-center justify-content-sm-start">
                  <input type="search" name="search" placeholder="Voucher code" />
                  <input
                    @click.prevent="showVoucherCode"
                    class="bg-primary"
                    type="submit"
                    value="Search"
                  />
                </form>
              </div>
              <div class="col-sm-12 col-md-6">
                <!-- Container of Details -->
                <div class="cart-detail card text-white rounded-0 border-0">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                      <h5>Cart Details</h5>
                      <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <hr />
                    <div class="d-flex justify-content-between">
                      <p class="mb-2">Total</p>
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
                    <button
                      @click="showSweetAlert"
                      class="btn bg-primary mt-2 btn-info btn-block btn-lg"
                    >
                      Checkout
                    </button>
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
import Swal from 'sweetalert2'
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

const showSweetAlert = () => {
  Swal.fire({
    title: 'Done!',
    text: 'Your  order has been placed.',
    icon: 'success',
    confirmButtonText: 'OK'
  })
}
const showVoucherCode = () => {
  Swal.fire({
    title: 'No Voucher Code',
    text: 'Check you code',
    icon: 'question'
  })
}
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
}

.item-control {
  background-color: #cbcbcb;
  display: flex;
  justify-content: space-between;
}
.header-col,
.item-col {
  flex: 1;
  text-align: center;
}
.title {
  font-size: 14px;
  font-weight: bold;
}
.cart-review {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
}

.cart-detail {
  color: black !important;
  button {
    color: white;
  }
}

img {
  width: 100px;
  height: 150px;
  border-radius: 10px;
  padding: 5px;
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
