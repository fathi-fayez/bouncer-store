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
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.name === 'productDetails') {
      return { el: '#product-details', behavior: 'smooth' }
    }
    return savedPosition || { top: 0 }
  }
})

export default router
