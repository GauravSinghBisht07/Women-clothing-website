import React, { useState } from "react";
import FilterProd from "./FilterProd";
import SingleProd from "./SingleProd";
import { useSelector } from "react-redux";

function ProducMain() {
  const products = useSelector((state) => state.products);
  const filterProds = useSelector((state) => state.filterData);
  const ProdTypes = [...new Set(products.map((prod) => prod.type))];
  const show = useSelector((state) => state.show);


  return (
    <div className="ProductPage   ">
      <FilterProd ProdTypes={ProdTypes} />
      {show ? (
        <div className=" prods w-full   py-5 px-4 ">
          {filterProds.map((prod) => (
            <SingleProd prod={prod} />
          ))}
        </div>
      ) : (
        <div className="prods  w-full   py-5 px-4 ">
          {products.map((prod) => (
            <SingleProd prod={prod} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProducMain;
