<template>
  <div>
    <Header> </Header>
    <navBar />
    <currentPageStatus />
    <div class="container">
      <div class="row">
        <!-- Product container -->
        <div class="product-container col-8">
          <div class="row">
            <!-- Images -->
            <div class="col-5" style="border: 2px solid red">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae officiis quia
                in facilis aliquam mollitia, ullam iste consequatur ipsum adipisci, dolorum labore!
                Nihil officiis voluptatem eligendi harum, a ea. Quisquam?
              </p>
            </div>
            <!-- 0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 -->
            <!-- Details -->
            <div class="col-7" style="border: 2px solid red">
              <h4 class="product-name">Beats Solo2 On Ear Headphones - Black</h4>
              <div class="rating d-flex">
                <!-- Rating Stars -->
                <div>
                  <i class="fa-solid fa-star" style="color: #ffc600"></i>
                  <i class="fa-solid fa-star" style="color: #ffc600"></i>
                  <i class="fa-solid fa-star" style="color: #ffc600"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <!-- Reviews -->
                <span>0 reviews</span>
                <a href="">Submit a review</a>
              </div>
              <!-- Shipping Details -->
              <div>
                <div class="price">
                  <span class="last-price">$499 </span><span class="old-price">$599</span>
                </div>
                <h5>Availability:<span class="ms-5">In stock</span></h5>
                <h5>Category:<span class="ms-5">Accessories</span></h5>
                <h5>Free shipping</h5>
                <!-- Color Box -->
                <div class="d-flex">
                  <h5>Select Color:</h5>
                  <ul class="color-options ms-4">
                    <li class="active" style="background-color: #f44336"></li>
                    <li style="background-color: #03a9f4"></li>
                    <li style="background-color: #e91e63"></li>
                    <li style="background-color: #ffeb3b"></li>
                  </ul>
                </div>
                <!-- Size Selector -->
                <div class="d-flex">
                  <h5 class="me-5">Size</h5>
                  <select class="ms-5">
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                  </select>
                </div>
                <div>
                  <!-- Quantity Selector -->
                  <div class="d-flex align-items-center">
                    <button class="btn btn-outline-secondary">-</button>
                    <h6 class="m-3">5</h6>
                    <button class="btn btn-outline-secondary">+</button>
                  </div>
                  <!-- Add To Cart Button -->
                  <button type="button" class="btn add-to-cart-btn">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <!-- 0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 -->
          </div>
        </div>

        <div class="col-4" style="border: 2px solid green">
          <div class="bestSeller-Window" style="border: 2px solid red">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae maiores
              repellendus ad esse eligendi perferendis deserunt, aspernatur aliquid dolorum, magnam
              tenetur sit itaque nesciunt doloribus velit tempore fuga qui debitis.
            </p>
          </div>
          <div class="bestSeller-Window" style="border: 2px solid red">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae maiores
              repellendus ad esse eligendi perferendis deserunt, aspernatur aliquid dolorum, magnam
              tenetur sit itaque nesciunt doloribus velit tempore fuga qui debitis.
            </p>
          </div>
        </div>
        <div class="col-12" style="border: 2px solid green">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corporis illum aspernatur
            consequuntur nam repellat officia sint, eaque iusto ea corrupti doloremque nulla facere
            dolorem quae veniam eos voluptate ab!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corporis illum aspernatur
            consequuntur nam repellat officia sint, eaque iusto ea corrupti doloremque nulla facere
            dolorem quae veniam eos voluptate ab!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corporis illum aspernatur
            consequuntur nam repellat officia sint, eaque iusto ea corrupti doloremque nulla facere
            dolorem quae veniam eos voluptate ab!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corporis illum aspernatur
            consequuntur nam repellat officia sint, eaque iusto ea corrupti doloremque nulla facere
            dolorem quae veniam eos voluptate ab!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Header from '../../components/Header.vue'
import navBar from '../../components/navBar.vue'
import currentPageStatus from '../../components/currentPageStatus.vue'
</script>
<style lang="scss" scoped>
.price {
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 24px;
  .last-price {
    color: #ff4858;
  }
  .old-price {
    text-decoration: line-through;
    color: rgb(93, 101, 107);
  }
}
.color-options {
  list-style: none;
  text-align: center;
  padding: 0;

  li {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
    display: inline-block;
    border: 3px solid #eee;
    &.active {
      border: 3px solid rgb(6, 153, 233);
    }
  }
}
.add-to-cart-btn {
  color: rgb(193, 200, 206);
  background-color: #ebf6ff;
  &:hover {
    color: rgb(51, 160, 255);
  }
}
</style>
