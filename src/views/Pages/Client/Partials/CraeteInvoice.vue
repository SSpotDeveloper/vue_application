<template>
    <div class="container mx-auto mt-8 flex justify-center">
      <div class="bg-white p-8 rounded-md shadow-md w-full sm:w-3/4 lg:w-2/3 xl:w-1/2">
        <h2 class="text-2xl font-semibold mb-4 text-center">Add Invoice</h2>
        <div class="mb-4 md:w-1/3 md:mr-4">
              <label for="orderDate" class="block text-sm font-medium text-gray-600">Customer</label>
              <input type="text" id="orderDate" name="orderDate" class="mt-1 p-2 border rounded-md w-full" />
            </div>
            <div class="mb-4 md:w-1/3 md:mr-4">
              <label for="orderDate" class="block text-sm font-medium text-gray-600">Customer Site</label>
              <input type="text" id="orderDate" name="orderDate" class="mt-1 p-2 border rounded-md w-full" />
            </div>
        <form class="grid grid-cols-2 gap-8">
          
          <div class="mb-4 col-span-2 md:flex md:items-center">
            <div class="mb-4 md:w-1/3 md:mr-4">
              <label for="orderDate" class="block text-sm font-medium text-gray-600">Order Date</label>
              <input type="date" id="orderDate" name="orderDate" class="mt-1 p-2 border rounded-md w-full" />
            </div>
  
            <div class="mb-4 md:w-1/3 md:mr-4">
              <label for="deliveryDate" class="block text-sm font-medium text-gray-600">Delivery Date</label>
              <input type="date" id="deliveryDate" name="deliveryDate" class="mt-1 p-2 border rounded-md w-full" />
            </div>
  
            <div class="mb-4 md:w-1/3">
              <label for="status" class="block text-sm font-medium text-gray-600">Status</label>
              <input type="text" id="status" name="status" class="mt-1 p-2 border rounded-md w-full" />
            </div>
          </div>
  
          <div class="mb-4 col-span-2 md:flex md:items-center">
            <div class="mb-4 md:w-1/2 md:mr-4">
              <label for="priority" class="block text-sm font-medium text-gray-600">Priority</label>
              <select id="priority" name="priority" class="mt-1 p-2 border rounded-md w-full">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
  
            <div class="mb-4 md:w-1/2">
              <label for="salesPerson" class="block text-sm font-medium text-gray-600">Sales Person</label>
              <input type="text" id="salesPerson" name="salesPerson" class="mt-1 p-2 border rounded-md w-full" />
            </div>
          </div>
          
          <div class="mb-4 col-span-2 md:flex md:items-center">
            <div class="mb-4 md:w-1/4 md:mr-4">
              <label for="orderedBy" class="block text-sm font-medium text-gray-600">Ordered By</label>
              <input type="text" id="orderedBy" name="orderedBy" class="mt-1 p-2 border rounded-md w-full" />
            </div>
  
            <div class="mb-4 md:w-1/4 md:mr-4">
              <label for="custOrdNr" class="block text-sm font-medium text-gray-600">Cust Ord Nr</label>
              <input type="text" id="custOrdNr" name="custOrdNr" class="mt-1 p-2 border rounded-md w-full" />
            </div>
  
            <div class="mb-4 md:w-1/4 md:mr-4">
              <label for="despatchMode" class="block text-sm font-medium text-gray-600">Despatch Mode</label>
              <input type="text" id="despatchMode" name="despatchMode" class="mt-1 p-2 border rounded-md w-full" />
            </div>
  
            <div class="mb-4 md:w-1/4">
              <label for="contact" class="block text-sm font-medium text-gray-600">Contact</label>
              <input type="text" id="contact" name="contact" class="mt-1 p-2 border rounded-md w-full" />
            </div>
  
            
          </div>
  
          <div class="mb-4 col-span-2 md:flex md:items-center">
            <div class="mb-4 md:w-1/2 md:mr-4">
              <label for="internationalNrs" class="block text-sm font-medium text-gray-600">International Nrs</label>
              <input type="checkbox" id="internationalNrs" name="internationalNrs" class="mt-1" />
            </div>
            <div class="mb-4 md:w-1/3 md:mr-4">
              <label for="telephone" class="block text-sm font-medium text-gray-600">Telephone</label>
              <input type="tel" id="telephone" name="telephone" class="mt-1 p-2 border rounded-md w-full" />
            </div>
  
            <div class="mb-4 md:w-1/3 md:mr-4">
              <label for="fax" class="block text-sm font-medium text-gray-600">Fax</label>
              <input type="text" id="fax" name="fax" class="mt-1 p-2 border rounded-md w-full" />
            </div>
  
            <div class="mb-4 md:w-1/3">
              <label for="cell" class="block text-sm font-medium text-gray-600">Cell</label>
              <input type="text" id="cell" name="cell" class="mt-1 p-2 border rounded-md w-full" />
            </div>
          </div>
  
          
          <div class="mb-4 col-span-2 md:flex md:items-center">
            <div class="mb-4 md:w-1/2 md:mr-4">
              <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
              <input type="email" id="email" name="email" class="mt-1 p-2 border rounded-md w-full" />
            </div>
  
            <div class="mb-4 md:w-1/2">
              <label for="complexBusinessPark" class="block text-sm font-medium text-gray-600">Complex/Business Park</label>
              <input type="text" id="complexBusinessPark" name="complexBusinessPark" class="mt-1 p-2 border rounded-md w-full" />
            </div>
          </div>
  
         
          <div class="mb-4 col-span-2 md:flex md:items-center">
            <div class="mb-4 md:w-1/3 md:mr-4">
              <label for="unitNr" class="block text-sm font-medium text-gray-600">Unit Nr</label>
              <input type="text" id="unitNr" name="unitNr" class="mt-1 p-2 border rounded-md w-full" />
            </div>
  
            <div class="mb-4 md:w-1/3 md:mr-4">
              <label for="streetAddress" class="block text-sm font-medium text-gray-600">Street Address</label>
              <input type="text" id="streetAddress" name="streetAddress" class="mt-1 p-2 border rounded-md w-full" />
            </div>
  
            <div class="mb-4 md:w-1/3">
              <label for="suburb" class="block text-sm font-medium text-gray-600">Suburb</label>
              <input type="text" id="suburb" name="suburb" class="mt-1 p-2 border rounded-md w-full" />
            </div>
          </div>
  
          <div class="mb-4 col-span-2 md:flex md:items-center">
            <div class="mb-4 md:w-1/2 md:mr-4">
              <label for="city" class="block text-sm font-medium text-gray-600">City</label>
              <input type="text" id="city" name="city" class="mt-1 p-2 border rounded-md w-full" />
            </div>
  
            <div class="mb-4 md:w-1/2">
              <label for="deliveryArea" class="block text-sm font-medium text-gray-600">Delivery Area</label>
              <input type="text" id="deliveryArea" name="deliveryArea" class="mt-1 p-2 border rounded-md w-full" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <style scoped>
    
  </style>
  