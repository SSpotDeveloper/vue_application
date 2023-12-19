<template>
<div class="home-background">
    <div class="h-full flex justify-center items-center ">
        <div class="bg-white w-1/2 h-2/6 shadow-lg rounded-lg flex divide-x divide-slate-200">
            <div class="p-5 w-full h-full">
                Welcome To Manufacturing Management Systems
                <div class="text-sm text-slate-400">
                    <h1>Status: <span class="text-green-400" v-if="ServerState">Online</span ><span v-else class="text-red-400">Offline</span></h1>
                </div>
                <div class="text-sm text-slate-400" v-if="!ServerState">
                    <h1>Message: <span class="text-red-400">{{ ServerResponse.Message }}</span></h1>
                </div>
            </div>
            <div class="p-5 w-full h-full flex items-center">
                <div class="flex flex-col w-full">
                    <div>
                        <h1>Login</h1>
                    </div>
                    <div class=" my-2 flex bg-white border p-2 border-slate-200 rounded-lg divide-x divide-slate-300">
                        <UserIcon class="h-6 stroke-slate-300 px-2"/><input type="email" class="w-full px-1" placeholder="Email" />
                    </div>
                    <div class="my-2 flex bg-white border p-2 border-slate-200 rounded-lg divide-x divide-slate-300">
                        <LockClosedIcon class="h-6 stroke-slate-300 px-2"/><input type="password" class="w-full px-1" placeholder="Password"/>
                    </div>
                    <div class="text-center mt-2">
                        <button @click="Login" class="bg-green-300 p-2 rounded-md shadow-md hover:bg-green-600 duration-200" :disabled="!ServerState" >Login</button>
                    </div>
                    <div class="mt-3">
                        <p class="text-slate-500 text-sm">Don't have an account yet? <a class="text-lime-600" href="#">Register Now!</a></p>
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
let ServerResponse = ref(null);

async function Server() {
   ServerResponse.value = await verifyServerAvailability();
   if(ServerResponse.value.State){
    
    ServerState.value = true
   }
   console.log(ServerResponse.value)
} 
Server()
</script>