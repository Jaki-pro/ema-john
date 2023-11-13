import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home/Home.jsx';
import Shop from './components/Shop/Shop.jsx';
import Orders from './components/Orders/Orders.jsx';
import Product from './components/Product/Product.jsx';
import cartLoader from './loaders/cartProductsloaders.js';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<h2>Ohh You are shopping here! Welcome</h2>
      },
      {
        path:'shop',
        element: <Shop></Shop>
      },
      {
        path:'order',
        element: <Orders></Orders>,
        loader: cartLoader
      },
      {
        path:'inventory',
        element: <h3>Coming Soon</h3>
      },
      {
        path:'login',
        element: <h3>Coming Soon</h3>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
