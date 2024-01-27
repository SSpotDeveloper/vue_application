import { createRouter, createWebHashHistory, } from 'vue-router'
import {computed} from 'vue';
import store from  '@/store';
import HomePageVue from '@/views/Pages/HomePage.vue'
import RegisterPage from '@/views/Pages/RegisterPage.vue';
import SettingsPageVue from '@/views/Pages/SettingsPage.vue';
import ProfilePageVue from '@/views/Pages/ProfilePage.vue';
import CompanySettingsVue from '@/views/Pages/Settings/CompanySettings.vue';
import UserSettingsVue from '@/views/Pages/Settings/UserSetings.vue';
import DashboardPageVue from '@/views/Pages/DashboardPage.vue';
import ClientPageVue from '@/views/Pages/ClientPage.vue';
import InvoicePageVue from '@/views/Pages/Client/InvoicePage.vue';

const Authenticated = computed(() => store.getters.getFakeAuthenticatedState);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePageVue,
    meta: {
      Auth: false,
    }
  },
  { path: '/register',
    name: 'register', 
    component: RegisterPage,
    meta: {
      Auth: false,
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPageVue,
    meta: {
      Auth: true,
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsPageVue,
    meta: {
      Auth: true,
    },
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
    meta: {
      Auth: true,
    },
  },
  {
    path: '/clients',
    name: 'clients',
    component: ClientPageVue,
    meta: {
      Auth: true,
    },
  },
  {
    path: '/invoice',
    name: 'invoice',
    component: InvoicePageVue,
    meta: {
      Auth: true,
    },
  }
]



const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.Auth){
    if(!Authenticated.value){
      next('/');
    }else{
      next();
    }
  }else {
    if(Authenticated.value){
      next('/dashboard')
    }else{
      next();
    }
  }
})

export default router
