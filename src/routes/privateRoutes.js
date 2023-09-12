import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { UsersCrud } from "../pages/Users";
import { BrandsCrud } from "../pages/Brands";
import { CategoriesCrud } from "../pages/Categories";
import { ProductsCrud } from "../pages/Products";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="users" element={<UsersCrud />} />
      <Route path="/brands" element={<BrandsCrud />} />
      <Route path="/categories" element={<CategoriesCrud />} />
      <Route path="/products" element={<ProductsCrud />} />
    </Routes>
  );
};

export { PrivateRoutes };
