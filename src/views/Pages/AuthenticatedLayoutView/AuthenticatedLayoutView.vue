<template>
    <SideNavigation :state="sideNavigation" @sideNavigation:close="closeSideNavigation()" />
    <nav class="flex justify-between p-5 bg-white shadow-lg">
        <div>
            <Bars4Icon class="h-6 text-slate-600" @click="openSideNavigation()"/>
        </div>
        <div class="flex space-x-3">
            <div class="relative px-2 rounded-md bg-lime-300">
                Transactions
                <span class="absolute w-2 h-2 rounded-full -top-1 -right-1 bg-sky-600 animate-ping"></span>
                <span class="absolute w-2 h-2 rounded-full -top-1 -right-1 bg-sky-600"></span>
            </div>
            <div class="relative px-2 rounded-md bg-lime-300">
                Notifications
                <span class="absolute w-2 h-2 rounded-full -top-1 -right-1 bg-sky-600 animate-ping"></span>
                <span class="absolute w-2 h-2 rounded-full -top-1 -right-1 bg-sky-600"></span>
            </div>
        </div>
        <div>
            <img src="https://logo.com/image-cdn/images/kts928pd/production/b76978004c62f2b4cb9a8dfd73448c5a63988fd2-1600x1598.png?w=1080&q=72" alt="Company Logo" class="h-6 rounded-full">
        </div>
    </nav>
</template>

<script setup>
import SideNavigation from './Navigation/Side-Navigation.vue';
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