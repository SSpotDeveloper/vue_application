<template>
    <div class="p-5 home-background">
        <!-- Mobile Login -->
        <div class="flex items-center justify-center w-full h-full sm:hidden">
            <div class="w-full p-5 bg-white rounded-lg">
                <div class="my-1">
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <div class="mt-2">
                      <input v-model="data.email" required type="email" name="email" id="email" class=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="example@yourcompany.co.za" />
                    </div>
                </div>
                <div class="my-1">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div class="mt-2">
                      <input v-model="data.password" required type="password" name="password" id="password" class=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div class="my-3 text-center">
                    <button @click="Login(data)" type="button" class="rounded-full bg-green-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Login</button>
                </div>

            </div>
        </div>
        <!-- Tablet And Desktop Login  -->
        <div class="flex items-center justify-center h-full">
            <div class="w-1/2 p-5 bg-white rounded-lg md:w-1/3">
                <div class="my-1">
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <div class="mt-2">
                      <input v-model="data.email" type="email" name="email" id="email" class=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="example@yourcompany.co.za" />
                    </div>
                </div>
                <div class="my-1">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div class="mt-2">
                      <input v-model="data.password" type="password" name="password" id="password" class=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div class="my-3 text-center">
                    <button @click="Login(data)" type="button" class="rounded-full bg-green-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Login</button>
                </div>
                <div>
                    <h1>Not yet registered? <RouterLink to="/register" class="text-green-600">Register</RouterLink></h1>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { Login } from '@/axios/axiosDefaults';

const data = ref({
    email: '',
    password: '',
})
</script>