import React, { useContext } from "react";
import { Plus, Search } from "react-bootstrap-icons";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ContentContext } from "../../context";
import { TableCrud } from "../../components/Table";
import "../style.css";
import { AlertError } from "../../components/AlertError";

const CategoriesCrud = () => {
  const { theme, handleShowModal } =
    useContext(ContentContext);

  return (
    <>
      <Container className={`${theme === "light" ? "" : "text-light"}`}>
        <div
          className={`${
            theme === "light" ? "shadowLight" : "shadowDark"
          } text-center w-100 mt-3 p-1`}
        >
          <h1>Categorias</h1>
        </div>
        <Row className="justify-content-center my-4">
          <Col md="4">
            <Button
              value="new"
              variant="success"
              onClick={(e) =>
                handleShowModal(e.currentTarget.value)
              }
            >
              <Plus className="fs-2" />
              <span>Nuevo</span>
            </Button>
          </Col>
          <Col md="8" className="d-flex">
            <Form.Control
              className="w-50 rounded-start-pill"
              size="lg"
              placeholder="Buscar por nombre de categoria"
            ></Form.Control>
            <Button variant="success" className="rounded-end-pill px-4">
              <Search />
            </Button>
          </Col>
          <Col className="mt-4">
            <AlertError />
          </Col>
        </Row>
        <TableCrud />
      </Container>
    </>
  );
};

export { CategoriesCrud };
