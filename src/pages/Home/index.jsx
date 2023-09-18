import React, { useContext } from "react";
import { ContentContext } from "../../context";
import { Container } from "react-bootstrap";

const Home = () => {
  const { theme } = useContext(ContentContext);

  return (
    <>
      <Container className={`${theme === "light" ? "" : "text-light"}`}>
        <div>Este es el home</div>
      </Container>
    </>
  );
};

export { Home };
