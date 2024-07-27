import React, { useState } from "react";
import { useSelector } from "react-redux";
import EachProd from "./EachProd";
import { useDispatch } from "react-redux";
import { HideCart } from "../../Features/EcomSlice";
import { NavLink } from "react-router-dom";

function Cartprod() {
  const cartProds = useSelector((state) => state.Cart);
  const cart = useSelector((state) => state.ShowCart);
  const count = useSelector((state) => state.Count);
  const prodPrices = useSelector((state) => state.prices);
  const qunt = useSelector((state) => state.Quant);
  const Total = prodPrices * qunt;


  const gervalues = cartProds

  const dispatch = useDispatch();

  return (
    <>
      {cart ? (
        <div className="  prodIncart overflow-auto z-50 fixed top-0 h-screen w-72 right-2 border bg-white p-4 ">
          <div
            onClick={() => {
              dispatch(HideCart());
            }}
            className="close text-black text-2xl bg-gray-200 rounded-full h-10 text-center pt-1  w-10 cursor-pointer hover:bg-slate-300"
          >
            X
          </div>
          <div className="CartProducts  ">
            {gervalues.map((prod) => (
              <EachProd prod={prod} key={prod.id} />
            ))}
          </div>
          <div className="amoutItem text-l font-san py-2">
            <span>Total Items : {count}</span>
            <br />
            <span>Total Amount : ₹ {Total}</span>
          </div>
          <NavLink to="/CartProdDetail">
            <button className="w-full py-1 my-5 text-2xl bg-black text-white">
              Checkout
            </button>
          </NavLink>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Cartprod;
