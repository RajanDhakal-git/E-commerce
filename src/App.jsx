import { createBrowserRouter, RouterProvider } from "react-router-dom"

import MyContextAPI from './store/MyContextAPI'
import Home from "./components/Home"

const App = () => {
  let route = createBrowserRouter(
    [
      {
        path:'/',
        element:<Home/>
      }
    ]
  )
  return (
   <MyContextAPI>
    <RouterProvider router={route}> 
    </RouterProvider>
   </MyContextAPI>
  )
}

export default App