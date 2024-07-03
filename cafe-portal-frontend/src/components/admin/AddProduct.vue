<template>
  <div>
    <h2>Adding Product</h2>
    <form @submit.prevent="addProduct">
      <div>
        <label for="name">Name of Product:</label>
        <input type="text" v-model="name" required />
      </div>
      <div>
        <label for="price">Price:</label>
        <input type="number" v-model="price" required />
      </div>
      <div>
        <label for="category">Vertical:</label>
        <select v-model="category" required>
          <option value="hot-drinks">Hot Drinks</option>
          <option value="cold-drinks">Cold Drinks</option>
          <option value="cakes">Pies</option>
        </select>
      </div>
      <div>
        <label for="image">Image:</label>
        <input type="file" @change="onFileChange" required />
      </div>
      <div v-for="(ingredient, index) in ingredients" :key="index">
        <label :for="'ingredient' + index"> Recipies {{ index + 1 }}:</label>
        <input
          type="text"
          v-model="ingredient.name"
          :id="'ingredient' + index"
          required
        />
        <input type="number" v-model="ingredient.quantity" required />
      </div>
      <button type="button" @click="addIngredient">Adding Recipy</button>
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      price: 0,
      category: "hot-drinks",
      image: null,
      ingredients: [{ name: "", quantity: 0 }],
    };
  },
  methods: {
    onFileChange(event) {
      this.image = event.target.files[0];
    },
    addIngredient() {
      this.ingredients.push({ name: "", quantity: 0 });
    },
    addProduct() {
      // Handle adding product logic, possibly send data to a server
      console.log("Product added:", {
        name: this.name,
        price: this.price,
        category: this.category,
        image: this.image,
        ingredients: this.ingredients,
      });
    },
  },
};
</script>

<style scoped>
form div {
  margin-bottom: 10px;
}
</style>
