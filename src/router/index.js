import { createRouter, createWebHistory } from 'vue-router';
import Home from '@views/home/index.vue';
import Login from "@/views/auth/login/index.vue"
import Signup from "@/views/auth/signup/index.vue"



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
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
