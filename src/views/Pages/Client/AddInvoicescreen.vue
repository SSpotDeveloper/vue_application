<template>
    <h1 class="text-3xl font-semibold mb-6 text-center">Invoices</h1>
   <div class="h-screen bg-gray-100">
     
     <div class="p-6">
       
       <div class="flex justify-between items-center mb-6">
        
         <div class="flex items-center space-x-4">
           <label for="filter" class="text-sm">Filter:</label>
           <select
             id="filter"
             class="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
           >
             <option value="all">All</option>
             <option value="paid">Paid</option>
             <option value="unpaid">Unpaid</option>
            
           </select>
         </div>
 
         <div class="flex space-x-4">
           <button
             class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-Green-600 transition duration-300"
           >
             Add
           </button>
           <button
             class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
           >
             Delete
           </button>
         </div>
       </div>
 
      
       <div class="mb-6 text-center">
         <input
           type="text"
           placeholder="Search for an invoice..."
           class="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
         />
       </div>
 
       <table class="w-full bg-white border-collapse overflow-hidden rounded-md shadow-lg">
         <thead class="bg-gray-200">
           <tr>
             <th class="border-b p-4 text-left">Invoice Number</th>
             <th class="border-b p-4 text-left">Customer Name</th>
             <th class="border-b p-4 text-left">Amount</th>
             <th class="border-b p-4 text-left">Date</th>
             <th class="border-b p-4 text-left">Actions</th>
           </tr>
         </thead>
 
         
         <tbody>
           <tr
             v-for="invoice in invoices"
             :key="invoice.id"
             class="hover:bg-gray-100 transition duration-300"
           >
             <td class="border-b p-4">{{ invoice.invoiceNumber }}</td>
             <td class="border-b p-4">{{ invoice.customerName }}</td>
             <td class="border-b p-4">{{ invoice.amount }}</td>
             <td class="border-b p-4">{{ invoice.date }}</td>
             <td class="border-b p-4">
               <button
                 class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300"
               >
                 Edit
               </button>
               
             </td>
           </tr>
         </tbody>
       </table>
     </div>
   </div>
 </template>
 
 <script setup>
 import { ref } from 'vue';
 
 const invoices = ref([
   { id: 1, invoiceNumber: 'INV001', customerName: 'Erich Lorenz', amount: 100.0, date: '2023-01-01' },
   { id: 2, invoiceNumber: 'INV002', customerName: 'Erich Lorenz', amount: 150.0, date: '2023-01-02' },
   { id: 3, invoiceNumber: 'INV003', customerName: 'Erich Lorenz', amount: 200.0, date: '2023-01-03' },
  
 ]);
 </script>