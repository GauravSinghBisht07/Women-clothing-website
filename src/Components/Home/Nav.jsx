import React from "react";
import { NavLink } from "react-router-dom";
import Cartprod from "../Cart/Cartprod";
import { useDispatch } from "react-redux";
import { toggleShoppingCart } from "../../Features/EcomSlice";
import { useSelector } from "react-redux";
function Nav() {
    const count = useSelector((state) => state.Count)
     const dispatch = useDispatch()

  return (
    <div className=" nav  z-10 border w-full  bg-white  h-20 sticky top-0  flex justify-around">
      <div className="icon  ">
        <p className="text-pink-500 font-serif  font-semibold">
          She<span className=" text-black text-2xl font-normal">Store</span>
        </p>
      </div>
      <div className="links  ">
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="/indian"></NavLink> */}
        <NavLink to="/ProducMain">Products</NavLink>
        <NavLink to="/CartProdDetail">Order</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </div>
      <div className=" search-bar1  ">
        <div className="search-bar2   ">
          <input 
            className="px-4  outline-none"
            type="text"
            placeholder="Search for products"
            spellCheck="false"
          />
         
        </div>
        <span  className="glass material-symbols-outlined absolute right-1 cursor-pointer rounded-full bg-pink-100">
            search
          </span>
        <span onClick={()=>{
          dispatch(toggleShoppingCart())
        }} className="material-symbols-outlined  cursor-pointer">shopping_bag</span>
        <span className="relative text-x right-4 bg-pink-500 p-0 px-2 -top-2 rounded-full text-white">{count}</span>
      </div>
      <Cartprod/>
    </div>
  );
}

export default Nav;
