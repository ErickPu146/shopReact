import { useContext, useEffect } from "react";
import { ContentContext } from "../../context";
import { Modal, Form, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const ModalCrud = () => {
  const {
    showModal,
    handleCloseModal,
    currentDataModal,
    optionModal,
    dataToEdit,
    sendDataToCreate,
    sendDataToEdit,
    currentLocation,
    dataToSelectsProduct,
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

    if (currentLocation === "products") {
      data.brandId = data?.brandId.value;
      data.categoryId = data?.categoryId.value;
      data.userId = data?.userId.value;
    }

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

    data.forEach((item) => {
      if (item.type === "select" && dataToEdit[item.title]) {
        const selectedOption = dataToSelectsProduct[item.title].find(
          (option) => option.value === dataToEdit[item.title]
        );
        console.log("🚀 ~ file: index.jsx:62 ~ data.forEach ~ selectedOption:", selectedOption)

        if (selectedOption ) {
          setValue(item.title, selectedOption);
        }
      }
    });
  }, [dataToEdit]);

  const createFormField = (item) => {
    return (
      <Form.Group key={item.title}>
        <Form.Label>{item.title}</Form.Label>
        <Controller
          name={item.title}
          control={control}
          rules={{ required: "Campo requerido" }}
          render={({ field }) => (
            <>
              {item.type === "select" ? (
                <Select
                  name={field.name}
                  placeholder="Seleccionar una opción"
                  value={field.value || ""}
                  options={dataToSelectsProduct[item.title]}
                  ref={field.ref}
                  onChange={field.onChange}
                  className={`${
                    errors[item.title]
                      ? "border border-danger border-1 rounded"
                      : ""
                  }`}
                />
              ) : (
                <Form.Control
                  autoComplete="off"
                  type={item.type}
                  className={`${errors[item.title] ? "is-invalid" : ""}`}
                  {...field}
                />
              )}
              {errors[item.title] && (
                <div className="invalid-feedback">
                  {errors[item.title].message}
                </div>
              )}
            </>
          )}
        />
      </Form.Group>
    );
  };

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
          <Modal.Body>{data.map((item) => createFormField(item))}</Modal.Body>
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
