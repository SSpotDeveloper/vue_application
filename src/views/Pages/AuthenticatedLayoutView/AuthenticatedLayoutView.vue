<template>
  <div class="flex h-screen">
    <div class="w-1/6 h-full border-r bg-slate-700 border-slate-300">
      <div class="flex bg-white border-b justify-evenly border-slate-300">
        <div>
          <img src="https://lh5.googleusercontent.com/neuvA-va9SIxE6g-9P9MJ2teQiKryehW0lTt3dmpGLYvfSVrYNCEkpK0k_t1nvyC96I7UolsJBflx1TmPDQUKWLyOIMwdp7FbixSPYoAYTsAwJYaaXha0vL6Ll0-MWKcNts36ZNdAJtng0YfZizg8BQ" alt="Vue" class="h-12 m-1"/>
        </div>
        <div>
          <h1 class="text-xl">KFC</h1>
          <h1 class="text-sm text-slate-400">Manie Botha</h1>
        </div>
      </div>
      <div>
        <Menu as="ul" class="pt-1 space-y-1">
          <MenuButton as="li" class="p-1.5 text-center duration-200 rounded-lg bg-slate-50 hover:bg-lime-200 hover:py-2">
            Stock Management  
          </MenuButton>
          <MenuItems as="ul" class="p-3 space-y-1">
              <MenuItem>
                <li class="p-1.5 text-center duration-200 rounded-lg bg-slate-50">
                  Stock
                </li>
              </MenuItem>
              <MenuItem>
                <li class="p-1.5 text-center duration-200 rounded-lg bg-slate-50">
                  Stock
                </li>
              </MenuItem>
          </MenuItems>
        </Menu>
        <Menu as="ul" class="pt-1 space-y-1">
          <MenuButton as="li" class="p-1.5 text-center duration-200 rounded-lg bg-slate-50 hover:bg-lime-200 hover:py-2">
            Stock Management  
          </MenuButton>
          <MenuItems as="ul" class="p-3 space-y-1">
              <MenuItem>
                <li class="p-1.5 text-center duration-200 rounded-lg bg-slate-50">
                  Stock
                </li>
              </MenuItem>
              <MenuItem>
                <li class="p-1.5 text-center duration-200 rounded-lg bg-slate-50">
                  Stock
                </li>
              </MenuItem>
          </MenuItems>
        </Menu>
        <Menu as="ul" class="pt-1 space-y-1">
          <MenuButton as="li" class="p-1.5 text-center duration-200 rounded-lg bg-slate-50 hover:bg-lime-200 hover:py-2">
            Stock Management  
          </MenuButton>
          <MenuItems as="ul" class="p-3 space-y-1">
              <MenuItem>
                <li class="p-1.5 text-center duration-200 rounded-lg bg-slate-50">
                  Stock
                </li>
              </MenuItem>
              <MenuItem>
                <li class="p-1.5 text-center duration-200 rounded-lg bg-slate-50">
                  Stock
                </li>
              </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/vue'
</script>

