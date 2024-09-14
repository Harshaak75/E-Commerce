import axios from 'axios'


// to get the products from database

export const fetchProduct = async () => {
    try {
      const response = await axios.get("https://e-commerce-frontend-klxu.onrender.com/api/user/getProducts")

      console.log(response.data.products[0].image)
      return response.data.products
    } catch (error) {
      console.log("error in product", error)
    }

    
  }