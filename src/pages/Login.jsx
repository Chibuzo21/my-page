import React from 'react'
import { FaEnvelope,FaLock, FaUser } from 'react-icons/fa';
import {Link} from "react-router-dom";

function Login() {
   
    return (
      <>
      {/* <Link to="/">Back to Home</Link> */}
<section className='w-full flex flex-col justify-center text-white gap-4
bg-gradient-to-br from-blue-600 via-blue-800 to-red-800 items-center h-screen'>
<p  className='font-medium text-xl'>Login</p>
<div className='
bg-gray-800 w-[28vw] h-[8vh] py-2 px-2 rounded-md opacity-100 
flex flex-row gap-3 items-center'><FaUser/>
<input type="text" placeholder='Full Name' className='outline-none bg-inherit'  /></div>

<div className='
bg-gray-800 w-[28vw] h-[8vh] py-2 px-2 rounded-md opacity-100 
flex flex-row gap-3 items-center'><FaEnvelope/>
<input type="text" placeholder='Email' className='outline-none bg-inherit'  /></div>

<div className='
bg-gray-800 w-[28vw] h-[8vh] py-2 px-2 rounded-md opacity-100 
flex flex-row gap-3 items-center'><FaLock/>
<input type="text" placeholder='Password' className='outline-none bg-inherit'  /></div>

<Link  to="/">
    <button className='bg-white text-gray-700 w-[28vw] h-[8vh]
     py-2 px-2 rounded-2xl' >Sign in</button>
</Link>
</section>
      </>
    );
  }
  
  export default Login;