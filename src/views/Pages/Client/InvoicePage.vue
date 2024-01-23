<!-- <template>
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
 </template> -->
 <template>
  <div class="p-5 md:p-2">
    <h1 class="text-lg text-center">Invoices</h1>
  </div>
  <div class="p-2">
    <div class="flex justify-between">
      <div>
        <div class="my-2">
          <div>
            <h1 class="p-2">Filter</h1>
          </div>
          <div class="flex space-x-1">
            <div>
              <div>
                <label for="type">Type</label>
              </div>
              <select v-model="selected" class="p-2 border rounded-md border-slate-300">
                <option value="All" selected>All</option>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
              </select>
            </div>
            <div>
              <div>
                <label for="year">Year</label>
              </div>
              <select v-model="selectedYear" class="p-2 border rounded-md border-slate-300">
                <option value="All" selected>Select All Years</option>
                <option v-for="year in uniqueYears" :key="year" :value="year">{{ year }}</option>
              </select>
            </div>
            <div>
              <div>
                <label for="month">Month</label>
              </div>
              <select v-model="selectedMonth" class="p-2 border rounded-md border-slate-300">
                <option value="All" selected>All</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
            <div>
              <div>
                <label for="search">Search</label>
              </div>
              <input v-model="searchTerm" type="text" class="p-1.5 border rounded-md border-slate-300" placeholder="Invoice Number">
            </div>
          </div>
        </div>
      </div>
      <div>
        <button class="p-2 duration-150 rounded-md bg-lime-500 hover:bg-lime-400">Add New Invoice</button>
      </div>
    </div>
    <div>
      <table class="w-full shadow-lg">
        <thead class="bg-lime-300">
          <tr>
            <th class="py-2">Invoice Number</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="invoice, index in filteredInvoices" :key="index" class="text-center border-y border-slate-300 hover:bg-slate-300" :class="{'bg-red-100' : invoice.status === 'Unpaid', 'bg-green-100' : invoice.status === 'Paid'}">
            <td class="px-1 py-2">{{invoice.invoiceNumber}}</td>
            <td>{{invoice.customerName}}</td>
            <td>{{invoice.date}}</td>
            <td>R {{invoice.amount}}</td>
            <td>{{invoice.status}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, computed, onMounted } from 'vue';

const selected = ref('All');
const selectedYear = ref('All');
const selectedMonth = ref('All');
const searchTerm = ref('');

const invoices = ref([
   { id: 1, invoiceNumber: 'INV001', customerName: 'Erich Lorenz', amount: 100.0, date: '2020-01-01', status: 'Paid' },
   { id: 2, invoiceNumber: 'INV002', customerName: 'Erich Lorenz', amount: 150.0, date: '2023-01-02', status: 'Paid' },
   { id: 3, invoiceNumber: 'INV003', customerName: 'Erich Lorenz', amount: 200.0, date: '2023-01-03', status: 'Unpaid' },
   { id: 1, invoiceNumber: 'INV001', customerName: 'Erich Lorenz', amount: 100.0, date: '2023-01-01', status: 'Paid' },
   { id: 2, invoiceNumber: 'INV002', customerName: 'Erich Lorenz', amount: 150.0, date: '2023-01-02', status: 'Paid' },
   { id: 3, invoiceNumber: 'INV003', customerName: 'Erich Lorenz', amount: 200.0, date: '2015-01-03', status: 'Unpaid' },
   { id: 1, invoiceNumber: 'INV001', customerName: 'Erich Lorenz', amount: 100.0, date: '2023-01-01', status: 'Paid' },
   { id: 2, invoiceNumber: 'INV002', customerName: 'Erich Lorenz', amount: 150.0, date: '2023-01-02', status: 'Paid' },
   { id: 3, invoiceNumber: 'INV003', customerName: 'Erich Lorenz', amount: 200.0, date: '2023-01-03', status: 'Unpaid' },
   { id: 1, invoiceNumber: 'INV001', customerName: 'Erich Lorenz', amount: 100.0, date: '2023-01-01', status: 'Paid' },
   { id: 2, invoiceNumber: 'INV002', customerName: 'Erich Lorenz', amount: 150.0, date: '2023-01-02', status: 'Paid' },
   { id: 3, invoiceNumber: 'INV003', customerName: 'Erich Lorenz', amount: 200.0, date: '2023-01-03', status: 'Unpaid' },
  
]);


const uniqueYears = computed(() => {
  const years = new Set();
  invoices.value.forEach(invoice => {
    const year = new Date(invoice.date).getFullYear();
    years.add(year);
  });
  return ['All', ...Array.from(years)];
});

const filter = (invoice) => {
  const statusFilter = selected.value === 'All' || invoice.status === selected.value;
  const yearFilter = selectedYear.value === 'All' || (selectedYear.value === 'Select All Years' ? true : new Date(invoice.date).getFullYear() === parseInt(selectedYear.value));
  const monthFilter = selectedMonth.value === 'All' || new Date(invoice.date).toLocaleString('default', { month: 'long' }) === selectedMonth.value;
  const searchFilter = !searchTerm.value || invoice.invoiceNumber.toLowerCase().includes(searchTerm.value.toLowerCase());

  return statusFilter && yearFilter && monthFilter && searchFilter;
};

const filteredInvoices = computed(() => {
  return invoices.value.filter(invoice => filter(invoice.status));
})
</script>
