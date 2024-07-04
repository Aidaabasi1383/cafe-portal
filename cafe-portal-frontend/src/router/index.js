import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"), // Lazy loading
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import("../views/Menu.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/user/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../components/user/Register.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../components/admin/AdminDashboard.vue"),
    beforeEnter: (to, from, next) => {
      if (store.getters.isAuthenticated && store.getters.isAdmin) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "*",
    name: "notFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
