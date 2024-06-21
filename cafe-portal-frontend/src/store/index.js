import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
  state: {
    user: null,
    products: [],
    cart: [],
    orders: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setProducts(state, products) {
      state.products = products
    },
    addToCart(state, product) {
      state.cart.push(product)
    },
    setOrders(state, orders) {
      state.orders = orders
    },
  },
  actions: {
    fetchProducts({ commit }) {
      axios.get('http://localhost:8000/api/products/')
        .then(response => {
          commit('setProducts', response.data)
        })
    },
    fetchOrders({ commit }) {
      axios.get('http://localhost:8000/api/orders/')
        .then(response => {
          commit('setOrders', response.data)
        })
    },
    login({ commit }, user) {
      axios.post('http://localhost:8000/api/token/', user)
        .then(response => {
          commit('setUser', response.data)
        })
    },
    register({ commit }, user) {
      axios.post('http://localhost:8000/api/users/', user)
        .then(response => {
          commit('setUser', response.data)
        })
    },
    addToCart({ commit }, product) {
      commit('addToCart', product)
    },
  },
  getters: {
    user: (state) => state.user,
    products: (state) => state.products,
    cart: (state) => state.cart,
    orders: (state) => state.orders,
  },
})

export default store
