import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Row } from "react-bootstrap";

AOS.init();

const NotFound = () => {
  return (
    <div className="container-login">
      <Row className="container-form-login">
        <Col md="6" data-aos="fade-left" data-aos-duration="1500" className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center">404 NotFound</h1>
        </Col>
        <Col className="overlay" data-aos="fade-right" data-aos-duration="900">
          <h1>La ruta no existe</h1>
          <p>Regrese</p>
        </Col>
      </Row>
    </div>
  );
};

export { NotFound };
