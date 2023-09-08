import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
import logo from "../../assets/images/logo.png";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import { Formulario } from "../../components/Formulario";

AOS.init();

const Login = () => {
  return (
    <div>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col data-aos="fade-right" md={5}>
            <Card bg="transparent" className="border border-0">
              <Card.Title className="text-secondary text-center fs-1 fw-bolder abril-font">
                Bienvenido!
              </Card.Title>
              <Image src={logo} roundedCircle />
            </Card>
          </Col>
          <Col
            data-aos="fade-left"
            md={5}
            className="second-login-card rounded-5 p-4"
          >
            <Card
              bg="transparent"
              className="border border-0 text-light d-flex gap-2"
            >
              <Card.Title className="text-center fw-bolder fs-2">
                Inicia sesión
              </Card.Title>
              <Card.Body>
                <p className="abril-font text-center fs-2">RUN & LIVE</p>
                <Formulario />
              </Card.Body>
              <Card.Footer>
                ¿No tienes cuenta?
                <a href="/login" className="text-info text-decoration-none">
                  {" "}
                  Resgistrate!
                </a>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { Login };
