import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const Formulario = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="gap-4">
        <Form.Group as={Col} xs={12} controlId="validationCustom01">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            size="lg"
            required
            type="email"
            placeholder="ejemplo@gmail.com"
          />
        </Form.Group>
        <Form.Group as={Col} xs={12} controlId="validationCustom02">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control 
            size="lg"
            required
            type="password"
          />
        </Form.Group>
      </Row>
    </Form>
  );
};

export { Formulario };
