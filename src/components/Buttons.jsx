function Buttons({name, bg}){
    return (
        <button className={`px-4 py-2 w-[14vw] text-white border-none
         ${bg}`}>{name}</button>
    )
}
export default Buttons;
