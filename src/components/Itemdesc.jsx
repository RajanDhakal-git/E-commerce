import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMyconext } from '../store/MyContextAPI'

const Itemdesc = () => {
  const [product, setproduct] = useState({})
  const [currindex, setcurrindex] = useState(0)
  let navi = useNavigate()
  let {id} = useParams()
  let {handleonclick} = useMyconext()
  console.log(id)
  let getitemdata = async () => {
    let data = (await fetch(`https://api.escuelajs.co/api/v1/products/${id}`))
    let new_value = await data.json()
    setproduct(new_value)
  }
  let {title , images , price , description} = product

  useEffect(() => {
    getitemdata(id)
  }, [])

  return (
    <div className=''>
        <div className='grow  mx-auto p-10'>
  
      <div className='flex justify-center items-center  gap-4 mt-32'>

        <div className='border-r-4  w-[20vh] flex flex-col gap-4 justify-center px-3'>
          { images?.length &&  images.map((item,indx)=>{
            return <div className='border  h-20 w-20' key={indx}><img onClick={(e)=> setcurrindex(e.target.id)} id={indx} src={item} alt="" /></div>
          })}
        </div>


        <div className='flex  justify-center items-center gap-5 '>
          <div className='border-2   '>
            <img src={ images?.length && images[currindex]} className='object-cover h-[100%] w-[100%]' alt="" />
          </div>
          <div className='flex flex-col gap-4  '>
            <div>{title}</div>
            <div>Price : ${price}</div>
            <div className='w-1/2'>{description}</div>
            <div> <button onClick={handleonclick} className='px-5 pyp-2 bg-orange-300 rounded-md text-white'>Add to card</button></div>
            <div> <button onClick={()=> navi('/')} className='px-5 pyp-2 bg-orange-300 rounded-md text-white'>Go Back</button></div>
          </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Itemdesc