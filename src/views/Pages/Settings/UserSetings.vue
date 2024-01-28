<template>
<div>
    <div>
        <h1 class="tetx-lg">Users</h1>
        <div class="flex justify-end">
            <button class="bg-lime-400 hover:bg-lime-300 rounded-lg p-3" @click="AddEmployeeModalToggle()">Add Employee</button>
        </div>
    </div>
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