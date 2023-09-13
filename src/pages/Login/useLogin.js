import { useState } from "react";
import { loginUser } from "../../api";

const useLogin = () => {
  const [logged, setLogged] = useState(false);
  const [tried, setTried] = useState(false)
  const [error, setError] = useState(false);

  const toLogin = async (data) => {
    const user = await loginUser(data);
    console.log("🚀 ~ file: useLogin.js:10 ~ toLogin ~ user:", user)
    if (user.error) {
      setError(true);
      setTried(true)
    } else {
      setLogged(true);
    }
  };

  return { toLogin, logged, error, tried };
};

export { useLogin };
