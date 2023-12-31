<template>
        <TransitionRoot
        as="div"
        :show="state"
        enter="transition ease-in-out duration-300"
        enter-from="-translate-x-full"
        enter-to="translate-x-0"
        leave="transition ease-in-out duration-300"
        leave-from="translate-x-0"
        leave-to="-translate-x-full"
        >
            <div class="absolute top-0 left-0 flex flex-col h-screen backdrop-blur-sm bg-green-100/70">
                <div class="h-24"> 
                    <div class="flex justify-between p-5 bg-white border border-slate-200">
                        <div>
                            <div>
                                <h1>Manie Botha</h1>
                            </div>
                            <div>
                                <h1 class="text-sm text-slate-400 ">manie@wowsoftware.co.za</h1>
                            </div>
                        </div>
                        <div>
                            <XMarkIcon class="h-6 duration-150 text-slate-400 hover:text-slate-600" @click="closeSideNavigation()"/>
                        </div>
                    </div>

                </div>
                <div class="flex-1">
                    <div class="flex flex-col">
                        <Menu v-for="navItem, index in SideNav" :key="index" >
                            <MenuButton class="p-2 mr-2 duration-200 bg-lime-300 hover:bg-lime-400 hover:mr-0 hover:shadow-lg">
                                        {{navItem.name}}
                            </MenuButton>
                            <MenuItems class="flex flex-col">
                                <MenuItem as='a' v-for="submenu, index in navItem.sub" :key="index" href="#" class="p-2 mr-2 duration-200 bg-slate-300 hover:bg-slate-400 hover:mr-0">{{ submenu.name }}</MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>
        </TransitionRoot>
        <!-- <div class="flex items-center h-full text-3xl"><button @click="closeMenu" type="button" class="w-full px-2 py-1 text-xs font-semibold text-white bg-indigo-600 rounded shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Open Menu</button></div> -->
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue'
  import { TransitionRoot } from '@headlessui/vue'
  import { XMarkIcon } from '@heroicons/vue/24/outline'
  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
  
  defineProps({
    state: {
        type: Boolean,
    }
  })
  const SideNav = [
    {name: 'Menu', sub: [
        {
            name: 'Menu 2'
        },
        {
            name: 'Menu 2'
        },
    ]},
    {name: 'Menu', sub: [
        {
            name: 'Menu 2'
        },
        {
            name: 'Menu 2'
        },
    ]},
    {name: 'Menu', sub: [
        {
            name: 'Menu 2'
        },
        {
            name: 'Menu 2'
        },
    ]},
  ]
const emit = defineEmits(['sideNavigation:close'])
const closeSideNavigation = () => {
    emit('sideNavigation:close')
}
  
  </script>
  