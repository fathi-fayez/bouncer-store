<template>
  <!-- product card -->

  <div class="card border-1 shadow-sm text-center">
    <div class="image-container">
      <img :src="image" alt="product.id" />
    </div>
    <div class="card-body">
      <h5 class="my-5">{{ title }}</h5>
      <div class="rating">
        <i class="fa-solid fa-star" style="color: #ffc600"></i>
        <i class="fa-solid fa-star" style="color: #ffc600"></i>
        <i class="fa-solid fa-star" style="color: #ffc600"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <div class="price">
        <span class="last-price">${{ price }}</span> <span class="old-price">$599</span>
      </div>
    </div>
    <div class="overlay-buttons">
      <button class="add-to-favorite"><i class="fa-regular fa-heart"></i></button>
      <button class="add-to-cart"><i class="fa-solid fa-cart-shopping"> </i></button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  image: {
    type: String
  },
  title: {
    type: String
  },
  price: {
    type: Number
  }
})
</script>
<style lang="scss" scoped>
.card {
  height: 500px;
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
      padding: 10px;
      margin: 6px;
      color: rgb(51, 160, 255);
      border-color: rgba(151, 151, 151, 0.6);
      margin-bottom: 200px;
    }
  }
  .price {
    margin-top: 15px;
    margin-bottom: 30px;

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
