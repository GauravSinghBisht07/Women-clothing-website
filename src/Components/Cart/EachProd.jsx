import React from "react";
import { useDispatch } from "react-redux";
import { Removethis } from "../../Features/EcomSlice";
import { changequnt } from "../../Features/EcomSlice";

function EachProd({ prod }) {
       
  
  const dispatch = useDispatch()
  return (
    <div className="  relative prodIncart w-full rounded border mt-3 h-28 flex p-1">
      <img className=" w-28 h-full" src={prod.img} alt="" />
      <div className="text-xs text-gray-700 px-2">
        <p className=" text-x font-medium">{prod.brand}</p>
        <p className="">{prod.names}</p>
        <span>Qty :</span>
        <input 
        defaultValue={1}
        onChange={(e)=> {          
          if(e.target.value < 1)   return 1
          dispatch(changequnt(e.target.value))
        }}
        type="number" className=" size-5 w-7 outline-none border-none" />
        <p className="font-bold">₹ {prod.price}</p>
        <span onClick={() => {
          dispatch(Removethis({id:prod.id,price:prod.price}))
        }}
        className=" text-xs cursor-pointer text-black absolute top-0 right-2 bg-gray-300 mt-1 px-2 py-1 rounded-full hover:bg-slate-400">
          X
        </span>
      </div>
    </div>
  );
}

export default EachProd;
