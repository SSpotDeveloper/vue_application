import router from '@/router';
import store from '@/store';
import axios from 'axios'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/firebase/config'
import { computed } from 'vue';

axios.defaults.baseURL = 'https://localhost:7298/';
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;


onAuthStateChanged(auth, (user) => {
    // State Managemant
    if(user){
        // User Signed In
        store.commit('setFakeAuthenicatedState', true)
        store.commit('setFakeUser', user.email);
        const Authenticated = computed(() => store.getters.getFakeAuthenticatedState);
        const User = computed(() => store.getters.getFakeUser);
        if(Authenticated.value || User.value.Email === user.email){
            router.push('/dashboard');
        }
    }else{
        store.commit('setFakeAuthenicatedState', false)
        store.commit('setFakeUser', '');
        router.push('/');
        // User Signed Out
    }
});

const SignOut = () => {
    signOut(auth)
}
const Login = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then(() => {})
    .catch((err) => console.log(err))
}
const Register = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}
const RegisterEmployee = (data) => {
    console.log(data)
}


export { Login, Register, SignOut, RegisterEmployee }