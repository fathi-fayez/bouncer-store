<!-- eslint-disable -->
<template>
  <div class="main">
    <i class="empty-cart fa-solid fa-cart-shopping"> </i>
    <h1>Your cart is empty</h1>
    <p>You can go to home page and add items.</p>
  </div>
</template>
<!-- eslint-disable -->
<script>
export default {
  name: 'emptycart'
}
</script>
<!-- eslint-disable -->
<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
}
.empty-cart {
  font-size: 100px;
  color: green;
  margin: 30px;
}
</style>
