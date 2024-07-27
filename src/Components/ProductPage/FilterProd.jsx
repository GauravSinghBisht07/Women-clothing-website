import React, { useEffect, useState } from "react";
import { filterProducts } from "../../Features/EcomSlice";
import { useDispatch } from "react-redux";
import { AllProds } from "../../Features/EcomSlice";
import { NavLink } from "react-router-dom";

function FilterProd({ ProdTypes }) {
  console.log(ProdTypes);
  const dispatch = useDispatch();
  const [col, setCol] = useState(false);
  const [col2, setCol2] = useState(false);
  const [All, setAll] = useState(true);

  return (
    <div className="Filter-area ">
      <div className="top-area h-14 border-b-2 ">
        <p className=" text-3xl flex  mt-3 font-sans  ">Filters</p>
      </div>
      <div
        className="assen  w-full text-xl p-2 flex  item-center "
        key={ProdTypes[0]}
        onClick={() => {
          dispatch(AllProds());
          setAll(true);
          setCol(false)
          setCol2(false)
        }}
      >
        {All ? (
          <label className="mx-3 cursor-pointer text-pink-600">All</label>
        ) : (
          <label className="mx-3 cursor-pointer">All</label>
        )}
      </div>
      <div
        className="assen  w-full text-xl p-2 flex  item-center"
        key={ProdTypes[0]}
        onClick={() => {
          dispatch(filterProducts(ProdTypes[1]));
          setCol2(true);
          setCol(false);
          setAll(false);
        }}
      >
        {col2 ? (
          <label className="mx-3 cursor-pointer text-pink-600">Western</label>
        ) : (
          <label className="mx-3 cursor-pointer">Western</label>
        )}
      </div>
      <div
        className="assen   w-full text-xl p-2 flex  item-center"
        key={ProdTypes[0]}
        onClick={() => {
          dispatch(filterProducts(ProdTypes[0]));
          setCol(true);
          setCol2(false);
          setAll(false);
        }}
      >
        {col ? (
          <label className="mx-3 cursor-pointer text-pink-600">
            Traditonal
          </label>
        ) : (
          <label className="mx-3 cursor-pointer">Traditonal</label>
        )}
      </div>
    </div>
  );
}

export default FilterProd;
