<template>
  <div class="navBar container">
    <h1 class="logo">BOUNCER</h1>
    <ul class="nav-icons mx-auto">
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
  text-align: center;
  .logo {
    margin: 50px;
  }
  .nav-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    @media (max-width: 769px) {
      flex-direction: column;
      li {
        border: 1px solid #888;
        padding: 10px 20px;
        width: 150px;
      }
    }

    li {
      margin: 0 20px;
    }
  }
}
</style>
