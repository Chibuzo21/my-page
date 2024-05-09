function Container({icon,Btext,Stext}){
    return(

        <div className="  flex h-[17vh]">

            <div className="h-[8vh] w-[6vw]">
            <button className=" p-4 
            font-bold text-black rounded-full border-none
         bg-white text-center">{icon}</button>   
         </div>

         <div className="flex flex-col">
         <p className="h-[5vh] font-bold text-blue-500">{Btext}</p>
         <p className="w-[25vw] text-white">{Stext}</p>
         </div>
        </div>
    )
}
export default Container