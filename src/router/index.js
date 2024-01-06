import { createRouter, createWebHashHistory, } from 'vue-router'
// import HomePageVue from '@/views/Pages/HomePage.vue'
import RegisterPage from '@/views/Pages/RegisterPage.vue';
import SettingsPageVue from '@/views/Pages/SettingsPage.vue';
import ProfilePageVue from '@/views/Pages/ProfilePage.vue';
import CompanySettingsVue from '@/views/Pages/Settings/CompanySettings.vue';
import UserSettingsVue from '@/views/Pages/Settings/UserSetings.vue';
import DashboardPageVue from '@/views/Pages/DashboardPage.vue';
import ClientPageVue from '@/views/Pages/ClientPage.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardPageVue,
  },
  { path: '/register',
    name: 'register', 
    component: RegisterPage 
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsPageVue,
    children: [
      {
        path: '',
        component: CompanySettingsVue,
      },
      {
        path: 'user-settings',
        component: UserSettingsVue,
      }
    ]
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePageVue,
  },
  {
    path: '/clients',
    name: 'clients',
    component: ClientPageVue,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
