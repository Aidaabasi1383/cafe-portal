import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import ManagementPage from '../pages/ManagementPage.vue'
import CartPage from '../pages/CartPage.vue'
import PurchaseHistoryPage from '../pages/PurchaseHistoryPage.vue'
import ProductPage from '../pages/ProductPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/management', component: ManagementPage },
  { path: '/cart', component: CartPage },
  { path: '/purchase-history', component: PurchaseHistoryPage },
  { path: '/product/:id', component: ProductPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
