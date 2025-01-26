import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from './components/Navbar'
import MyContextAPI from './store/MyContextAPI'
import Home from "./components/Home"
import Itemdesc from "./components/Itemdesc"
import CartItems from "./components/CartItems"

const App = () => {
  let route = createBrowserRouter(
    [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/card/:id',
        element:<Itemdesc/>
      },
      {
        path:'/cartitems',
        element:<CartItems/>
      }
    ]
  )
  return (
    <RouterProvider router={route}> 
   <MyContextAPI>
   </MyContextAPI>
    </RouterProvider>
  )
}

export default App