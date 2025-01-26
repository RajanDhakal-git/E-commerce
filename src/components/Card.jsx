import React from 'react'
import { useMyconext } from '../store/MyContextAPI'
import { useNavigate } from 'react-router-dom'

const Card = ({title , price , photo , id}) => {
  let navi = useNavigate()
    let { handleonclick} = useMyconext()

  return (
    <div className='shadow-lg px-8 py-5 bg-white rounded flex flex-col gap-4 cursor-pointer' >
        <div className='border-2 p-3 grow'>
            <img src={photo} alt="img" />
        </div>
        <div>{title}</div>
        <div>${price}</div>

       <div className='flex flex-col gap-3'> 
        <button onClick={ ()=> handleonclick(id , price , photo , title)} className='px-5 py-2 bg-orange-300 rounded-md text-white'>Add to card</button>
       <button onClick={()=> navi(`card/${id}`) } className='px-5 pyp-2 bg-orange-300 rounded-md text-white'>Details</button>
       </div>
    </div>
  )
}

export default Card