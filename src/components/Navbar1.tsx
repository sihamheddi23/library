import { Link } from 'react-router-dom'
import second from '../assets/logo.png'
import { Button } from '@material-tailwind/react'
import { FaBars } from "react-icons/fa";
import { useState } from 'react';

function Navbar1() {

  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(!open);


  return (
    <div className='m-0 p-0'>

    <div className='hidden navbar1 lg:text-xl lg:visible lg:pl-24 py-3 shadow my-0 shadow-gray-300 md:visible lg:flex md:flex justify-center lg:gap-12 md:gap-6 text-cyan-700 items-center'>
                <Link to={"/"} className='hover:text-cyan-500'>
                  Home
                </Link>
                <Link to={"/"} className='hover:text-cyan-500'>
                  Popular Books
                </Link>
                <div>
                  <img src={second} alt="logo" className='max-w-[111px]'/>
                </div>
                <Link to={"/shop"} className='hover:text-cyan-500'>
                  Shop Now
                </Link>
                <Link to={"/"} className='hover:text-cyan-500'>
                  About Us 
                </Link>
          <div className="flex gap-4 justify-end">
          <Link  className='bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 text-lg rounded-md ' to={"/login"}>Login</Link>
           <Link  className='bg-purple-700 hover:bg-purple-500 text-white px-6 py-2 text-lg  rounded-md' to={"/register"}>Register</Link>
          </div>
     </div>
     

     <div className='visible z-20	 py-3 px-4 md:hidden lg:hidden shadow  shadow-gray-300  flex justify-between items-center'>
               <div>
                  <img src={second} alt="logo" className='max-w-[98px]'/>
                </div>
                <div>
                <Button onClick={openDrawer} className='text-black border border-gray-200'>
                    <FaBars/>
                </Button>
                </div>
     </div>

 
        <div className="mb-2 flex flex-col items-center justify-between p-4 bg-white z-30 shadow shadow-slate-100	" style={open?{display:'flex'}:{display:'none'}}>
         
 
          <Link className='hover:text-cyan-500'  to="/" >
                  Home
                </Link>
                <Link className='hover:text-cyan-500'  to="/" >
                  Popular Books
                </Link>
               
                <Link className='hover:text-cyan-500'  to="/shop" >
                  Shop Now
                </Link>
                <Link className='hover:text-cyan-500'  to="/" >
                  About Us 
                </Link>
        </div>
    



    </div>
  )
}

export default Navbar1