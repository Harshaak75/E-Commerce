import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateForm({ product, onUpdate, onClose }) {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  // Use Effect to sync changes to props if the passed product changes
  useEffect(() => {
    setUpdatedProduct(product);
  }, [product]);

  // Handle input changes and update the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({
      ...updatedProduct,
      [name]: value,  // Update the specific field being changed
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://e-commerce-backend-1k7q.onrender.com/api/user/Updateproduct/${updatedProduct.id}`, updatedProduct);
      window.location.reload();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
   

    <section class="bg-white dark:bg-gray-900 ">
       {/* <form onSubmit={handleSubmit}> */}
  <div class="max-w-2xl px-4 py-8 mx-auto lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update product</h2>
      <form onSubmit={handleSubmit}>
          <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                  <input type="text" name="name" id="name" value={updatedProduct.name} onChange={handleChange}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
              </div>
              <div class="w-full">
                  <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                  <input type="number" name="price" value={updatedProduct.price} onChange={handleChange} id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""/>
              </div>
              <div class="w-full">
                  <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ratings</label>
                  <input type="number" name="ratings" value={updatedProduct.ratings} onChange={handleChange} id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$299" required=""/>
              </div>

              <div>
                  <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discount</label>
                  <input type="number"name="discount" value={updatedProduct.discount} onChange={handleChange} id="item-weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ex. 12" required=""/>
              </div> 
              <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="description" name="description" value={updatedProduct.description} onChange={handleChange} rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write a product description here...">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US</textarea>
              </div>
          </div>
          <div class="flex items-center space-x-4">
              <button type="submit" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Update product
              </button>
              <button type="button" onClick={onClose} class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                  Close
              </button>
          </div>
      </form>
  </div>
  {/* </form> */}
</section>

  );
}

export default UpdateForm;
