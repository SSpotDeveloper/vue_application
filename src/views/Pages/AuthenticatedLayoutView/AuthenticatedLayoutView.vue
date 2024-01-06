<template>
    <div class="h-screen">
        <SideNavigation :state="sideNavigation" @sideNavigation:close="closeSideNavigation()" />
        <nav class="flex justify-between px-5 pt-5 pb-4 bg-white shadow-lg">
            <div>
                <Bars4Icon class="h-6 text-slate-600" @click="openSideNavigation()"/>
            </div>
            <div>
                <span class="text-slate-400">Trial</span><span class="text-slate-400">SME</span><span class="text-slate-400">Enterprise</span><span class="text-slate-400">Manufacturing</span>
            </div>
            <Menu as="div" class="relative">
                <MenuButton>
                    <img src="https://logo.com/image-cdn/images/kts928pd/production/b76978004c62f2b4cb9a8dfd73448c5a63988fd2-1600x1598.png?w=1080&q=72" alt="Company Logo" class="h-6 rounded-full">
                </MenuButton>
                <MenuItems class="absolute right-0 flex flex-col w-48 p-1 rounded-md shadow-lg bg-lime-300">
                    <MenuItem class="flex justify-between px-3 py-2 rounded-md hover:bg-lime-400" :class="{ 'bg-lime-500': $route.path.includes('/settings')}">
                        <RouterLink to="/settings" >Settings</RouterLink>
                    </MenuItem>
                    <MenuItem class="flex justify-between px-3 py-2 rounded-md hover:bg-lime-400" :class="{ 'bg-lime-500': $route.path.includes('/profile')}">
                        <RouterLink to="/profile" >Profile</RouterLink>
                    </MenuItem>
                    <MenuItem class="flex justify-between px-3 py-2 rounded-md hover:bg-lime-400" :class="{ 'bg-lime-500': $route.name === 'logout' }">
                        <RouterLink to="/settings" >Logout</RouterLink>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </nav>
        <div>
            <slot />
        </div>
    </div>
<!-- <SystemPartial /> -->
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import SideNavigation from './Navigation/Side-Navigation.vue';
// import SystemPartial from './Notification/SystemPartial.vue';
import { Bars4Icon } from '@heroicons/vue/24/outline'
import {ref} from 'vue';


const sideNavigation = ref(false)
const openSideNavigation = () => {
    sideNavigation.value = !sideNavigation.value
}
const closeSideNavigation = () => {
    sideNavigation.value = false
}

</script>