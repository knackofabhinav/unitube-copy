import { useNavigate } from "react-router-dom";
import { fakeAuthApi } from "../api/fakeAuthApi.js";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const loginStatus = JSON.parse(localStorage?.getItem("login"));
    loginStatus?.login && setLogin(true);
  }, []);

  

  const loginUserWithCredentials = async (username, password) => {
    try {
      const response = await fakeAuthApi(username, password);
      if (response.success) {
        setLogin(true);
        localStorage?.setItem("login", JSON.stringify({ login: true }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logoutUser = () => {
    setLogin(false);
    localStorage.removeItem("login");
    navigate("/");
  };
  return (
    <AuthContext.Provider
      value={{ login, loginUserWithCredentials, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useLogin = () => {
  return useContext(AuthContext);
};
