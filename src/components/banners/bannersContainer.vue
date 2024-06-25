<template>
  <div class="container d-flex align-items-center">
    <singleCard />
    <singleMiddleCard />
    <!-- <singleCard /> -->
    <div class="card-Container">
      <div class="content ms-5">
        <h4>GoPro Hero 6</h4>
        <p class="my-4">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</p>
        <h5>299$</h5>
      </div>
      <div class="image">
        <img src="/src/assets/images/banners/50051823_540375@2x.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import singleCard from '../banners/singleCard.vue'
import singleMiddleCard from '../banners/singleMiddleCard.vue'
</script>
<style lang="scss" scoped>
.card-Container {
  width: 33.3%;
  height: 300px;
  display: flex;
  align-items: center;
  background-color: #c1c8ce;

  .content {
    width: 60%;
  }

  img {
    width: 200px;
  }
}
</style>
