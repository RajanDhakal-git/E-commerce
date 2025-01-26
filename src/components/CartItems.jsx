import { useMyconext } from '../store/MyContextAPI'
import Card from './Card'

const CartItems = () => {
    let {itemlist} = useMyconext()
    console.log(itemlist)
  return (
    <>
    <div className='grid  md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4 gap-4 px-10 py-5'>{ itemlist.length <=0 ? 'no data...' : itemlist.map((item )=>{
        return <div> 
                <div className='border h-[40vh] w-[40vh] p-5'><img src={item.productphoto} className='h-[100%] w-[100%] object-cover' alt="alt" /></div>
                <div className='flex flex-col'>
                    <span>{item. productname}</span>
                    <span>${item.productprice}</span>
                    
                </div>
             </div>
    })}</div>
    </>
  )
}

export default CartItems