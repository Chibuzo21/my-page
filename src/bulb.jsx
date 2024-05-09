import { useState } from "react"
import bulbOff from "./assets/bulboff.gif"
import bulbOn from "./assets/bulb.gif"
function Bulb(){

 const [img, setImage]=useState(`${bulbOff}`);

 const Switchon =()=>{
    if (img===`${bulbOff}`){
        setImage(`${bulbOn}`);
      }
     }
      const Switchoff=()=>{
        if (img===`${bulbOn}`){
            setImage(`${bulbOff}`);
          }
      
     };
return (
    <>

<section className="flex py-5">

    <div className="w-[33vw]"></div> 

      <div className="w-[19vw] ">
         <img src={img} alt="" srcset="" />
      </div>

     <div className="flex flex-col justify-center items-start
       bg-gray-300 h-[18vh] rounded-md p-3 border-[3px] border-gray-700 mt-14">
        <button className=" p-1 w-[5vw] h-[6vh] rounded-sm 
           border-[3px] border-gray-700" onClick={Switchon}>ON</button>
        <button className=" p-1 w-[5vw] h-[6vh] rounded-sm border-[3px]
        border-gray-700" onClick={Switchoff}>OFF</button>
    </div>
    
</section>
    </>
)
}

export default Bulb