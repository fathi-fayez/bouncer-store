<template>
  <div class="features-container container">
    <div class="row">
      <!-- Feature box -->
      <div class="feature-box col-sm-12 col-md-4">
        <font-awesome-icon class="icon" :icon="['fas', 'truck-fast']" style="color: #ff6875" />
        <h6>FREE SHIPPING</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim
          veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </p>
      </div>
      <!-- Feature box -->
      <div class="feature-box col-sm-12 col-md-4">
        <font-awesome-icon class="icon" :icon="['fas', 'shop']" style="color: #ff6875" />
        <h6>FREE SHIPPING</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim
          veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </p>
      </div>
      <!-- Feature box -->
      <div class="feature-box col-sm-12 col-md-4">
        <font-awesome-icon class="icon" :icon="['fas', 'cart-shopping']" style="color: #ff6875" />
        <h6>FREE SHIPPING</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim
          veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </p>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss">
.features-container {
  padding-top: 150px;
  padding-bottom: 150px;

  .feature-box {
    text-align: center;
  }
  .icon {
    font-size: 30px;
    margin-bottom: 20px;
  }
}
</style>
