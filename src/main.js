import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/css/main.css'
import '@/axios/axiosDefaults';

createApp(App).use(store).use(router).mount('#app')
