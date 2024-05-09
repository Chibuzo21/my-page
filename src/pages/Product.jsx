import { NavLink, Outlet } from "react-router-dom";

function Products(){
    return(
        <>
        <div sclassName="px-10">
            <h1 className="text-4xl">Products</h1>

            <nav className="w-full h-[10vh]
             border-[0.5px] border-gray-900 flex justify-around items-center">
<NavLink to="/products/shoes">shoes</NavLink>
<NavLink to="/products/clothes">clothes</NavLink>
<NavLink to="/products/electronics">electronics</NavLink>
<NavLink to="/products/jewelries">jewelries</NavLink>
<NavLink to="/products/bag">bag</NavLink>                


            </nav>
            <Outlet/>
        </div>
        </>
    );
}
export default Products;