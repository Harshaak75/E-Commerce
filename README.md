# E-Commerce application Rest API with user authentication

This project is a simple e-commerce application built using Node.js, Express.js, PostgreSQL, and React. It features user authentication, seller and buyer functionalities, and is deployed on Render Cloud. The application allows users to sign up and log in as either sellers or buyers, manage products, and perform various actions like adding to cart.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Frontend**: React, GSAP (for animations)
- **Deployment**: Render Cloud


## Features

### User Authentication
- **Sign Up**: Users can create an account as either a seller or a buyer.
- **Login**: Users can log in to their accounts.

### Seller Functionality
- **Add Products**: Sellers can add products with details including name, category, description, price, and discount.
- **Edit Products**: Sellers can update the details of their products.
- **Delete Products**: Sellers can remove products from their inventory.

### Buyer Functionality
- **Search Products**: Buyers can search for products by name or category.
- **Add to Cart**: Buyers can add products to their cart.
- **Remove from Cart**: Buyers can remove products from their cart.

## API Documentation

### User Endpoints

- **Create Account**
  - `POST /api/createAccount`
  - Body: `{ "username": "string", "password": "string", "role": "seller" | "buyer" }`
  - Description: Create a new user account.

- **Login User**
  - `POST /api/loginUser`
  - Body: `{ "username": "string", "password": "string" }`
  - Description: Log in a user and return a token.

### Seller Endpoints

- **Create Seller Account**
  - `POST /api/createSellerAccount`
  - Body: `{ "username": "string", "password": "string" }`
  - Description: Create a new seller account.

- **Login Seller**
  - `POST /api/loginSeller`
  - Body: `{ "username": "string", "password": "string" }`
  - Description: Log in a seller and return a token.

- **Check Seller**
  - `POST /api/checkSeller`
  - Description: Verify if the logged-in user is a seller.

### Product Endpoints

- **Get Products**
  - `GET /api/getProducts`
  - Description: Retrieve a list of products.

- **Delete Product**
  - `DELETE /api/DeleteProduct/:id`
  - Params: `id` (product ID)
  - Description: Delete a product by its ID.

- **Update Product**
  - `PUT /api/UpdateProduct/:id`
  - Params: `id` (product ID)
  - Body: `{ "name": "string", "category": "string", "description": "string", "price": "number", "discount": "number" }`
  - Description: Update the details of a product.


  
