import { createRouter, createWebHashHistory } from 'vue-router'
import HomePageVue from '@/views/Pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePageVue
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
