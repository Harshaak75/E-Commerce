import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux"
import { Store, persistor } from './Components/Schema/Store.js'

import HomePageBuyer from './Components/Buyer/HomePageBuyer.jsx'
import SigninPage from './Components/Pages/SigninPage.jsx'
import LoginPages from './Components/Pages/LoginPages.jsx'
import SigninSeller from './Components/Seller/SigninSeller.jsx'
import Home from './Components/Seller/Home Page/Home.jsx'
import LoginSeller from './Components/Seller/LoginSeller.jsx'
import AddProductPage from './Components/Seller/AddProductPage.jsx'
import Addtocart from './Components/Buyer/Addtocart.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// routes to access the diffrent components

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePageBuyer />
      },
      {
        path: "/createAccount",
        element: <SigninPage />
      },
      {
        path: "/loginUser",
        element: <LoginPages />
      },
      {
        path:"/CreateSellerAccount",
        element: <SigninSeller/>
      },
      {
        path: "/Home",
        element: <Home />
      },
      {
        path: "/loginSellerAccount",
        element: <LoginSeller/>
      },
      {
        path:"/addproductdetails",
        element:<AddProductPage/>
      },
      {
        path:"/addtoCart",
        element: <Addtocart/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
