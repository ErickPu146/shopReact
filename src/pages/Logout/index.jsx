import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Row } from "react-bootstrap";

AOS.init();

const LogoutPage = ({ onLogout }) => {
  return (
    <div className="container-login">
      <Row className="container-form-login">
        <Col md="6" data-aos="fade-left" data-aos-duration="1500" className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center">Para cerrar sesión</h1>
          <button type="button" className="action login" onClick={onLogout}>
            Cerrar sesión
          </button>
        </Col>
        <Col className="overlay" data-aos="fade-right" data-aos-duration="900">
          <h1>¿Estas seguro de salir?</h1>
          <p>Esperamos que vuelvas!</p>
        </Col>
      </Row>
    </div>
  );
};

export { LogoutPage };
