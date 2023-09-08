import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { UsersCrud } from "../pages/Users";
import { ContentProvider } from "../context";

const RoutesApp = () => {
  return (
    <Router>
      <ContentProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/users-crud" element={<UsersCrud />} />
        </Routes>
      </ContentProvider>
    </Router>
  );
};

export { RoutesApp };
