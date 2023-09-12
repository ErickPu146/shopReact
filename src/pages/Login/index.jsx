import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
import logo from "../../assets/images/logo.png";
import { Card, Col, Container, Row, Image, Form } from "react-bootstrap";
import { FormularioLogin } from "../../components/FormularioLogin";
import { Facebook, Google, Linkedin } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

AOS.init();

const LoginPage = () => {
  return (
    <Container>
      <Row>
        <Col md="6">
          <Form>
            <Row className="justify-content-center flex-column pt-4">
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
              <Col className="d-flex flex-column">
                <span>O usa tu email</span>
                <Form.Control type="email" placeholder="Email" />
                <Form.Control type="password" placeholder="Password" />
                <a href="#">Olvidaste tu contraseña?</a>
                <button type="button" className="action">Iniciar sesión</button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1>¿No tienes cuenta?</h1>
                <p>Registra tu cuenta:</p>
                <button className="ghost" to="/register">
                  Registrar
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export { LoginPage };
