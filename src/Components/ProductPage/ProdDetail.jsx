import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { GetCartProds } from "../../Features/EcomSlice";
import SingleProd from "./SingleProd";


function ProdDetail() {
  const p = useSelector((state) => state.DetailProd);
  const products = useSelector((state) => state.products);


  let prod = p[p.length - 1];

  const dispatch = useDispatch();

  const Getprod = (id, names, brand, price, img) => {
    dispatch(
      GetCartProds({
        id: id,
        names: names,
        brand: brand,
        price: price,
        img: img,
      })
    );
  };

  return (
    <div>
    <div className="ProductDetailPage ">
      <div className="imgarea flex gap-2">
        <div className="smallimgs flex flex-col w-20 gap-2 mt-6 cursor-pointer">
          <img src={prod.pSimg.img1} alt="" />
          <img src={prod.pSimg.img2} alt="" />
          <img src={prod.pSimg.img3} alt="" />
        </div>
        <div className="main">
          <img className="h-full w-full" src={prod.pImg} alt="" />
        </div>
      </div>
      <div className="text-area  ">
        <p>{prod.pBrand}</p>
        <span>{prod.pName}</span>
        <span className="rating w-28 border border-black px-5 text-2xl p-1 mt-5">
          4.0 ★
        </span>
        <p className="text-4xl mb-3">₹ {prod.pPrice}</p>
        <hr />
        <label>Select Size</label>
        <select className="w-40 text-black ouline-none border border-black p-1 px-2 mt-6">
          <option value="medium">Medium</option>
          <option value="small">Small</option>
          <option value="Large">Large</option>
          <option value="xl">xl</option>
          <option value="XXl">xxl</option>
        </select>
        <div className="addcart">
          <button
            onClick={() =>
              Getprod(prod.id, prod.pName, prod.pBrand, prod.pPrice, prod.pImg)
            }
            className=" w-72 bg-black mt-5 text-white text-xl pt-2 pb-2"
          >
            Add to cart
          </button>
        </div>
        <h3 className="desc">
          <span>Description : </span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          veniam distinctio animi mollitia impedit, delectus modi fuga ullam
          nobis quae perspiciatis quam. Facere pariatur et, alias aliquam
          sapiente sint, corporis natus aut incidunt itaque animi reiciendis
          obcaecati blanditiis est velit?
        </h3>
      </div>

    </div>
    <div className="ProductPage flex mt-10 ml-16 px-12  gap-3  ">
    <div className="  prods  w-full   py-5 px-4">
      {products.map((prod) => (
        <SingleProd prod={prod} />
      ))}
    </div>
    </div>
    </div>
  );
}

export default ProdDetail;
