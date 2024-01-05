<template>
    <div class="p-5">
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
        <select id="tabs" name="tabs" class="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
          <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
        </select>
      </div>
      <div class="hidden sm:block">
        <div class="border-b border-gray-200">
          <nav class="flex -mb-px space-x-8" aria-label="Tabs">
            <RouterLink
              v-for="tab in tabs"
              :key="tab.name"
              :to="tab.to"
              :class="[
                $route.path === tab.to ? 'border-lime-500 text-lime-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
              ]"
              :aria-current="$route.path === tab.to ? 'page' : undefined"
            >
              {{ tab.name }}
            </RouterLink>
          </nav>
        </div>
      </div>
    </div>
    <div class="px-2 2xl:px-5">
        <RouterView />
    </div>
    
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  
  const tabs = [
    { name: 'Company Information', to: '/settings', current: route.path === '/settings' },
    { name: 'Users', to: '/settings/user-settings', current: route.path === '/settings/user-settings' },
  ];
  </script>
  