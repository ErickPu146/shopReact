import jwt_decode from "jwt-decode";
import { useState } from "react";
import { loginUser } from "../../api";

const useLogin = () => {
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState(false);

  const toLogin = async (data) => {
    const user = await loginUser(data);
    if (user.error) {
      setError(true);
    } else {
      setLogged(true);
      const { token } = user.data
      localStorage.setItem("TOKENLOGGER", JSON.stringify(token));
      const decoded = jwt_decode(token);
      localStorage.setItem("USERLOGGER", JSON.stringify(decoded));
    }
  };

  return { toLogin, logged, error };
};

export { useLogin };
