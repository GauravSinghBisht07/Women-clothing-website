import React, { useState } from "react";
import { useSelector } from "react-redux";
function CartProdDetail() {
  const cartProds = useSelector((state) => state.Cart);
  const count = useSelector((state) => state.Count);

  const prodPrices = useSelector((state) => state.prices);
  const qunt = useSelector((state) => state.Quant);
  const total = prodPrices * qunt;

  return (
    <div className=" order  ">
      <div className="">
      {cartProds.map((prods) => (
        <div className="prod border  p-2 h-32 flex mb-8">
          <img className="h-full w-30" src={prods.img} alt="" />
          <div className="text-l  mx-2 w-full  font-sans flex flex-col gap-1">
            <p className="flex font-medium justify-between">
              <span>{prods.names}</span>
              <span>₹ {prods.price}</span>
            </p>
            <div className="text-normal">
              <label>Size : </label>
              <select className="outline-none w-40 border">
                <option value="">Medium</option>
                <option value="">Small</option>
                <option value="">Large</option>
              </select>
            </div>
            <p>Product Code : XX3425</p>
            <p>Quantity : {qunt}</p>
          </div>
        </div>
      ))}
      </div>
      <div className=" details   h-80 bg-gray-100 p-3 px-5">
        <p className="flex justify-between text-gray-500  my-5 pr-5  w-full border-b-2 border-gray-300">
          <span>Total Products </span>
          <span>{count}</span>
        </p>

        <p className="flex justify-between text-gray-500 my-5 pr-5  w-full border-b-2 border-gray-300">
          <span>Sub Total </span>
          <span>₹ {total}</span>
        </p>
        <p className="flex justify-between text-black  pr-5 my-5 w-full border-b-2 border-gray-300">
          <span>Total Amount </span>
          <span>₹ {total}</span>
        </p>

        <button className="w-full bg-pink-600 text-white py-2 rounded mt-16 ">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CartProdDetail;
