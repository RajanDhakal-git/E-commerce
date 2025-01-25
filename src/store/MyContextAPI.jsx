import React, { createContext, useContext, useEffect, useState } from 'react'
export const MyContext = createContext()

const MyContextAPI = ({ children }) => {
    const getData = async () => {
        let data = (await fetch('https://api.escuelajs.co/api/v1/products'))
        let new_value = await data.json()
        setAllproducts(new_value)
    }
   useEffect(() => {
     getData()
   }, [])

   const [cartitems, setcartitems] = useState(0)
    const [Allproducts, setAllproducts] = useState([])
    let handleonclick = ()=>{
        setcartitems(prev=> prev+1)
    }
    return (
        <MyContext.Provider value={{ Allproducts , cartitems , setcartitems , handleonclick }}>
            <div>{children}</div>
        </MyContext.Provider>
    )
}

export const useMyconext = () => {
    return useContext(MyContext)
}
export default MyContextAPI