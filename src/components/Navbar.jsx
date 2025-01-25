
import { useMyconext } from "../store/MyContextAPI"


const Navbar = () => {
  let {cartitems}=useMyconext()

  return (
    <div className="p-5 bg-white mb-4 mx-10 shadow-md flex justify-between px-10">
      <div className="logo">Logo</div>
      <div className="links text-2xl relative">
        <span className=" absolute bg-[#e74c3c] text-white text-xs p-1 h-4 w-4 flex justify-center items-center rounded-full -right-1 top-0">{cartitems}</span>
        <i class="ri-shopping-cart-line"></i></div>
    </div>
  )
}

export default Navbar