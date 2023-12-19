import { createRouter, createWebHashHistory, } from 'vue-router'
import HomePageVue from '@/views/Pages/HomePage.vue'
import RegisterPage from '@/views/Pages/RegisterPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePageVue
  },
  { path: '/register',
    name: 'register', 
    component: RegisterPage 
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
