import React from 'react'
import Header  from './Header';
import {Outlet} from "react-router-dom";
import Footer from './Footer';
import Sidebar from './Sidebar';

function Main() {
  return (
    <main className='flex h-screen'>
        <Sidebar/>
        <section className='w-[80vw]'>
        <Header/>
        <section className='h-[80vh] overflow-y-auto'>
            <Outlet/>
            </section>
            <Footer/>
        </section>
    </main>
  )
}

export default Main