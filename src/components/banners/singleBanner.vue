<template>
  <div class="banner-container">
    <div class="content">
      <h4>iPhone 6 Plus</h4>
      <p class="my-5">Performance and design. Taken right to the edge.</p>
      <a href="">SHOP NOW</a>
    </div>
    <div class="image">
      <img
        :style="{ height: height + 'px' }"
        src="../../assets/images/banners/iPhone6s_discover_desktop_08_iOS9.png"
        alt=""
      />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  height: {
    type: Number,
    default: 600
  }
})
</script>
<style lang="scss" scoped>
.banner-container {
  width: 100%;
  background-color: var(--blue-background-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 769px) {
    img {
      width: 100%;
    }
  }
}
</style>
