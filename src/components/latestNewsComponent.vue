<template>
  <h1 class="text-center my-5">LATEST NEWS</h1>
  <div class="news-container container">
    <div class="row">
      <!-- news box -->
      <div class="news-box col-sm-6 col-md-4">
        <img src="../assets/images/News images/Rectangle 1 copy 25-1.png" alt="" />
        <div class="content">
          <span>01 jan, 2024</span>
          <h5>Typesetting industry</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
      <!-- news box -->
      <div class="news-box col-sm-6 col-md-4">
        <img src="../assets/images/News images/Rectangle 1 copy 25-2.png" alt="" />
        <div class="content">
          <span>01 jan, 2024</span>
          <h5>Typesetting industry</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
      <!-- news box -->
      <div class="news-box col-sm-6 col-md-4">
        <img src="../assets/images/News images/Rectangle 1 copy 25.png" alt="" />
        <div class="content">
          <span>01 jan, 2024</span>
          <h5>Typesetting industry</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.news-container {
  margin-bottom: 150px;
  .news-box {
    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
      width: 140px;
      margin-right: 10px;
    }
  }
}
</style>
