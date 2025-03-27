import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home/home'
import { Cart } from './pages/Cart/cart'
import { Layout } from './components/Layout/Layout'
import { ProductDetail } from './details/Details'


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
      },
      {
        path: "/product/:id",
        element: <ProductDetail/>
      }
    ]
  }
])

export { router };