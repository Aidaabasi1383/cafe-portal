<template>
    <div>
      <!-- Navigation Bar -->
      <nav>
        <ul>
          <li v-for="category in categories" :key="category.id">
            <router-link :to="{ name: 'ProductPage', params: { categoryId: category.id }}">{{ category.name }}</router-link>
          </li>
          <li v-if="!user"><router-link to="/login">Login</router-link></li>
          <li v-if="user"><router-link to="/logout">Logout</router-link></li>
          <li><router-link to="/cart">Shopping Cart</router-link></li>
          <li><router-link to="/orders">Purchase Records</router-link></li>
        </ul>
      </nav>
  
      <!-- Slider -->
      <div>
        <img v-for="(image, index) in sliderImages" :src="image.src" :alt="'Slide ' + (index + 1)" :key="index">
      </div>
  
      <!-- Best-selling Products -->
      <div>
        <h2>Best Selling Products</h2>
        <div v-for="product in bestSellingProducts" :key="product.id">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <button @click="addToCart(product)">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'HomePage',
    data() {
      return {
        categories: [
          { id: 'hot-drinks', name: 'Hot Drinks' },
          { id: 'cold-drinks', name: 'Cold Drinks' },
          { id: 'cakes', name: 'Cakes' }
        ],
        sliderImages: [
          { src: 'slide1.jpg' },
          { src: 'slide2.jpg' },
          { src: 'slide3.jpg' }
        ],
        bestSellingProducts: [],
        user: null
      }
    },
    created() {
      this.fetchBestSellingProducts();
      this.checkUserLogin();
    },
    methods: {
      fetchBestSellingProducts() {
        axios.get('/api/best-selling-products')
          .then(response => {
            this.bestSellingProducts = response.data;
          })
          .catch(error => {
            console.error('There was an error fetching the best-selling products:', error);
          });
      },
      addToCart(product) {
        if (!this.user) {
          this.$router.push('/login');
        } else {
          // Assume a Vuex action named 'addToCart'
          this.$store.dispatch('addToCart', product);
        }
      },
      checkUserLogin() {
        // Check user login status
        axios.get('/api/user')
          .then(response => {
            this.user = response.data;
          })
          .catch(() => {
            this.user = null;
          });
      }
    }
  }
  </script>
  
  <style scoped>
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  nav ul li {
    display: inline;
    margin-right: 10px;
  }
  </style>
  