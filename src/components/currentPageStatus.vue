<template>
  <div class="breadcrumbs">
    <div class="items">
      <p class="home">Home</p>
      <p class="slash">/</p>
      <p class="accesories">Accesories</p>
      <p class="slash">/</p>
      <p class="beat-solo2-on-ear-headphones-black">Beat Solo2 on Ear Headphones - Black</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.breadcrumbs {
  background-color: rgba(246, 247, 248, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 100px;
}
.items {
  display: flex;
  align-items: flex-start;
}
p {
  margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 14px;
  white-space: nowrap;
  font-weight: 600;
  line-height: 17px;
  margin-right: 10px;
  letter-spacing: 0.35px;

  @media (max-width: 769px) {
    font-size: 10px;
  }

  &.home,
  &.accesories {
    color: rgba(51, 160, 255, 1);
  }
}
.slash {
  margin-right: 9px;
}
</style>
