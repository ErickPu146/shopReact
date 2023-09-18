import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { UsersCrud } from "../pages/Users";
import { BrandsCrud } from "../pages/Brands";
import { CategoriesCrud } from "../pages/Categories";
import { ProductsCrud } from "../pages/Products";
import { LogoutPage } from "../pages/Logout";
import { NotFound } from "../pages/NotFound";

const PrivateRoutes = ({ onLogout }) => {
  const [userRols, setUserRols] = useState([]);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("USERLOGGER"));
    console.log("🚀 ~ file: privateRoutes.js:14 ~ useEffect ~ userData:", userData)
    setUserRols(userData.roles);
  }, []);

  if (userRols.some((rol) => rol === "Administrador")) {
    return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<UsersCrud />} />
        <Route path="/brands" element={<BrandsCrud />} />
        <Route path="/categories" element={<CategoriesCrud />} />
        <Route path="/products" element={<ProductsCrud />} />
        <Route path="/logout" element={<LogoutPage onLogout={onLogout} />} />
        <Route path="/*" element={<NotFound onLogout={onLogout} />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<CategoriesCrud />} />
        <Route path="/logout" element={<LogoutPage onLogout={onLogout} />} />
        <Route path="/*" element={<NotFound onLogout={onLogout} />} />
      </Routes>
    );
  }
};

export { PrivateRoutes };
