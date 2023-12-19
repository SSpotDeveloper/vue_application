<template>
<div class="home-background">

    <div class="h-full flex justify-center items-center ">
        <div class="bg-white p-1 shadow-lg rounded-lg flex divide-x divide-slate-200">
            <div class="p-5">
                Welcome To Manufacturing Management Systems
                <div class="text-sm text-slate-400">
                    <h1>Server Status: <span class="text-green-400">Online</span><span class="text-red-400">Offline</span></h1>
                </div>
                <div class="text-sm text-slate-400">
                    <h1>Connection Status: <span class="text-orange-400">Connecting</span><span class="text-green-400">Connected</span><span class="text-red-400">Disconnected</span></h1>
                </div>
            </div>
            <div class="p-5">
                <div>
                    <h1>Login</h1>
                </div>
                <div class=" my-2 flex bg-white border p-2 border-slate-200 rounded-lg divide-x divide-slate-300">
                    <UserIcon class="h-6 stroke-slate-300"/><input type="email" />
                </div>
                <div class="my-2 flex bg-white border p-2 border-slate-200 rounded-lg divide-x divide-slate-300">
                    <LockClosedIcon class="h-6 stroke-slate-300"/><input type="password"/>
                </div>
                <div class="text-center mt-2">
                    <button class="bg-green-300 p-2 rounded-md shadow-md hover:bg-green-600 duration-200" aria-disabled="true">Login</button>
                </div>
            </div>
        </div>
    </div>

</div>
</template>
<script setup>
import { UserIcon, LockClosedIcon } from '@heroicons/vue/24/outline';
import {verifyServerAvailability} from '@/axios/axiosDefaults'

async function Server() {
   const ServerResponse = await verifyServerAvailability();
   console.log(ServerResponse)
} 
Server()
</script>