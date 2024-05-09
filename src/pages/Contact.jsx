import React from 'react'
import Container from './container'
import { FaEnvelope, FaPhone,FaHome } from 'react-icons/fa'

function Contact() {
  return (
  <main className='bg-[#3d3d3d]  px-9 py-3 h-[90vh] w-full'>
    <section className='text-white text-center h-[20vh]'>
<div className='font-bold text-xl h-[6vh]'>Contact Us</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Corrupti corporis accusantium magnam, saepe omnis optio 
  a soluta delectus ipsum qui quas officia earum commodi quasi ad facere repellendus. Hic, 
  magnam.</p>
    </section>
    <section className='flex items-center'>
      <div className='w-[40vw]' >
        <Container icon={<FaHome/>} Btext={"Address"} Stext={"114 umuodu street, abayi, Aba, Abia state"}/>
        <Container icon={<FaPhone/>} Btext={"Phone"} Stext={`08105973090`}/>
        <Container icon={<FaEnvelope/>} Btext={"Email"} Stext={`UkaegbuChibuzo@gmail.com`}/>
        
      </div>
      <div className='bg-white h-[50vh] p-5 w-[44vw] rounded-md'>
<p className='font-bold text-xl   h-[7vh]'>Send Message</p>
<div className='grid gap-4'>
<div className='grid gap-2'>
  <input className='bg- border-none outline-none ' type="text" placeholder='Full Name'/>
  <div  className=' border-b w-[40vw] border-gray-600' />
</div>
<div className='grid gap-3'>
  <input className='bg- border-none outline-none  ' type="text" placeholder='Email'/>
  <div  className=' border-b w-[40vw] border-gray-600' />
</div>
<div className='grid gap-3'>
  <input className='bg- border-none outline-none  ' type="text" placeholder='Type your Message'/>
  <div  className=' border-t w-[40vw] border-gray-600 h-[2vh]' />
</div>
      </div>
      <button className='bg-blue-500 w-[40vw] h-[7vh] rounded-md text-white'>Send</button>
      </div>
    </section>
  </main>
  )
}

export default Contact