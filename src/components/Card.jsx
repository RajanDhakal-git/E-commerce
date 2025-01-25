import React from 'react'
import { useMyconext } from '../store/MyContextAPI'

const Card = ({title , price , desc , photo}) => {
    let {setcartitems} = useMyconext()
    let handleonclick = ()=>{
        setcartitems(prev => prev+1)
    }
  return (
    <div className='shadow-lg px-8 py-5 bg-white rounded flex flex-col gap-4'>
        <div className='border-2 p-3'>
            <img src={photo} alt="" />
        </div>
        <div>{title}</div>
        <div>${price}</div>

       <div> <button onClick={handleonclick} className='px-5 pyp-2 bg-orange-300 rounded-md text-white'>Add to card</button></div>
    </div>
  )
}

export default Card