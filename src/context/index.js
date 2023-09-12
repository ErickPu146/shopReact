import { createContext, useState } from "react";
import { getAll, getOne } from "../api";

export const ContentContext = createContext();

const mock = [
  {
    id: 1,
    email: "<Email>",
    createdAt: "<created>",
    updatedAt: "updated",
  },
  {
    id: 5,
    email: "<NAME>",
    createdAt: "<EMAIL>",
    updatedAt: "updated",
  },
  {
    id: 2,
    email: "<NAME>",
    createdAt: "<EMAIL>",
    updatedAt: "updated",
  },
  {
    id: 3,
    email: "<NAME>",
    createdAt: "<EMAIL>",
    updatedAt: "updated",
  },
  {
    id: 4,
    email: "<NAME>",
    createdAt: "<EMAIL>",
    updatedAt: "updated",
  },
];

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
    data: [
      "name",
      "price",
      "brandID",
      "categoryId",
      "userId",
    ],
  },
};

export const ContentProvider = ({ children }) => {
  const [currentDataTable, setCurrentDataTable] = useState([{}]);
  const [theme, setTheme] = useState("light");
  const [showModal, setShowModal] = useState(false);
  const [currentDataModal, setCurrentDataModal] = useState(modalDataOption["users"]);
  const [optionModal, setOptionModal] = useState(null);
  const [currentLocation, setCurrentLocation] = useState();
  const [dataToEdit, setDataToEdit] = useState({})

  const getCurrentDataTable = async (location) => {
    location = location.slice(1);
    setCurrentLocation(location)
    const data = await getAll(location);
    setCurrentDataTable(mock);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleShowModal = async (option, idToEdit=0) => {
    console.log("🚀 ~ file: index.js:83 ~ handleShowModal ~ idToEdit:", idToEdit)
    setOptionModal(option);
    setCurrentDataModal(modalDataOption[currentLocation]);
    if(idToEdit != 0){
      const oneData = await getOne(currentLocation, idToEdit)
      setDataToEdit(mock[idToEdit])
    } else {
      setDataToEdit({})
    }
    setShowModal(true);
  };

  const sendData = () => {
    alert(`Send to: ${currentLocation}, and was ${optionModal}`); 
  };


  const deleteFunction = (selectedData) => {
    if (selectedData.size > 0) {
      setCurrentDataTable((prevData) =>
        prevData.filter((record) => !selectedData.has(record.id))
      );
    } else {
      setCurrentDataTable((prevData) =>
        prevData.filter((record) => record.id !== selectedData)
      );
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
    sendData,
    currentDataTable,
    getCurrentDataTable,
    deleteFunction,
  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};
