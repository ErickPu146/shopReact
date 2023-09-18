import React, { useEffect } from "react";
import { useAuth } from "./useAuth";
import { LoginPage } from "../pages/Login";
import { Route, Routes } from "react-router-dom";
import { AppUI } from "../App/appUI";
import { RegisterPage } from "../pages/Register";
import { NotFound } from "../pages/NotFound";

const RoutesApp = () => {
  const { isLogged, handleLogin, handleLogout, reviewIsLogged } = useAuth();

  useEffect(() => {
    reviewIsLogged();
  }, []);

  return (
    <Routes>
      {!isLogged && (
        <>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={<NotFound />} />
        </>
      )}
      <Route path="/*" element={<AppUI onLogout={handleLogout} />} />
    </Routes>
  );
};

export { RoutesApp };
