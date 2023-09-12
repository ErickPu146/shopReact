import { useState } from "react";

const useAuth = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return { isLogged, handleLogin, handleLogout }
};

export { useAuth };
