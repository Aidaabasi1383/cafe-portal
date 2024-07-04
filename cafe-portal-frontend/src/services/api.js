import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:5000", // Flask backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  getUsers() {
    return apiClient.get("/users");
  },
  addUser(user) {
    return apiClient.post("/users", user);
  },
  register(user) {
    return apiClient.post("/register", user);
  },
  login(credentials) {
    return apiClient.post("/login", credentials);
  },
};
