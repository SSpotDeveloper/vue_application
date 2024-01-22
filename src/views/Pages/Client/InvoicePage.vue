<template>
    <h1 class="mb-6 text-3xl font-semibold text-center">Invoices</h1>
   <div class="bg-gray-100">
     
     <div class="p-6">
       
       <div class="flex items-center justify-between mb-6">
        
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
             class="px-4 py-2 text-white transition duration-300 bg-green-500 rounded-md hover:bg-Green-600"
           >
             Add
           </button>
           <button
             class="px-4 py-2 text-white transition duration-300 bg-red-500 rounded-md hover:bg-red-600"
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
 
       <table class="w-full overflow-hidden bg-white border-collapse rounded-md shadow-lg">
         <thead class="bg-gray-200">
           <tr>
             <th class="p-4 text-left border-b">Invoice Number</th>
             <th class="p-4 text-left border-b">Customer Name</th>
             <th class="p-4 text-left border-b">Amount</th>
             <th class="p-4 text-left border-b">Date</th>
             <th class="p-4 text-left border-b">Actions</th>
           </tr>
         </thead>
 
         
         <tbody>
           <tr
             v-for="invoice in invoices"
             :key="invoice.id"
             class="transition duration-300 hover:bg-gray-100"
           >
             <td class="p-4 border-b">{{ invoice.invoiceNumber }}</td>
             <td class="p-4 border-b">{{ invoice.customerName }}</td>
             <td class="p-4 border-b">{{ invoice.amount }}</td>
             <td class="p-4 border-b">{{ invoice.date }}</td>
             <td class="p-4 border-b">
               <button
                 class="px-4 py-2 text-white transition duration-300 bg-yellow-500 rounded-md hover:bg-yellow-600"
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