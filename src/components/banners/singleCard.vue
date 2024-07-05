<template>
  <div class="card-container">
    <div class="content ms-5">
      <h4>iPhone 6</h4>
      <p class="my-4">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</p>
      <h5>399$</h5>
    </div>
    <div class="image">
      <img src="../../assets/images/banners/iPhone6s_discover_desktop_08_iOS9.png" alt="" />
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.card-container {
  height: 300px;
  display: flex;
  align-items: center;
  background-color: #ff6875;
  position: relative;
  overflow: hidden;

  .content {
    width: 60%;
  }

  img {
    width: 200px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>
