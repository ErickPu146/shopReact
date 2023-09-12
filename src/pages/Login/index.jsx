import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
import { Col, Row, Form } from "react-bootstrap";
import { Facebook, Google, Linkedin } from "react-bootstrap-icons";
import { Link, Navigate } from "react-router-dom";

AOS.init();

const LoginPage = ({ isLogged, onLogin }) => {
  if (isLogged) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="container-login">
      <Row className="container-form-login">
        <Col md="6" data-aos="fade-left" data-aos-duration="1500">
          <Form>
            <Row className="justify-content-center flex-column pt-4 gap-3">
              <Col>
                <h1 className="text-center">Iniciar Sesión</h1>
              </Col>
              <Col>
                <div className="social-container d-flex justify-content-center">
                  <a className="social">
                    <Facebook />
                  </a>
                  <a className="social>">
                    <Google />
                  </a>
                  <a className="social">
                    <Linkedin />
                  </a>
                </div>
              </Col>
              <Col className="d-flex flex-column gap-3">
                <span>O usa tu email</span>
                <Form.Control type="email" placeholder="Email" />
                <Form.Control type="password" placeholder="Password" />
                <a href="#">Olvidaste tu contraseña?</a>
                <button className="action login" onClick={onLogin}>
                  Iniciar sesión
                </button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col className="overlay" data-aos="fade-right" data-aos-duration="900">
          <h1>¿No tienes cuenta?</h1>
          <p>Registra tu cuenta:</p>
          <Link to="/register">
            <button className="action ghost">Registrar</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export { LoginPage };
