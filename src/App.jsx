// import { useState } from "react";
import "./App.css";
// import Increment from "./components/increment.jsx";
// import Bulb from "./bulb.jsx";
// import Bulb2 from "./Bulb2.jsx";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home.jsx";
 import About from "./pages/About.jsx";
 import Contact from "./pages/Contact.jsx";
import Main from "./components/Main.jsx";
 import Signup from "./pages/Signup.jsx";

//Products
import Products from "./pages/Product";
import Jewelries from "./pages/Products/Jewelries.jsx"
import Bags from "./pages/Products/bags";
import Electronics from "./pages/Products/electronics";
import Shoes from "./pages/Products/shoes";
import Clothes from "./pages/Products/clothes";
import Login from "./pages/Login.jsx";
import Notfound from "./pages/Notfound.jsx";

function App(){
// const[text, setText]=useState("hiii");

//  const handleClick=()=>{
//   if (text==="hello"){
//     setText("hiii");
//   }else{
//     setText("hello");
//   }

 //};
  return(
    <>

<Routes>
  <Route path="/" element={<Main/>}>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>



<Route path="/Products"element={<Products/>}>
<Route path="/Products/shoes" element={<Shoes/>}/>
<Route path="/Products/clothes" element={<Clothes/>}/>
<Route path="/Products/electronics" element={<Electronics/>}/>
<Route path="/Products/Jewelries" element={<Jewelries/>}/>
<Route path="/Products/bags" element={<Bags/>}/>  
</Route>

</Route>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="*" element={<Notfound/>}/>
</Routes>














{/*     
    <Bulb/>
    <Bulb2/>
    <main className="text-xl h-screen flex justify-center items-center 
    flex-col w-screen">
      <h1>{text}</h1>
      <button className="bg-blue-500 p-2" onClick={handleClick}>
        Click me!
        </button>
    </main>
    <Increment/>
     */}
    </>
  );
}
export default App;