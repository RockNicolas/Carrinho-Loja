import React from 'react'
import ReactDOM from 'react-dom/client'
import {router} from './App'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import  CartProvider  from './context/CartContext'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <RouterProvider router={router}/>
    </CartProvider>
  </React.StrictMode>,
)
