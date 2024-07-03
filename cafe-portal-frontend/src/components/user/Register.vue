<template>
  <div class="registration-container">
    <h2>Signing Up</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="firstname">Firstname:</label>
        <input
          type="text"
          id="firstname"
          v-model="formData.firstname"
          required
        />
        <span class="error" v-if="errors.firstname">{{
          errors.firstname
        }}</span>
      </div>

      <div class="form-group">
        <label for="lastname">Lastname:</label>
        <input type="text" id="lastname" v-model="formData.lastname" required />
        <span class="error" v-if="errors.lastname">{{ errors.lastname }}</span>
      </div>

      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="formData.username" required />
        <span class="error" v-if="errors.username">{{ errors.username }}</span>
      </div>

      <div class="form-group">
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="formData.email" required />
        <span class="error" v-if="errors.email">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="formData.password"
          required
        />
        <span class="error" v-if="errors.password">{{ errors.password }}</span>
      </div>

      <div class="form-group">
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" v-model="formData.phone" />
      </div>

      <button type="submit">sign up</button>
    </form>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  data() {
    return {
      formData: {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        phone: "",
      },
      errors: {},
    };
  },
  methods: {
    async register() {
      this.errors = {}; // Clear previous errors
      // Basic validation (
      if (!this.formData.firstname)
        this.errors.firstname = "Inter Your Firstname";
      if (!this.formData.lastname) this.errors.lastname = "Inter Your Lastname";
      if (!this.formData.username) this.errors.username = "Inter Username";
      if (!this.formData.email) this.errors.email = "Inter E-main";
      else if (!this.isValidEmail(this.formData.email))
        this.errors.email = "E-main is not Valid";
      if (!this.formData.password) this.errors.password = "Inter Password";

      // If no errors, proceed with registration
      if (Object.keys(this.errors).length === 0) {
        try {
          await api.register(this.formData);
          this.$router.push("/login");
        } catch (error) {
          console.error(error);
          // Handle error (e.g., display a message)
        }
      }
    },
    isValidEmail(email) {
      // Basic email validation regex
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
  },
};
</script>

<style scoped>
.registration-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
.error {
  color: red;
  font-size: 12px;
}
</style>
