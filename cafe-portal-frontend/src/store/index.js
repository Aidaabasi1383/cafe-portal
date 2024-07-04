import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    isAdmin: false,
    cart: [],
  },
  mutations: {
    login(state, payload) {
      state.isLoggedIn = true;
      state.isAdmin = payload.isAdmin;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.isAdmin = false;
      state.cart = [];
    },
    addToCart(state, product) {
      const item = state.cart.find((item) => item.product.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ product, quantity: 1 });
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
  getters: {
    totalPrice(state) {
      return state.cart.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0,
      );
    },
  },
});
