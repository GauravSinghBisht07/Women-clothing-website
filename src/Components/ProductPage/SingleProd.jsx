import React from "react";
import { useDispatch } from "react-redux";
import { GetProdDetail } from "../../Features/EcomSlice";
import { NavLink } from "react-router-dom";

function SingleProd({ prod}) {
 
  const dispatch = useDispatch();
  const GetProduct = (id, names, prices, brand, img, rating, Simg) => {
    dispatch(
      GetProdDetail({
        id: id,
        names: names,
        price: prices,
        brand: brand,
        img: img,
        pRate: rating,
        Simg: Simg,
      })
    );
  };

  return (
    <div >
      <NavLink to="/prodDetail"   >
        <div 
          className=" w-60 border h-90 py-1 mb-2 px-1 cursor-pointer  ease-in duration-300  hover:scale-110"
          onClick={() =>
            GetProduct(
              prod.id,
              prod.name,
              prod.price,
              prod.brand,
              prod.img,
              prod.Rate,
              prod.Simg
            )
          }
        >
          <img className="w-full h-60" src={prod.img} alt="produce" />
          <div className="info flex flex-col w-full my-3 text-x px-3 font-mediume items-start"
          >
            <p className=" font-semibold font-san"> {prod.brand}</p>
            <p> {prod.name}</p>
            <p className="font-semibold font-san" > ₹ {prod.price}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default SingleProd;
