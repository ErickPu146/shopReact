import React, { useContext } from "react";
import { SidebarApp } from "../components/Sidebar";
import { RoutesApp } from "../routes";
import { ContentContext } from "../context";
import { ProSidebarProvider } from "react-pro-sidebar";
import ModalCrud from "../components/ModalCrud";

const AppUI = () => {
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
          <RoutesApp />
        </div>
      </div>
    </>
  );
};

export { AppUI };
