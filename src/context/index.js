import { createContext, FC, useState } from "react";
import { getAllUsers } from "../api";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [users, setUser] = useState([{}]);
  const [theme, setTheme] = useState("light")

  const getCustomUsers = async () => {
    const data = await getAllUsers();
    setUser(data);
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
    users,
    getCustomUsers,
    deleteUser
  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};
