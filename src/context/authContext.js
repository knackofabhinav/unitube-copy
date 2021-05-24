import { useNavigate } from "react-router-dom";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const loginStatus = JSON.parse(localStorage?.getItem("login"));
    loginStatus?.login && setLogin(true);
  }, []);

  const logoutUser = () => {
    setLogin(false);
    localStorage.removeItem("login");
    navigate("/");
  };
  return (
    <AuthContext.Provider value={{ login, logoutUser, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
