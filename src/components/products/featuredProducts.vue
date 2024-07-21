<template>
  <div>
    <h1 class="text-center my-5">FEATURED PRODUCTS</h1>
    <div class="news-container container">
      <div class="row">
        <!-- news box -->
        <div class="news-box col-sm-6 col-md-4">
          <img src="/src/assets/images/products images/50050995_530579.png" alt="" />
          <div class="content">
            <h5>Typesetting industry</h5>
            <div class="rating">
              <i class="fa-solid fa-star" style="color: #ffb301"></i>
              <i class="fa-solid fa-star" style="color: #ffb301"></i>
              <i class="fa-solid fa-star" style="color: #ffb301"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <span class="last-price">$499</span> <span class="old-price">$599</span>
          </div>
        </div>
        <!-- news box -->
        <div class="news-box col-sm-6 col-md-4">
          <img src="/src/assets/images/products images/c04297141.png" alt="" />
          <div class="content">
            <h5>Typesetting industry</h5>
            <div class="rating">
              <i class="fa-solid fa-star" style="color: #ffb301"></i>
              <i class="fa-solid fa-star" style="color: #ffb301"></i>
              <i class="fa-solid fa-star" style="color: #ffb301"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <span class="last-price">$499</span> <span class="old-price">$599</span>
          </div>
        </div>
        <!-- news box -->
        <div class="news-box col-sm-6 col-md-4">
          <img src="/src/assets/images/products images/PR-104-0015-002-8A.png" alt="" />
          <div class="content">
            <h5>Typesetting industry</h5>
            <div class="rating">
              <i class="fa-solid fa-star" style="color: #ffc600"></i>
              <i class="fa-solid fa-star" style="color: #ffc600"></i>
              <i class="fa-solid fa-star" style="color: #ffc600"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <span class="last-price">$499</span> <span class="old-price">$599</span>
          </div>
        </div>
      </div>
    </div>
    <form>
      <input type="search" name="search" id="" placeholder="Search query..." />
      <input class="bg-primary" type="submit" value="Search" />
    </form>
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
    span.last-price {
      color: #ff4858;
    }
    span.old-price {
      text-decoration: line-through;
    }
  }
}
form {
  text-align: center;
  input {
    outline: none;
    padding: 10px 15px;
    margin: 50px auto;
  }
}
</style>
