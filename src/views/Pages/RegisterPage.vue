<template>
  <div class="home-background">
      <div class="flex items-center justify-center h-full ">
          <div class="flex w-1/2 bg-white rounded-lg shadow-lg 2xl:h-2/6 xl:h-3/6">
              <div class="flex items-center w-full h-full p-6">
                  <div class="flex flex-col w-full">
                      <div>
                          <h1>Register</h1>
                      </div>
                      <div class="flex p-2 my-2 bg-white border divide-x rounded-lg border-slate-200 divide-slate-300">
                          <UserIcon class="h-6 px-2 stroke-slate-300"/><input type="text" class="w-full px-1" placeholder="Name" />
                      </div>
                      <div class="flex p-2 my-2 bg-white border divide-x rounded-lg border-slate-200 divide-slate-300">
                          <EnvelopeIcon class="h-6 px-2 stroke-slate-300"/><input v-model="data.email" type="email" class="w-full px-1" placeholder="Email" />
                      </div>
                      <div class="flex p-2 my-2 bg-white border divide-x rounded-lg border-slate-200 divide-slate-300">
                          <LockClosedIcon class="h-6 px-2 stroke-slate-300"/><input v-model="data.password" type="password" class="w-full px-1" placeholder="Password"/>
                      </div>
                      <h1>{{response}}</h1>
                      <div class="mt-2 text-center">
                          <button @click="registerUser()" class="p-2 duration-200 bg-green-300 rounded-md shadow-md hover:bg-green-600">Register</button>
                      </div>
                      <div class="mt-3">
                          <p class="text-sm text-slate-500">Already registered? <router-link to="/" class="text-lime-600">Login!</router-link> </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </template>
  <script setup>
  import { ref } from 'vue';
  import { UserIcon, LockClosedIcon, EnvelopeIcon } from '@heroicons/vue/24/outline';
  import { Register } from '@/axios/axiosDefaults';


  const data = ref({
    email: '',
    password: '',
  })
  const response = ref();
  const registerUser = () => {
    response.value = Register(data.value)
  }
  </script>