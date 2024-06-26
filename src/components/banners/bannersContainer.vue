<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-4 p-0">
        <singleCard />
      </div>
      <div class="col-sm-12 col-md-4 p-0">
        <singleMiddleCard />
      </div>
      <div class="col-sm-12 col-md-4 p-0">
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
    </div>
  </div>
</template>
<script setup>
import singleCard from '../banners/singleCard.vue'
import singleMiddleCard from '../banners/singleMiddleCard.vue'
</script>
<style lang="scss" scoped>
.card-Container {
  height: 300px;
  display: flex;
  align-items: center;
  background-color: #c1c8ce;

  .content {
    @media (min-width: 769px) and (max-width: 950px) {
      margin-left: 20px !important;
    }
  }

  .image {
    flex: 0 0 50%;
  }

  img {
    // width: 200px;
    max-width: 100%;
  }
}
</style>
