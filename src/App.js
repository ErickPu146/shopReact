import "./App.css";
import { RoutesApp } from "./routes";
import { ProSidebarProvider } from "react-pro-sidebar";

function App() {
  return (
    <>
      <ProSidebarProvider>
        <RoutesApp />
      </ProSidebarProvider>
    </>
  );
}

export default App;
