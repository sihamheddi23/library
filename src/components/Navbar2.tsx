 import {useState} from 'react'
import second from '../assets/logo.png'
import { Button, Input } from '@material-tailwind/react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaShopify } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/token';


function Navbar2(props) {
    const [open, setOpen] = useState(false);
    const openDrawer = () => setOpen(!open);
    
    const navigate = useNavigate()
    const card = useSelector((state:any) => state.card);
    
    const dispatch = useDispatch()
    
    const token = useSelector((state:any) => state.token);
    
    const logMeout = ()=> {
        dispatch(logout())
        setTimeout(() => {
          navigate("/login")
        }, 2000);
    }


  return (
    <div >
      <div className='navbar1 fixed w-full top-0 bg-white flex gap-8 items-center py-3 shadow shadow-gray-300 text-cyan-700 '>
      <div >
                  <img src={second} alt="logo" className='max-w-[80px] lg:max-w-[111px] md:max-w-[111px]' />
                </div>
                <div className="w-3/4 lg:w-2/4">
                   <Input placeholder='search title of book ...' value={props.title} onChange={(e)=>props.settitle(e.target.value)} onBlur={props.handleBlur} className='py-2  rounded-full px-2 outline-none' onFocus={()=>navigate("/shop")}  />
                </div>
                <div className=" gap-4 justify-end w-2/4 mr-5 hidden lg:flex">
                     <Link className='flex gap-1 items-center' to="/card"> <FaShopify/> Your Card ({card.length})</Link>      
                    {
                      token?<>
                           <Link className='flex gap-1 items-center' to="/dashboard">dashboard</Link>
                           <Link className='flex gap-1 items-center' to="/order">your order</Link>
                           <button onClick={logMeout}   className='bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 text-lg rounded-md '>Log Out</button>


                      
                      </>:<>
                      
                      <Link  to={"/login"}   className='bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 text-lg rounded-md '>Login</Link>
                     <Link  to={"/register"}  className='bg-purple-700 hover:bg-purple-500 text-white px-6 py-2 text-lg  rounded-md'>Register</Link>
            
                      
                      </>
                    }
            </div>

               <div className='	 py-3 px-4 md:hidden lg:hidden '>
                 
                    <div>
                        <Button onClick={openDrawer} className='text-black border border-gray-200'>
                            <FaBars/>
                        </Button>
                  </div>
                </div>
      </div>
           
                
    <div className="mb-2 fixed w-full top-20 flex flex-col items-center justify-between p-4 bg-white z-30 shadow shadow-slate-100	" style={open?{display:'flex'}:{display:'none'}}>
                <Link to={"/login"} className='hover:text-cyan-500'>
                  Login
                </Link>
                <Link to={"/register"} className='hover:text-cyan-500'>
                  Register
                </Link>
           
                <Link to={"/card"} className='hover:text-cyan-500'>
                  Your card ({card.length})
                </Link>
         
     </div>
     
    </div>
  )
}

export default Navbar2