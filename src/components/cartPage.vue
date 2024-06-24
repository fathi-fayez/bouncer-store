<template>
  <div>
    <Header> </Header>
    <navBar />
    <currentPageStatus />
    <!-- Container For Items -->
    <div class="cart-rewiew mb-4 container">
      <!-- Header -->
      <div class="d-flex align-items-center justify-content-around rounded mt-3 px-3 shadow-sm">
        <h5>FRODUCT</h5>
        <h5>NAME</h5>
        <h5>QUNTITY</h5>
        <h6>PRICE</h6>
        <h6>UNIT PRICE</h6>
      </div>
      <!-- item -->
      <div
        class="item-control d-flex align-items-center justify-content-around rounded mt-3 px-3 shadow-sm"
      >
        <img
          src="../assets/images/products images/_0053_rgb_MP582-RGB-bttm_V2.jpg"
          alt="product.id"
        />
        <h6>Philips Hue 7W BR30 Connected Downlight Lamp</h6>
        <div class="d-flex align-items-center justify-content-around mx-1">
          <button class="btn btn-outline-secondary">-</button>
          <h6 class="m-3">5</h6>
          <button class="btn btn-outline-secondary">+</button>
        </div>
        <!--********* Search if there is a peter way to calcuaue th price of item *********-->
        <h6>55 $</h6>
        <h6>60 $</h6>
      </div>
      <!-- item -->
      <div
        class="item-control d-flex align-items-center justify-content-around rounded mt-3 px-3 shadow-sm"
      >
        <img
          src="../assets/images/products images/_0053_rgb_MP582-RGB-bttm_V2.jpg"
          alt="product.id"
        />
        <h6>Philips Hue 7W BR30 Connected Downlight Lamp</h6>
        <div class="d-flex align-items-center justify-content-around mx-1">
          <button class="btn btn-outline-secondary">-</button>
          <h6 class="m-3">5</h6>
          <button class="btn btn-outline-secondary">+</button>
        </div>
        <!--********* Search if there is a peter way to calcuaue th price of item *********-->
        <h6>55 $</h6>
        <h6>60 $</h6>
      </div>
    </div>
    <div class="payment-box d-flex justify-content-around">
      <!-- Voucher Code Input -->
      <form class="p-5">
        <input type="search" name="search" id="" placeholder="Voucher code" />
        <input class="bg-primary" type="submit" value="Search" />
      </form>

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
            <p class="mb-2">100 $</p>
          </div>
          <div class="d-flex justify-content-between">
            <p class="mb-2">Shipping</p>
            <p class="mb-2">100 $</p>
          </div>
          <hr />
          <div class="d-flex justify-content-between mb-4">
            <p class="mb-2">Subtotal</p>
            <p class="mb-2">100 $</p>
          </div>
          <button class="btn bg-primary mt-2 btn-info btn-block btn-lg">Checkout</button>
        </div>
      </div>
    </div>
    <footerComponent />
  </div>
</template>
<script setup>
import Header from '@/components/Header.vue'
import navBar from '@/components/navBar.vue'
import currentPageStatus from '@/components/currentPageStatus.vue'
import footerComponent from '@/components/footer.vue'
</script>
<style lang="scss" scoped>
.cart-detail {
  width: 400px;
}
.payment-box {
  padding-top: 70px;
  padding-bottom: 70px;
}
</style>
