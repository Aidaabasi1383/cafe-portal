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
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.username === "admin" && this.password === "admin") {
        this.$store.commit("login", { isAdmin: true });
        this.$router.push("/admin");
      } else {
        // Validate against actual user data
        this.$store.commit("login", { isAdmin: false });
        this.$router.push("/");
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
