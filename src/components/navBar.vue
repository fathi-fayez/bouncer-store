<template>
  <div class="navBar container">
    <h1 class="logo">BOUNCER</h1>
    <ul class="nav-icons">
      <li>HOME</li>
      <li>STORE</li>
      <li>IPHONE</li>
      <li>IPAD</li>
      <li>MACKBOOK</li>
      <li>ACCESORIES</li>
    </ul>
  </div>
</template>
<script setup></script>
<style lang="scss">
.navBar {
  margin: 20px;
  text-align: center;
  .logo {
    margin: 50px;
  }
  .nav-icons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
  }
}
</style>
