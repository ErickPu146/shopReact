import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  const reviewIsLogged = () => {
    const token = JSON.parse(localStorage.getItem("TOKENLOGGER"));
    if (token) {
      setIsLogged(true);
    }
  };


  const handleLogin = () => {
    setIsLogged(true);
    navigate("/home");
  };

  const handleLogout = () => {
    localStorage.removeItem("TOKENLOGGER");
    localStorage.removeItem("USERLOGGER");
    setIsLogged(false);
    navigate("/login");
  };

  return { isLogged, handleLogin, handleLogout, reviewIsLogged };
};

export { useAuth };
