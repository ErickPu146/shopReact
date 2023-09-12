import React, { useContext } from "react";
import { SidebarApp } from "../components/Sidebar";
import { ContentContext } from "../context";
import { ProSidebarProvider } from "react-pro-sidebar";
import ModalCrud from "../components/ModalCrud";
import { PrivateRoutes } from "../routes/privateRoutes";
import { Navigate } from "react-router-dom";

const AppUI = ({ isLogged, onLogout }) => {
  const { theme } = useContext(ContentContext);

  if (!isLogged) {
    return <Navigate to="/login" />;
  } else {
    return (
      <>
        <div className="d-flex">
          <ProSidebarProvider>
            <SidebarApp />
          </ProSidebarProvider>
          <div
            style={{ flex: 1 }}
            className={`${theme === "light" ? "bg-light" : "bg-dark"}`}
          >
            <ModalCrud />
            <PrivateRoutes />
          </div>
        </div>
      </>
    );
  }
};

export { AppUI };
