import { createRouter, createWebHistory } from 'vue-router';
import Home from '@views/home/index.vue';
import Login from "@/views/auth/login/index.vue"
import Signup from "@/views/auth/signup/index.vue"
import Forgotpassword from "@views/auth/forgot-password/index.vue"
import ResetPassword from "../views/auth/reset-password/index.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/forgot-password',
    name: 'Forgotpassword',
    component: Forgotpassword
  },
  {
    path: '/reset-password',
    name: 'Resetpassword',
    component: ResetPassword
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
