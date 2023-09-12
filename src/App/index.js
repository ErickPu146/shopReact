import "./app.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ContentProvider } from "../context";
import { RoutesApp } from "../routes";

function App() {
  return (
    <>
      <Router>
        <ContentProvider>
            <RoutesApp />
        </ContentProvider>
      </Router>
    </>
  );
}

export default App;
