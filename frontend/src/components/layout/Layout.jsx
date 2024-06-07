import React from "react";
import Header from "../header/Header";
import Routers from "../../routers/Router";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;
