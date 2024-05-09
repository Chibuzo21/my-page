import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Pics from './Girl.png';

function Home() {
  const navigate=useNavigate();
  const ChangeLocation =()=>{
    navigate("/signup")
  }
  return (
<div className='h-full w-full bg-gray-500 grid 
content-center justify-items-center gap-3'>
  <h1 className='text-5xl text-white font-mono'>Welcome to my page</h1>
  <section className='space-x-2'>
    <button className='bg-blue-500 text-white px-5 py-2' onClick={ChangeLocation }>
      GetStarted
    </button>
    <button className='bg-white text-blue-500 px-5 py-2'>Learn more</button>
  </section>
</div>







    
//     <section className=' h-[80vh] w-[100vw] bg-no-repeat bg-center bg-gray-300'
//     style={{
//         backgroundImage:`url(${Pics})`,}}>
// <div className='h-[70vh] w-[40vw] p-20'>

//   <h1 className='text-[rgb(45,31,76)] text-3xl font-bold'>Experience a</h1>
//   <h1 className='text-[rgb(55,111,103)] text-3xl font-bold'>SoftTech skill</h1>
//   <h1 className='text-3xl font-bold text-[rgb(45,31,76)] h-[10vh]'>Today</h1>
//   <div>
//   <p className='font-normal  text-sm h-[15vh] w-[30vw]'>Reach your goals with personalized insights,<br />custom budgets, spending tracking
//   and subscription <br />monitoring-all for free</p>
//   <button className='bg-[rgb(55,111,103)] text-white p-3 rounded-sm'>Register for SoftTech</button>
// </div>
// </div>

//     </section>
  )
}

export default Home