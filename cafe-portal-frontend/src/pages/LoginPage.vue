<template>
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username or Email:</label>
          <input id="username" v-model="credentials.username" type="text" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input id="password" v-model="credentials.password" type="password" required>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <p>Don't have an account? <router-link to="/register">Register Here</router-link></p>
      <p>Or</p>
      <button @click="redirectToOTPLogin">Login with OTP</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'LoginPage',
    data() {
      return {
        credentials: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        axios.post('/api/login/', this.credentials)
          .then(response => {
            if (response.data.isAdmin) {
              this.$router.push('/admin');
            } else {
              this.$router.push('/');
            }
          })
          .catch(error => {
            console.error('Login failed:', error);
            alert('Login failed. Please check your credentials and try again.');
          });
      },
      redirectToOTPLogin() {
        this.$router.push('/login-otp');
      }
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    text-align: center;
  }
  
  label {
    margin-right: 10px;
  }
  
  input[type="text"], input[type="password"] {
    width: 100%;
    margin-bottom: 10px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  