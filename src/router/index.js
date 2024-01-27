import { createRouter, createWebHashHistory, } from 'vue-router'
import HomePageVue from '@/views/Pages/HomePage.vue'
import RegisterPage from '@/views/Pages/RegisterPage.vue';
import SettingsPageVue from '@/views/Pages/SettingsPage.vue';
import ProfilePageVue from '@/views/Pages/ProfilePage.vue';
import CompanySettingsVue from '@/views/Pages/Settings/CompanySettings.vue';
import UserSettingsVue from '@/views/Pages/Settings/UserSetings.vue';
import DashboardPageVue from '@/views/Pages/DashboardPage.vue';
import ClientPageVue from '@/views/Pages/ClientPage.vue';
import InvoicePageVue from '@/views/Pages/Client/InvoicePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePageVue,
  },
  { path: '/register',
    name: 'register', 
    component: RegisterPage 
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPageVue,
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
  },
  {
    path: '/invoice',
    name: 'invoice',
    component: InvoicePageVue
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
