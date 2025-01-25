import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from './components/Navbar'
import MyContextAPI from './store/MyContextAPI'
import Home from "./components/Home"
import Itemdesc from "./components/Itemdesc"

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
      }
    ]
  )
  return (
   <MyContextAPI>
     <Navbar />
    <RouterProvider router={route}> 
    </RouterProvider>
   </MyContextAPI>
  )
}

export default App