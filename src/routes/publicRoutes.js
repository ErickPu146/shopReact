import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import { useAuth } from "./useAuth";

const PublicRoutes = () => {
  const { handleLogin } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export { PublicRoutes };
