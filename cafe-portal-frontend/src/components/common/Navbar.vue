<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/menu">Menu</router-link></li>
      <li><router-link to="/cart">Cart</router-link></li>
      <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
      <li v-else><router-link to="/logout">Exit</router-link></li>
      <li v-if="isAdmin"><router-link to="/admin">Admin</router-link></li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isLoggedIn", "isAdmin"]),
  },
};
</script>

<style scoped>
nav {
  background-color: #333;
  color: white;
  padding: 10px;
}
nav ul {
  list-style-type: none;
  padding: 0;
}
nav ul li {
  display: inline;
  margin: 0 15px;
}
nav ul li a {
  color: white;
  text-decoration: none;
}
</style>
