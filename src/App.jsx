import "./App.css";
// import man from "./assets/image.jpg"
// import Header from "./Header.jsx";
// import Button from "./components/Button.jsx";
import Top from "./Top.jsx";
import Bottom from "./Bottom.jsx";

function App() {
//  const text="Welcome to my First React App";

  return (
    //React fragments
    <>
    <main className="h-[120vh] p-0 m-0">  
          <Top/>
          <Bottom/>

    </main>
    {/* <main className="bg-gray-700">
      <Header/>
      <section className="h-[90vh] text-white flex justify-center gap-3
      items-center flex-col">
      <h1 className="text-[5vw] font-mono font-bold">{text}</h1>
      <section className="flex gap-3">
      <Button bg={"bg-blue-500"} name={"Get Started"}/>
      <Button bg={"bg-[whitesmoke] text-black"} 
      name={"See Documentation"}/>
      </section>
      </section>
    
    </main> */}
   </>
  );
}

export default App;
