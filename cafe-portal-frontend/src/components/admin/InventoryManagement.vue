<template>
  <div>
    <h2>Anbar Managments</h2>
    <div v-for="item in inventory" :key="item.id">
      <span>{{ item.name }}: {{ item.quantity }}</span>
      <button @click="editItem(item)">Edit</button>
    </div>
    <div v-if="selectedItem">
      <h3>Edit {{ selectedItem.name }}</h3>
      <input type="number" v-model="selectedItem.quantity" />
      <button @click="saveItem">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inventory: [
        { id: 1, name: "Suger", quantity: 100 },
        { id: 2, name: "Coffee ", quantity: 50 },
        { id: 3, name: "Bered", quantity: 200 },
        { id: 4, name: "Chocklate", quantity: 75 },
      ],
      selectedItem: null,
    };
  },
  methods: {
    editItem(item) {
      this.selectedItem = { ...item };
    },
    saveItem() {
      const index = this.inventory.findIndex(
        (i) => i.id === this.selectedItem.id,
      );
      if (index !== -1) {
        this.inventory.splice(index, 1, this.selectedItem);
        this.selectedItem = null;
      }
    },
  },
};
</script>

<style scoped>
div {
  margin-bottom: 10px;
}
</style>
