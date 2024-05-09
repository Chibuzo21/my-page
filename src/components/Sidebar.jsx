import React from 'react'
import { NavLink } from 'react-router-dom'
function Sidebar() {
  return (
    <aside className='grid justify-items-center border-r-[1px]
     border-r-black w-[20vw]'>
        <section className='h-[10vh] flex justify-center items-center'>
        <h1 className='text-2xl font-bold'>LOGO</h1>
        </section>
        <nav className='pt-10 h-[90vh] grid gap-7 content-start justify-items-center'>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to ="/contact">Contact</NavLink>
    <NavLink to ="/products/shoes">Products</NavLink>
    <NavLink to ="/Login">Login</NavLink>

    
</nav>
    </aside>
  )
}

export default Sidebar