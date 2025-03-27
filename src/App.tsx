import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home/home'
import { Cart } from './pages/cart/cart'
import { Layout } from './components/layout/Layout'


const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ]
  }
])

export { router };