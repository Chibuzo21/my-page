import Circle from "./components/Circle";

function Bottom(){
    const lorem= "Lorem ipsum, dolor sit amet consectetur adipisicing elit incididunt ut labore."
    return (
<main className="bg-[#ff2600] h-[40vh] pt-4 w-[100vw] text-white">
    <section className="flex justify-around h-[22vh] w-[100vw]" >
    <div className=" text-center h-[17vh]">
<Circle name="1"/>
<p className="text-sm">IT'S SIMLPE</p>
<p>{lorem}</p>
    </div>
    <div className=" text-center h-[17vh]">
    <Circle name="2"/>
<p className="text-sm">IT'S FAST</p>
{lorem}
    </div>
    <div className=" text-center h-[17vh] ">
    <Circle name="3"/>
<p className="text-sm">IT'S FUN</p>
{lorem}
    </div>
    </section>
    <section className="grid gap-9">
    <div className="border-b" ></div>
    <p className="text-center">SIMPLE WORK FROM HOME OPPORTUNITY</p>
    </section>
</main>
    )
}
export default Bottom