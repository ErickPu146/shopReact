import "./app.css";
import { AppUI } from "./appUI";
import { BrowserRouter as Router } from "react-router-dom";
import { ContentProvider } from "../context";

function App() {
  return (
    <>
      <Router>
        <ContentProvider>
            <AppUI />
        </ContentProvider>
      </Router>
    </>
  );
}

export default App;
