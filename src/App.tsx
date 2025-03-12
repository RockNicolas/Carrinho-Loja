import { createBrowserRouter } from 'react-router-dom'
import { Home } from './Pages/Home/home'
import { Cart } from './Pages/Cart/cart'
import { Layout } from './Components/Layout/Layout'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
])