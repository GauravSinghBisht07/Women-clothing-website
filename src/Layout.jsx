import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Components/Home/Nav";
import Cartprod from "./Components/Cart/Cartprod";
import Footer from "./Components/footer/Footer";
import CartProdDetail from "./Components/CartProdDetail/CartProdDetail";
function Layout() {
  return (
    <>
      <Nav />
      <Cartprod />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
