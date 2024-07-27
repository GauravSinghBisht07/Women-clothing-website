import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className=" footer border border-t-2 mt-5 w-full flex items-center justify-around  font-sans text-gray-700 py-5">
      <div className="navigation flex flex-col border-r-2  border-gray-400 w-1/3 text-center gap-1">
        <NavLink to="/">HOME</NavLink>
        <NavLink>ABOUTUS</NavLink>
        <NavLink to="/Contact">CONTACTUS</NavLink>
        <NavLink to="/ProducMain">PRODUCTS</NavLink>
      </div>
      <div className="copyright flex flex-col border-r-2 text-center h-28 border-gray-400 w-1/3">
        <p className="text-pink-600 text-2xl mt-5 font-serif" >
          She<span className="text-gray-800">Store</span>
        </p>
        <p>sheStore ALL ©COPYRIGHT RESERVED</p>
      </div>
      <div className="social-media w-1/3  text-center">
        <p className="text-gray-800 ">FOLLOW US ON</p>
        <div className="flex w-full justify-center gap-3 py-2 item-center ">
          <Link to="https://www.instagram.com" target="black">
            <img className="w-8" src="https://img.icons8.com/?size=50&id=32292&format=png" alt="" />
          </Link>
          <Link to="https://www.youtube.com" target="black">
            <img className="w-8" src="https://img.icons8.com/?size=50&id=37325&format=png" alt="" />
          </Link>
          <Link to="https://www.facebook.com" target="black">
            <img className="w-8" src="https://img.icons8.com/?size=50&id=118468&format=png" alt="" />
          </Link>
         
        </div>
      </div>
    </div>
  );
}

export default Footer;
