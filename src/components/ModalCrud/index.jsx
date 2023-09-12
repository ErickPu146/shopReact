import { useContext, useState } from "react";
import { ContentContext } from "../../context";
import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ModalCrud = () => {
  const {
    showModal,
    handleCloseModal,
    currentDataModal,
    optionModal,
    sendData,
  } = useContext(ContentContext);
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // if(!showModal) {
  //   reset();
  // }

  const onSubmit = (data) => {
    console.log("🚀 ~ file: index.jsx:24 ~ onSubmit ~ data:", data);
    reset();
  };

  const title = currentDataModal.title;
  const data = currentDataModal.data;

  return (
    <>
      <Modal
        show={showModal}
        onHide={() => {
          handleCloseModal();
          reset();
        }}
        backdrop="static"
        keyboard={false}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {title === "Usuario" ? (
              <>
                {data.map((item, index) => (
                  <Form.Group>
                    <Form.Label>{item}</Form.Label>
                    <Form.Control type={index === 0 ? "email" : "password"} />
                  </Form.Group>
                ))}
              </>
            ) : (
              <>
                {data.map((item) => (
                  <Form.Group>
                    <Form.Label>{item}</Form.Label>
                    <Form.Control
                      type="text"
                      {...register(item, {
                        required: "Campo requerido",
                      })}
                    />
                  </Form.Group>
                ))}
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                handleCloseModal();
                reset();
              }}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              value={optionModal}
              variant="primary"
              onClick={sendData}
            >
              {optionModal === "new" ? "Crear" : "Actualizar"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ModalCrud;
