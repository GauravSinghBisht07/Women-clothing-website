import React from "react";
import OffBanner from "./OffBanner";
import { NavLink } from "react-router-dom";
import FeaturedProd from "./FeaturedProd";

function Home() {
  return (
    <>
      <div className="bg-black ">
        <div className=" banner    w-full overflow-hidden opacity-90 ">
          <div className=" Home-banner-text absolute   ">
            <p className="text-black">
              <span className=" she text-pink-700 ">She</span>Store
              <br /> <span>FASHION</span>
            </p>
            <p className="discount-Text">50%<span>FF</span></p>
            <NavLink to="/ProducMain">
              <button className="text-xl font-sans bg-black  text-white p-3 px-5 rounded-full">
                Shop Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      {/* -----------------------  OPtions ----------------------- */}
      <div>
        <h1 className=" option-head font-san text-center mt-6  ">Categories</h1>

        <div className="options cursor-pointer   text-xl font-serif">
          <div className="western  relative h-96 w-full bottom-0 bg-yellow-900 ">
            <img
              className="  w-full h-full bottom-0  opacity-90"
              src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/2/tr:w-480,/12e4c03NH_GAJRA00003931_1.jpg?rnd=20200526195200"
              alt=""
            />
            <span className=" bg-pink-600 text-center w-full absolute top-80 mt-2 text-white text-4xl py-1 ">
              Western
            </span>
          </div>
          <div className=" western relative cursor-pointer  w-full  h-96 bottom-0 bg-blue-900 ">
            <img
              className="w-full h-full  opacity-90"
              src="https://anayadesignerstudio.com/wp-content/uploads/2022/09/Party-Wear-Sharara-Suit-Design-2022-For-Girls-370x555.jpg"
              alt=""
            />
            <span className=" bg-yellow-600 text-center w-full absolute top-80 mt-2 text-white text-4xl py-1">
              Indian
            </span>
          </div>
          <div className="western relative cursor-pointer bottom-0  w-full h-96   bg-gray-600 ">
            <img
              className="w-full h-full  opacity-90"
              src="https://static.punjabkesari.in/multimedia/15_51_175139822height-lehnga.jpg"
              alt=""
            />
            <span className=" bg-blue-400 text-center w-full absolute top-80 mt-2 text-white text-4xl py-1">
              Lehenga's
            </span>
          </div>
        </div>
      </div>
      <FeaturedProd />
      <OffBanner />
    </>
  );
}

export default Home;
