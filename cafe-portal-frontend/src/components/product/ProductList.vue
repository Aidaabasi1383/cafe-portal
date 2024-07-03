<template>
  <div>
    <div v-for="product in products" :key="product.id">
      <ProductItem :product="product" />
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    // Fetch products from an API or store
    this.products = [
      { id: 1, name: "Espresso", price: 2.99 },
      { id: 2, name: "Cappuccino", price: 4.99 },
      { id: 3, name: "Latte", price: 5.89 },
    ];
  },
};
</script>
