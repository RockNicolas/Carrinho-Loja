import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home/home'
import { Cart } from './pages/Cart/cart'
import { Layout } from './components/Layout/Layout'

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