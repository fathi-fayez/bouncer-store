import { createStore } from 'vuex'

const store = createStore({
  state: {
    cartItems: [],
    cartItemsCount: 0,
    shippingCost: 50
  },
  mutations: {
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
    // addToCart(state, product) {
    //   state.cart.push(product)
    // },
    // removeFromCart(state, productId) {
    //   state.cart = state.cart.filter((item) => item.id !== productId)
    // }
  },
  actions: {
    addToCart({ commit }, payload) {
      commit('addToCart', payload)
    },
    deleteItem({ commit }, payload) {
      commit('deleteItem', payload)
    }
    // addToCart({ commit }, product) {
    //   commit('addToCart', product)
    // },
    // removeFromCart({ commit }, productId) {
    //   commit('removeFromCart', productId)
    // }
  },
  getters: {
    cartItems: (state) => state.cartItems,
    cartItemsCount: (state) => state.cartItemsCount
    // cartTotal: (state) => state.cart.reduce((total, item) => total + item.price, 0)
  }
})

export default store
