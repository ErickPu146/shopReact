import { createContext, useState } from "react";
import { createOne, deleteOne, editOne, getAll, getOne } from "../api";
const moment = require("moment");

export const ContentContext = createContext();

const modalDataOption = {
  users: {
    title: "Usuario",
    data: [
      { title: "email", type: "email" },
      { title: "password", type: "password" },
      { title: "rol", type: "text" },
    ],
  },
  brands: {
    title: "Marca",
    data: [{ title: "name", type: "text" }],
  },
  categories: {
    title: "Categoria",
    data: [{ title: "name", type: "text" }],
  },
  products: {
    title: "Producto",
    data: [
      { title: "name", type: "text" },
      { title: "price", type: "number" },
      { title: "brandId", type: "select" },
      { title: "categoryId", type: "select" },
      { title: "userId", type: "select" },
    ],
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
  const [dataToSelectsProduct, setDataToSelectProduct] = useState({});

  const getCurrentDataTable = async (location) => {
    setError(false);
    setDataToEdit({});
    location = location.slice(1);
    setCurrentLocation(location);

    let data = await getAll(location);
    data = data.map((item) => ({
      ...item,
      createdAt: moment(item.createdAt).format("DD-MM-YYYY"),
      updatedAt: moment(item.updatedAt).format("DD-MM-YYYY"),
    }));
    setCurrentDataTable(data);

    if (location === "products") {
      const users = await getAll("users");
      const userOptions = users.map((user) => ({
        value: user.id,
        label: user.email,
      }));
      const brands = await getAll("brands");
      const brandOptions = brands.map((brand) => ({
        value: brand.id,
        label: brand.name,
      }));
      const categories = await getAll("categories");
      const categoryOptions = categories.map((category) => ({
        value: category.id,
        label: category.name,
      }));
      setDataToSelectProduct({
        userId: userOptions,
        brandId: brandOptions,
        categoryId: categoryOptions,
      });
    }
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
    dataToSelectsProduct,
    currentLocation,
  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};
