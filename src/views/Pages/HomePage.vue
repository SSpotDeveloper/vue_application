<template>
<div class="home-background">
    <div class="flex items-center justify-center h-full ">
        <div class="flex w-1/2 bg-white divide-x rounded-lg shadow-lg 2xl:h-2/6 xl:h-3/6 divide-slate-200">
            <div class="w-full h-full p-5">
                Welcome To Manufacturing Management Systems
                <div class="text-sm text-slate-400">
                    <h1>Status: <span class="text-green-400" v-if="ServerState">Online</span ><span v-else class="text-red-400">Offline</span></h1>
                </div>
                <div class="text-sm text-slate-400" v-if="!ServerState">
                    <h1 v-if="ServerResponse.Message">Message: <span class="text-red-400">{{ ServerResponse.Message }}</span></h1>
                </div>
            </div>
            <div class="flex items-center w-full h-full p-5">
                <div class="flex flex-col w-full">
                    <div>
                        <h1>Login</h1>
                    </div>
                    <div class="flex p-2 my-2 bg-white border divide-x rounded-lg border-slate-200 divide-slate-300">
                        <UserIcon class="h-6 px-2 stroke-slate-300"/><input type="email" class="w-full px-1" placeholder="Email" />
                    </div>
                    <div class="flex p-2 my-2 bg-white border divide-x rounded-lg border-slate-200 divide-slate-300">
                        <LockClosedIcon class="h-6 px-2 stroke-slate-300"/><input type="password" class="w-full px-1" placeholder="Password"/>
                    </div>
                    <div class="mt-2 text-center">
                        <button @click="Login" class="p-2 duration-200 bg-green-300 rounded-md shadow-md hover:bg-green-600" :disabled="!ServerState" >Login</button>
                    </div>
                    <div class="mt-3">
                        <p class="text-sm text-slate-500">Don't have an account yet? <router-link to="/register" class="text-lime-600">Register Now!</router-link> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>
<script setup>
import {ref} from 'vue';
import { UserIcon, LockClosedIcon } from '@heroicons/vue/24/outline';
import {verifyServerAvailability, Login} from '@/axios/axiosDefaults'





const ServerState = ref(false);
let ServerResponse = ref(false);

async function Server() {
   ServerResponse.value = await verifyServerAvailability();
   if(ServerResponse.value.State){
    
    ServerState.value = true
   }
   console.log(ServerResponse.value)
} 
Server()
</script>