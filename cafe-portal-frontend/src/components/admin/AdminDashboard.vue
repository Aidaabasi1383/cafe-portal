<template>
  <div>
    <h2>Shop Mangament</h2>
    <nav>
      <ul>
        <li @click="currentView = 'InventoryManagement'">Anbar Mangament</li>
        <li @click="currentView = 'AddProduct'">Adding Product</li>
      </ul>
    </nav>
    <component :is="currentView"></component>
  </div>
</template>

<script>
import InventoryManagement from "./InventoryManagement.vue";
import AddProduct from "./AddProduct.vue";

export default {
  data() {
    return {
      currentView: "InventoryManagement",
    };
  },
  components: {
    InventoryManagement,
    AddProduct,
  },
};
</script>

<style scoped>
nav ul {
  list-style-type: none;
  padding: 0;
}
nav ul li {
  display: inline;
  margin: 0 15px;
  cursor: pointer;
  color: blue;
}
</style>
