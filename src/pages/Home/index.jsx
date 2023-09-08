import React from "react";
import { SidebarApp } from "../../components/Sidebar";
const Home = () => {
  return (
    <>
      <div className="d-flex">
        <SidebarApp />
        <div style={{ flex: 1 }}>
          <div>Contenido que aparecerá al lado del sidebar</div>
        </div>
      </div>
    </>
  );
};

export { Home };
