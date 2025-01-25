
import Navbar from './Navbar'
import Card from './Card'
import { useMyconext } from '../store/MyContextAPI'


const Home = () => {
  let { Allproducts } = useMyconext()

  return (
    <div className=' bg-[#ecf0f1] relative'>
   
       <div className='sticky top-0'>
       <Navbar />
       </div>
        <div className='grid lg:grid-cols-4 gap-4 mx-10 md:grid-cols-3 sm:grid-cols-2'>
          {Allproducts.map((item) => {
            return <Card key={item.id} photo={item.images}  price = {item.price} desc = {item.description} title = {item.title}  />
          })}
        </div>
    </div>
  )
}

export default Home