<template>
  <div>
    <h2>Cart</h2>
    <div v-for="item in cart" :key="item.product.id">
      <p>
        {{ item.product.name }}: {{ item.product.price }} Dollor -
        {{ item.quantity }} unit
      </p>
    </div>
    <p>Total: {{ totalPrice }} Dollor</p>
    <button @click="checkout">Order</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["totalPrice"]),
  },
  methods: {
    checkout() {
      // Implement checkout functionality
      alert("Your Order Successfully Submitted!");
      this.$store.commit("clearCart");
    },
  },
};
</script>
