import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Row, Form, Alert } from "react-bootstrap";
import { Facebook, Google, Linkedin } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRegister } from "./useRegister";

AOS.init();

const RegisterPage = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const { toRegister, created, error } = useRegister();

  const onSubmit = (data) => {
    console.log("🚀 ~ file: index.jsx:24 ~ onSubmit ~ data:", data);
    toRegister(data);
    reset();
  };

  return (
    <div className="container-login">
      <Row className="container-form-login">
        <Col md="6" data-aos="fade-left" data-aos-duration="1500">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="justify-content-center flex-column pt-4 gap-3">
              <Col>
                <h1 className="text-center">Registrar Cuenta</h1>
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

                <button type="submit" className="action register">
                  Registrar
                </button>
                <Alert
                  variant={`${error ? "danger" : "success"}`}
                  show={created}
                >
                  <Alert.Heading>
                    {error ? "Ups" : "Felicidades!"}
                  </Alert.Heading>
                  <p>
                    {error
                      ? "Hubo un error para crear su cuenta"
                      : "Ha creado su cuenta correctamente"}
                  </p>
                </Alert>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col
          className="overlay-left"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <h1>Bienvenido, ¿Ya creaste tu cuenta?</h1>
          <p>Ve a iniciar sesión:</p>
          <Link to="/login">
            <button className="action ghost">Iniciar Sesión</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export { RegisterPage };
