<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container justify-content-end">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- Dropdowns -->
            <div class="d-lg-flex">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Action</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  USD
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Action</a></li>
                </ul>
              </li>
            </div>
            <!-- Items -->
            <div class="d-lg-flex">
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
                    v-show="count"
                    class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger"
                  >
                    {{ count }}
                  </span>
                  <i class="fa-solid fa-cart-shopping"></i> Items</router-link
                >
              </li>
            </div>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn" type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <button
          class="navbar-toggler mt-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    <navBar />
  </div>
</template>

<script setup>
import navBar from './navBar.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const count = computed(() => {
  return store.state.cartItemsCount
})
</script>

<style scoped>
.container {
  position: relative;
}
.navbar-nav {
  flex-grow: 1;
  justify-content: space-between;
}
</style>
