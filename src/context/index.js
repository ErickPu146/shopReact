import { createContext, useState } from "react";
import { createOne, deleteOne, editOne, getAll, getOne } from "../api";

export const ContentContext = createContext();

const modalDataOption = {
  users: {
    title: "Usuario",
    data: ["email", "password"],
  },
  brands: {
    title: "Marca",
    data: ["name"],
  },
  categories: {
    title: "Categoria",
    data: ["name"],
  },
  products: {
    title: "Producto",
    data: ["name", "price", "brandId", "categoryId", "userId"],
  },
};

export const ContentProvider = ({ children }) => {
  const [currentDataTable, setCurrentDataTable] = useState([{}]);
  const [theme, setTheme] = useState("light");
  const [showModal, setShowModal] = useState(false);
  const [currentDataModal, setCurrentDataModal] = useState(
    modalDataOption["users"]
  );
  const [optionModal, setOptionModal] = useState(null);
  const [currentLocation, setCurrentLocation] = useState();
  const [dataToEdit, setDataToEdit] = useState({});
  const [error, setError] = useState(false);
  const [alertErrorContent, setAlertErrorContent] = useState("");

  const getCurrentDataTable = async (location) => {
    setError(false);
    location = location.slice(1);
    setCurrentLocation(location);
    const data = await getAll(location);
    setCurrentDataTable(data);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleShowModal = async (option, idToEdit = 0) => {
    setOptionModal(option);
    setCurrentDataModal(modalDataOption[currentLocation]);
    if (idToEdit !== 0) {
      const oneData = await getOne(currentLocation, idToEdit);
      setDataToEdit(oneData);
    } else {
      setDataToEdit({});
    }
    setShowModal(true);
  };

  const sendDataToCreate = async (data) => {
    const newData = await createOne(currentLocation, data);
    if (newData.error) {
      setError(true);
      setAlertErrorContent(newData.error.message);
    } else {
      setCurrentDataTable(newData);
    }
  };

  const sendDataToEdit = async (id, data) => {
    console.log("🚀 ~ file: index.js:75 ~ sendDataToEdit ~ data:", data)
    const newData = await editOne(currentLocation, id, data);
    if (newData.error) {
      setError(true);
      setAlertErrorContent(newData.error.message);
    } else {
      setCurrentDataTable(newData);
    }
  };

  const deleteFunction = async (id) => {
    const newData = await deleteOne(currentLocation, id);
    if (newData.error) {
      setError(true);
      setAlertErrorContent(newData.error.message);
    } else {
      setCurrentDataTable(newData);
    }
  };

  const value = {
    theme,
    setTheme,
    showModal,
    handleCloseModal,
    handleShowModal,
    currentDataModal,
    optionModal,
    dataToEdit,
    sendDataToCreate,
    sendDataToEdit,
    currentDataTable,
    getCurrentDataTable,
    deleteFunction,
    error,
    setError,
    alertErrorContent,
  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};
