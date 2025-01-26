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
    const [itemlist, setitemlist] = useState([])
    let handleonclick = (...alldata)=>{
       
        setitemlist(prev=>[ ...prev ,{ productId:alldata[0],
            productname:alldata[3],
            productphoto: alldata[2]?.length && alldata[2][0],
            productprice:alldata[1]}])
        setcartitems(prev=> prev+1)
    }
    return (
        <MyContext.Provider value={{ Allproducts , cartitems , setcartitems , handleonclick,itemlist  }}>
            <div>{children}</div>
        </MyContext.Provider>
    )
}

export const useMyconext = () => {
    return useContext(MyContext)
}
export default MyContextAPI