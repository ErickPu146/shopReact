import { createContext, useState } from "react";
import { getAllUsers } from "../api";

export const ContentContext = createContext();

const mock = [
  {
    id: 1,
    email: "<NAME>",
    createdAt: "<EMAIL>",
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
    data: ["Correo electrónico", "Contraseña"],
  },
  brands: {
    title: "Marca",
    data: ["Nombre de marca"],
  },
  categories: {
    title: "Categoria",
    data: ["Nombre de categoria"],
  },
  products: {
    title: "Producto",
    data: [
      "Nombre de producto",
      "Precio",
      "Id marca",
      "Id categoria",
      "Id usuario",
    ],
  },
};

export const ContentProvider = ({ children }) => {
  const [users, setUser] = useState([{}]);
  const [theme, setTheme] = useState("light");
  const [showModal, setShowModal] = useState(false);
  const [currentDataModal, setCurrentData] = useState(modalDataOption["users"]);
  const [optionModal, setOptionModal] = useState(null);
  const [currentLocation, setCurrentLocation] = useState();

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (option, location) => {
    location = location.slice(1);
    setOptionModal(option);
    setCurrentLocation(location);
    setCurrentData(modalDataOption[location]);
    setShowModal(true);
  };

  const sendData = () => {
    alert(`Send to: ${currentLocation}, and was ${optionModal}`);
  };

  const getCustomUsers = async () => {
    const data = await getAllUsers();
    setUser(mock);
  };

  const deleteUser = (selectedUsers) => {
    if (selectedUsers.size > 0) {
      setUser((prevData) =>
        prevData.filter((record) => !selectedUsers.has(record.id))
      );
    } else {
      setUser((prevData) =>
        prevData.filter((record) => record.id !== selectedUsers)
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
    sendData,
    users,
    getCustomUsers,
    deleteUser,
  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};
