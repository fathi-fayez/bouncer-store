import { createStore } from 'vuex'

const store = createStore({
  state: {
    cartItems: [],
    cartItemsCount: 0,
    shippingCost: 50,
    products: [],
    searchQuery: ''
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setSearchQuery(state, query) {
      state.searchQuery = query
    },
    addToCart(state, payload) {
      let item = payload
      item = { ...item, quantity: 1 }
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some((i) => i.id === item.id)
        if (bool) {
          let itemIndex = state.cartItems.findIndex((el) => el.id === item.id)
          state.cartItems[itemIndex]['quantity'] += 1
        } else {
          state.cartItems.push(item)
        }
      } else {
        state.cartItems.push(item)
      }
      state.cartItemsCount++
    },
    deleteItem(state, payload) {
      let item = payload
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some((i) => i.id === item.id)
        if (bool) {
          let itemIndex = state.cartItems.findIndex((el) => el.id === item.id)
          if (state.cartItems[itemIndex]['quantity'] !== 0) {
            state.cartItems[itemIndex]['quantity'] -= 1
            state.cartItemsCount--
          }
          if (state.cartItems[itemIndex]['quantity'] === 0) {
            state.cartItems.splice(itemIndex, 1)
          }
        }
      }
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        commit('setProducts', data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
    updateSearchQuery({ commit }, query) {
      commit('setSearchQuery', query)
    },
    addToCart({ commit }, payload) {
      commit('addToCart', payload)
    },
    deleteItem({ commit }, payload) {
      commit('deleteItem', payload)
    }
  },
  getters: {
    cartItems: (state) => state.cartItems,
    cartItemsCount: (state) => state.cartItemsCount,
    products: (state) => state.products,
    searchQuery: (state) => state.searchQuery
    // cartTotal: (state) => state.cart.reduce((total, item) => total + item.price, 0)
  }
})

export default store
