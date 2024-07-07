import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { PageStatus: true }
    },
    {
      path: '/productDetails/:category/:id',
      name: 'productDetails',
      component: () => import('../components/products/productDetails.vue')
    },
    {
      path: '/productsList/:category',
      name: 'productsList',
      component: () => import('../components/products/productsList.vue')
    },
    {
      path: '/cartPage',
      name: 'cartPage',
      component: () => import('../components/cartPage.vue'),
      meta: { emptyCart: true }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.name === 'productDetails') {
      return { el: '#product-details', behavior: 'smooth' }
    } else if (to.name === 'productsList') {
      return { el: '#products-list', behavior: 'smooth' }
    }
    return savedPosition || { top: 0 }
  }
})

export default router
