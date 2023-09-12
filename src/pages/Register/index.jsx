import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./style.css";
import logo from "../../assets/images/logo.png";
import { Card, Col, Container, Row, Image, Form } from "react-bootstrap";
import { FormularioLogin } from "../../components/FormularioLogin";
import { Facebook, Google, Linkedin } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

AOS.init();

const RegisterPage = () => {
  return (
    <Container>
      <div className="form-container sign-up-container">
        <Form action="#">
          <h1>Crea tu Cuenta</h1>
          <div className="social-container">
            <a href="#" className="social>">
              <Facebook />
            </a>
            <a href="#" className="social>">
              <Google />
            </a>
            <a href="#" className="social>">
              <Linkedin />
            </a>
          </div>
          <span>o usa tu email como registro</span>
          <Form.Control type="text" placeholder="Name" />
          <Form.Control type="email" placeholder="Email" />
          <Form.Control type="password" placeholder="Password" />
          <button id="lila">Registrar</button>
        </Form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>¡Bienvenido!</h1>
            <p>Inicia sesión con tu cuenta</p>
            <button className="ghost" id="signIn">
              <Link to="/login">Inicia sesión</Link>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { RegisterPage };
