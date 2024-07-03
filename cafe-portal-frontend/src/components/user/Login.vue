<template>
  <div>
    <h2>Sign in</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Email or Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Sign in</button>
    </form>
    <router-link to="/register">Sign up</router-link>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const credentials = {
          username: this.username,
          password: this.password,
        };
        await api.login(credentials);
        this.$store.commit("login", { isAdmin: false }); // Update based on your auth logic
        this.$router.push("/");
      } catch (error) {
        console.error(error);
        // Handle error (e.g., display a message)
      }
    },
  },
};
</script>

<style scoped>
form div {
  margin-bottom: 10px;
}
</style>
