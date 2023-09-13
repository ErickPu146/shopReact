import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
import { Col, Row, Form, Alert } from "react-bootstrap";
import { Facebook, Google, Linkedin } from "react-bootstrap-icons";
import { Link, Navigate } from "react-router-dom";
import { useLogin } from "./useLogin";
import { useForm } from "react-hook-form";

AOS.init();

const LoginPage = ({ isLogged, onLogin }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const { toLogin, logged, error, tried } = useLogin();

  const onSubmit = (data) => {
    console.log("🚀 ~ file: index.jsx:24 ~ onSubmit ~ data:", data);
    toLogin(data);
    reset();
  };

  if (logged) {
    onLogin();
  }

  if (isLogged) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="container-login">
      <Row className="container-form-login">
        <Col md="6" data-aos="fade-left" data-aos-duration="1500">
          <Form onSubmit={handleSubmit(onSubmit)}>
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
                <Form.Group>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className={`${errors.email ? "is-invalid" : ""}`}
                    {...register("email", {
                      required: "Campo requerido",
                    })}
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email.message}</span>
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className={`${errors.password ? "is-invalid" : ""}`}
                    {...register("password", {
                      required: "Campo requerido",
                    })}
                  />
                  {errors.password && (
                    <span className="text-danger">
                      {errors.password.message}
                    </span>
                  )}
                </Form.Group>
                <a href="#">Olvidaste tu contraseña?</a>
                <button type="submit" className="action login">
                  Iniciar sesión
                </button>
                <Alert variant="danger" show={error}>
                  <Alert.Heading>Ups</Alert.Heading>
                  <p>El usuario no fue encontrado</p>
                </Alert>
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
