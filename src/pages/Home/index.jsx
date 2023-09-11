import React, { useContext } from "react";
import { ContentContext } from "../../context";
import { Container } from "react-bootstrap";

const Home = () => {
  const { theme } = useContext(ContentContext);

  return (
    <>
      <Container className={`${theme === "light" ? "" : "text-light"}`}>
        <div>Contenido que aparecerá al lado del sidebar</div>
      </Container>
    </>
  );
};

export { Home };
