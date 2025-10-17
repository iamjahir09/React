import React, { useState } from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { PiDotsThreeVertical } from "react-icons/pi";
import { CiShop } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {

    const [cart, setCart] = useState(0)
    function Change(){
        setCart(0)
        setCart(cart+1)
    }

  return (
    <div className=' bg-gray-300  font-serif'>
      <div className='px-20 py-5 text-lg flex  justify-between bg-white top-0 gap-5'>

        <h4 className=' text-blue-800 capitalize font-sans text-2xl font-bold'>flipkart</h4>
        
        <input className='px-8 py-1 bg-gray-200 rounded-lg w-130' type="text" placeholder='Search for Products, Brand and more'  />
    
        <h4 className='flex gap-2 items-center'>
            <MdOutlineAccountCircle className='mr-1 text-2xl' />
            Login 
            <FaChevronDown className='ml-1 text-xs'/>
        </h4>

        <h5 className='flex items-center gap-2' onChange={Change}><FaShoppingCart />Cart</h5>

        <h4 className='flex items-center gap-2'><CiShop />Become a Seller</h4>

        <h4 className='items-center flex gap-5'><PiDotsThreeVertical className='mr-1 text-2xl'/></h4>
        
      </div>
    </div>
  )
}

export default Navbar
