import React, { useContext } from "react";
import { SidebarApp } from "../components/Sidebar";
import { ContentContext } from "../context";
import { ProSidebarProvider } from "react-pro-sidebar";
import ModalCrud from "../components/ModalCrud";
import { PrivateRoutes } from "../routes/privateRoutes";
import { Navigate } from "react-router-dom";

const AppUI = ({ onLogout }) => {
  const { theme } = useContext(ContentContext);

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
          <PrivateRoutes onLogout={onLogout} />
        </div>
      </div>
    </>
  );
};

export { AppUI };
