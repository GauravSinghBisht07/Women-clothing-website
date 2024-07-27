import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { GetProdDetail } from "../../Features/EcomSlice";
import { NavLink } from "react-router-dom";
function FeaturedProd() {
  const products = useSelector((state) => state.products);
  let a = products.slice(3, 5);
  let b = products.slice(9, 12);
  const getProd = a.concat(b)

 const dispatch = useDispatch()
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
    <NavLink to="/prodDetail"  >
    <div className="featured-prod w-full">
      {getProd.map((prod) => (
        <div
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
        className=" producte h-full my-5 w-full " key={prod.id}>
          <div className=" w-full border h-96 py-1 mb-2 px-2 cursor-pointer  ease-in duration-300  hover:scale-110">
            <img className="w-full h-72
            " src={prod.img} alt="produce" />
            <div className="info flex flex-col w-full my-3 text-x px-3 font-mediume items-start">
              <p className=" font-semibold font-san"> {prod.brand}</p>
              <p> {prod.name}</p>
              <p className="font-semibold font-san"> ₹ {prod.price}</p>
            </div>
          </div>
        </div>
       
      ))}
    </div>
    </NavLink>
  );
}

export default FeaturedProd;
