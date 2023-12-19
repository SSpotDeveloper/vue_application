<!-- RegisterPage.vue -->
<template>
    <div class="home-background">
    <div class="registration-form">
      <h1>Register</h1>
      <div class="my-2 flex bg-white border p-2 border-slate-200 rounded-lg divide-x divide-slate-300">
        <UserIcon class="h-6 stroke-slate-300 px-2" />
        <input v-model="username" type="text" class="w-full px-1" placeholder="Username" />
      </div>
      <div class="my-2 flex bg-white border p-2 border-slate-200 rounded-lg divide-x divide-slate-300">
        <MailIcon class="h-6 stroke-slate-300 px-2" />
        <input v-model="email" type="email" class="w-full px-1" placeholder="Email" />
      </div>
      <div class="my-2 flex bg-white border p-2 border-slate-200 rounded-lg divide-x divide-slate-300">
        <LockClosedIcon class="h-6 stroke-slate-300 px-2" />
        <input v-model="password" type="password" class="w-full px-1" placeholder="Password" />
      </div>
      <div class="text-center mt-2">
        <button @click="register" class="bg-blue-500 p-2 rounded-md shadow-md hover:bg-blue-600 text-white duration-200">Register</button>
      </div>
      <div class="mt-3">
        <p class="text-slate-500 text-sm">Already have an account? <router-link to="home" class="text-blue-600">Login here</router-link></p>
      </div>
    </div>
</div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { UserIcon, LockClosedIcon } from '@heroicons/vue/outline';
  
  const username = ref('');
  const email = ref('');
  const password = ref('');
  
  
  </script>
  
  <style scoped>
  
  .registration-form {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-top: 50px;
  }
  </style>