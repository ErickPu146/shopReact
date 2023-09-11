import { useContext, useState } from "react";
import { ContentContext } from "../../context";
import { Modal, Form, Button } from "react-bootstrap";

const ModalCrud = () => {
  const {
    showModal,
    handleCloseModal,
    currentDataModal,
    optionModal,
    sendData,
  } = useContext(ContentContext);

  console.log(
    "🚀 ~ file: index.jsx:8 ~ ModalCrud ~ currentDataModal:",
    currentDataModal.data
  );

  const title = currentDataModal.title;
  const data = currentDataModal.data;

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
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
                  <Form.Control />
                </Form.Group>
              ))}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button
            value={optionModal}
            variant="primary"
            onClick={sendData}
          >
            {optionModal === "new" ? "Crear" : "Actualizar"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCrud;
