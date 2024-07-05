<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div
        class="collapse navbar-collapse d-flex justify-content-around"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav">
          <div class="dropdowns d-flex">
            <!-- dropdown one -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                EN
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <!-- dropdown two -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                USD
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </div>
          <div class="d-flex align-items-center">
            <li class="nav-item me-5">
              <a class="nav-link active" aria-current="page" href="#"
                ><i class="fa-regular fa-user"></i> My profile</a
              >
            </li>
            <li class="nav-item me-5">
              <router-link
                :to="{
                  name: 'cartPage'
                }"
                class="nav-link position-relative"
                href="#"
              >
                <span
                  class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger"
                >
                </span>
                <i class="fa-solid fa-cart-shopping"></i> Items</router-link
              >
            </li>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
.navbar-nav {
  flex-grow: 1;
  justify-content: space-around;
}
</style>
