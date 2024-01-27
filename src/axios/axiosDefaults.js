import router from '@/router';
import store from '@/store';
import axios from 'axios'
import { computed } from 'vue';

axios.defaults.baseURL = 'https://localhost:7298/';
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const Login = (data) => {
    store.commit('setFakeAuthenicatedState', true)
    store.commit('setFakeUser', data.email);
    const Authenticated = computed(() => store.getters.getFakeAuthenticatedState);
    const User = computed(() => store.getters.getFakeUser);
    if(Authenticated.value || User.value.Email === data.email){
        router.push('/dashboard');
    }
}

const Register = (data) => {
    Login(data);
}


export { Login, Register }