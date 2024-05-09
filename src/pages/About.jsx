import React from 'react';
import Man from"./man.jpeg";

function About() {
  return (
    <section className='bg-black text-gray-400'>
      <p className='text-center text-xl font-bold h-[10vh] text-white'>ABOUT US</p>
      <div className=' w-[100vw] flex items-center'>
        <div className='w-[51vw]'>
          <img src={`${Man}`} alt="" srcset="" className='w-[48vw] h-[68vh]' /></div>
        <div className='w-[40vw] h-[70vh] font-medium text-md'>
          <p className='h-[27vh]'>
            Welcome to SoftTech, where innovation meets expertise in the digital realm.
            We are cutting-edge software company dedicated to crafting high-performance websites
            and applications tailored to your needs.
            At SoftTech, we don't just build software; we engineer experiences. 
            </p>
            <p className='h-[34vh]'>With a team of 
            passionate developers, designers,and educators, we thrive on pushing the boundaries
            of technology to deliver solutions that exceed expectations.
            Whether you're seeking to elevate your online presence or embark 
            on a journey into the world of software development, SoftTech is your trusted partner
            in every step of the way.</p>

            <p>Join us in shaping the future of Technology, one line of code at a time. 
                       
         
          </p>
        </div>
      </div>
    </section>
  )
}

export default About