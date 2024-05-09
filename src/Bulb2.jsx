import { useState } from "react";
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";

function Bulb2(){
    const[toggleBulb, settoggleBulb]=useState(false)
    const ONBulb=()=>{
        settoggleBulb(true)
    };
    const OFFBulb=()=>{
        settoggleBulb(false)
    };
    return(
<section className="w-screen h-screen flex justify-center
items-center flex-col gap-3">
<section className="text-5xl">
{/* {toggleBulb&&<FaLightbulb className="text-[yellow]"/>}
{!toggleBulb&&<FaRegLightbulb/>} */}

{/* Using Ternary operator :*/}
{toggleBulb ?<FaLightbulb className="text-[yellow]"/>:<FaRegLightbulb/>}

</section>
<section className="space-x-2">
    <button
    className="p-3 bg-slate-400 text-xl
     hover:bg-slate-600 " onClick={ONBulb}>
on
    </button>
<button
 className="p-3 bg-slate-400 text-xl
     hover:bg-slate-600" onClick={OFFBulb}>
Off
    </button>
</section>
</section>
    )
}
export default Bulb2