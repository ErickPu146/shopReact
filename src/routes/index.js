import React from "react";
import { useAuth } from "./useAuth";
import { LoginPage } from "../pages/Login";
import { Route, Routes } from "react-router-dom";
import { AppUI } from "../App/appUI";
import { RegisterPage } from "../pages/Register";

const RoutesApp = () => {
  const { isLogged, handleLogin, handleLogout } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/*"
        element={<AppUI isLogged={isLogged} onLogout={handleLogout} />}
      />
    </Routes>
  );
};

export { RoutesApp };
