import Buttons from "./components/Buttons";
import Pics from "./assets/lady.jpg";

function Top(){
    const firstText= "WORK FROM HOME";
    const secondText="EARN EXTRA CASH FROM THE COMFORT OF YOUR HOME";
    const text="The best ways to start earning extra cash from the comfort of your own home"
    const buttonName="SIGN UP TODAY";
return(
    <main className="bg-cover bg-center h-[100vh] w-[100vw] text-white" style={{backgroundImage:`url(${Pics})`}}>
<section className="flex justify-around py-5 w-[70%]] h-[40vh]" >
        <p className="w-[28vw]">{firstText}</p>
        <p>{secondText}</p>
        </section>
        <section className=" w-[70%] h-[40vh] ml-36">
            <h1 className="font-bold text-4xl h-[16vh]">MAKE MONEY <br />FROM HOME</h1>
            <p className="w-[36vw] h-[9vh]">{text}</p>
            <Buttons bg={"bg-[#ff2600]"} name={buttonName}/>

        </section>
    </main>
)
} 


export default Top