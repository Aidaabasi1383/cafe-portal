<template>
  <div class="product">
    <h3>{{ product.name }}</h3>
    <p>Price: {{ product.price }} Dollar</p>
    <button @click="addToCart(product)">Add to cart</button>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    addToCart(product) {
      this.$store.commit("addToCart", product);
      alert(`${product.name}Added to Cart.`);
    },
  },
};
</script>

<style scoped>
.product {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}
</style>
