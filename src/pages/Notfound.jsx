import React from 'react'
import {Link} from "react-router-dom"

function Notfound() {
  return (
    <div className='w-full h-screen gap-3 flex justify-center items-center flex-col'>
         <h1 className='text-4xl text-red-500'>
            404
            <span className='text-black'>Page Not found</span>
         </h1>
         <Link to="/" className="underline text-blue-600">
            Go to home</Link>
    </div>
  )
}

export default Notfound