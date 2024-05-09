import React from 'react'
import { FaChevronRight, FaMoon, FaUser } from 'react-icons/fa'
import { IoLogOut, IoSettingsSharp} from 'react-icons/io5'
import { MdHelp } from 'react-icons/md'
import {Link} from "react-router-dom";


function Dropdown() {
  return (
    <>
    <section className='bg-white border-[1px] border-none h-[60vh] w-[27vw] 
    absolute right-[4px] p-3 grid gap-2 rounded-md top-[60px] z-40'>
<div className='flex items-center flex-row gap-4'>
    <div className='h-7 w-7 bg-blue-500 rounded-full flex justify-center
     items-center'>UC
      </div>
      <p>Ukaegbu Chibuzo</p>
      </div>
      <div className='border-t w-full border-gray-400'></div>
      <div className='flex flex-row gap-3 items-center'>
        <div className='bg-gray-300 rounded-full h-8 w-8 text-center p-2'><FaUser/></div>
        <div className='w-[17vw]'>Edit Profile</div>
        <div className='text-gray-500'><FaChevronRight/></div>
      </div>
      <div className='flex flex-row gap-3 items-center'>
        <div className='bg-gray-300 rounded-full h-8 w-8 text-center p-2'><IoSettingsSharp/></div>
        <div className='w-[17vw]'>Settings & Privacy</div>
        <div><FaChevronRight className='text-gray-500'/></div>
      </div>
      <div className='flex flex-row gap-3 items-center'>
        <div className='bg-gray-300 rounded-full h-8 w-8 text-center p-2'><MdHelp/></div>
        <div className='w-[17vw]'>Help & Support</div>
        <div><FaChevronRight className='text-gray-500'/></div>
      </div>
      <div className='flex flex-row gap-3 items-center'>
        <div className='bg-gray-300 rounded-full h-8 w-8 text-center p-2'><FaMoon/></div>
        <div className='w-[17vw]'>Display & Accesibility</div>
        <div><FaChevronRight className='text-gray-500'/></div>
      </div>
      <div className='flex flex-row gap-3 items-center'>
        <div className='bg-gray-300 rounded-full h-8 w-8 text-center p-2'><IoLogOut/></div>
        <Link to="/Login"> 
        <div className='w-[17vw]'>Logout</div>
        </Link>
        <div><FaChevronRight className='text-gray-500'/></div>
      </div>
    </section>
    </>
  )
}

export default Dropdown