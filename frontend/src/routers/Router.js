import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./../page/Home";
import Product from "../page/Product";
import Login from "../page/Login"
import Register from "../page/Register"
import About from "../page/About"
import ProductDetail from "../page/ProductDetail";
import MilkTea from "../page/MilkTea";
import Tea from "../page/Tea"
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/product/milk-tea" element={<MilkTea />} />
      <Route path="/product/tea" element={<Tea />} />

    </Routes>
  );
};

export default Routers;
