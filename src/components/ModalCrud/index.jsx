import { useContext, useEffect } from "react";
import { ContentContext } from "../../context";
import { Modal, Form, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";

const ModalCrud = () => {
  const {
    showModal,
    handleCloseModal,
    currentDataModal,
    optionModal,
    dataToEdit,
    sendDataToCreate,
    sendDataToEdit,
  } = useContext(ContentContext);
  const {
    setValue,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("🚀 ~ file: index.jsx:24 ~ onSubmit ~ data:", data);
    handleCloseModal();
    if (optionModal === "new") {
      sendDataToCreate(data);
    } else {
      sendDataToEdit(dataToEdit.id, data);
    }
    reset();
  };

  const title = currentDataModal.title;
  const data = currentDataModal.data;

  useEffect(() => {
    for (const key in dataToEdit) {
      if (Object.hasOwnProperty.call(dataToEdit, key)) {
        if (key !== "id" && key !== "createdAt" && key !== "updatedAt") {
          setValue(key, dataToEdit[key]);
        }
      }
    }
  }, [dataToEdit]);

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
                    <Controller
                      name={item}
                      control={control}
                      rules={{ required: "Campo requerido" }}
                      render={({ field }) => (
                        <Form.Control
                          autoComplete="off"
                          defaultValue={dataToEdit[item] || ""}
                          type={index === 0 ? "email" : "password"}
                          className={` ${errors[item] ? "is-invalid" : ""}`}
                          value={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    />
                  </Form.Group>
                ))}
              </>
            ) : (
              <>
                {data.map((item) => (
                  <Form.Group>
                    <Form.Label>{item}</Form.Label>
                    <Controller
                      name={item}
                      control={control}
                      rules={{ required: "Campo requerido" }}
                      render={({ field }) => (
                        <Form.Control
                          autoComplete="off"
                          defaultValue={dataToEdit[item] || ""}
                          type="text"
                          className={`${errors[item] ? "is-invalid" : ""}`}
                          value={field.value}
                          onChange={field.onChange}
                        />
                      )}
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
            <Button type="submit" value={optionModal} variant="primary">
              {optionModal === "new" ? "Crear" : "Actualizar"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ModalCrud;
