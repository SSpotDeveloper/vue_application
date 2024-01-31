<template>
<div>
    <div>
        <h1 class="tetx-lg">Users</h1>
        <div class="flex justify-end">
            <button class="bg-lime-400 hover:bg-lime-300 rounded-lg p-3" @click="AddEmployeeModalToggle()">Add Employee</button>
        </div>
    </div>
</div>


  <div class="w-full bg-slate-50">
    <div class="flex justify-center py-3">
      <div class="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white rounded-full shadow-md px-4 py-2 flex items-center">
        <input type="text" placeholder="Search..." class="w-full outline-none placeholder-gray-400">
      </div>
    </div>
    <ul class="p-3">
      <li class="px-5 py-3 border-y border-slate-200 hover:bg-slate-100 hover:drop-shadow-lg hover:scale-105 hover:px-5 duration-200">
        <div class="flex justify-between">
          <div class="flex items-center">
            <div class="w-12 h-12 rounded-full overflow-hidden">
              <img src="https://m.media-amazon.com/images/M/MV5BMTIzNTE1ODQ5MV5BMl5BanBnXkFtZTcwMTcwNzMzMQ@@._V1_UY256_CR16,0,172,256_AL_.jpg" alt="Company Logo" class="w-full h-full object-cover">
            </div>
            <div class="ml-4">
              <div class="text-slate-500">
                <span>Manie Botha</span>
              </div>
              <div class="text-slate-400 text-sm">
                <span>manie@softspot.co.za</span>
              </div>
            </div>
          </div>
          <div>
            <div class="text-slate-500 text-md">
              <span>Manager</span>
            </div>
            <div class="text-slate-500 text-sm">
              084 0381 9424
            </div>
          </div>
        </div>
      </li>

      <li class="px-5 py-3 border-y border-slate-200 hover:bg-slate-100 hover:drop-shadow-lg hover:scale-105 hover:px-5 duration-200">
        <div class="flex justify-between">
          <div class="flex items-center">
            <div class="w-12 h-12 rounded-full overflow-hidden">
              <img src="https://m.media-amazon.com/images/M/MV5BMTIzNTE1ODQ5MV5BMl5BanBnXkFtZTcwMTcwNzMzMQ@@._V1_UY256_CR16,0,172,256_AL_.jpg" alt="Company Logo" class="w-full h-full object-cover">
            </div>
            <div class="ml-4">
              <div class="text-slate-500">
                <span>Manie Botha</span>
              </div>
              <div class="text-slate-400 text-sm">
                <span>manie@softspot.co.za</span>
              </div>
            </div>
          </div>
          <div>
            <div class="text-slate-500 text-md">
              <span>Manager</span>
            </div>
            <div class="text-slate-500 text-sm">
              084 0381 9424
            </div>
          </div>
        </div>
      </li>

      <li class="px-5 py-3 border-y border-slate-200 hover:bg-slate-100 hover:drop-shadow-lg hover:scale-105 hover:px-5 duration-200">
        <div class="flex justify-between">
          <div class="flex items-center">
            <div class="w-12 h-12 rounded-full overflow-hidden">
              <img src="https://m.media-amazon.com/images/M/MV5BMTIzNTE1ODQ5MV5BMl5BanBnXkFtZTcwMTcwNzMzMQ@@._V1_UY256_CR16,0,172,256_AL_.jpg" alt="Company Logo" class="w-full h-full object-cover">
            </div>
            <div class="ml-4">
              <div class="text-slate-500">
                <span>Manie Botha</span>
              </div>
              <div class="text-slate-400 text-sm">
                <span>manie@softspot.co.za</span>
              </div>
            </div>
          </div>
          <div>
            <div class="text-slate-500 text-md">
              <span>Manager</span>
            </div>
            <div class="text-slate-500 text-sm">
              084 0381 9424
            </div>
          </div>
        </div>
      </li>

     
    </ul>
  </div>

<AddEmployee :state="addEmployeeModalState" @modal:state="AddEmployeeModalToggle"/>
</template>
<script setup>
import {ref} from 'vue';
import AddEmployee from './Partials/AddEmployee.vue';

const addEmployeeModalState = ref(false);

const AddEmployeeModalToggle = () => {
    addEmployeeModalState.value = !addEmployeeModalState.value
}

</script>