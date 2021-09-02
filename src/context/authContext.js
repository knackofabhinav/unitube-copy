import { useNavigate, useLocation } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useDataContext } from "../context/dataContext";
import axios from "axios";
import { setupAuthHeaders, initialAPIConfig } from "../api.config";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  initialAPIConfig();
  const localLoginStatus = !!JSON.parse(localStorage.getItem("user"))
    ?.isLoggedIn
    ? true
    : false;
  const [isLoggedIn, setIsLoggedIn] = useState(localLoginStatus);
  const navigate = useNavigate();
  const { dispatch } = useDataContext();
  const location = useLocation();

  const login = async (loginCredentials) => {
    try {
      const response = await axios.post("/login", {
        username: loginCredentials.username,
        password: loginCredentials.password,
      });
      if (response.data.success) {
        setIsLoggedIn(true);
        localStorage?.setItem(
          "user",
          JSON.stringify({
            isLoggedIn: true,
            authToken: response.data.authToken,
          })
        );
        toast.success("logged in successfully");
        navigate(location.state?.from ? location.state.from : "/");
        setupAuthHeaders(response.data.authToken);
        dispatch({ type: "LOGGED_IN", payload: response.data.user });
      }
    } catch (error) {
      if (error?.response?.status === 401) {
        toast.error(error.response.data.message);
      }
      if (error?.response?.status === 400) {
        toast.error(error.response.data.message);
      }
      if (error?.response?.status === 409) {
        toast.error(error.response.data.message);
      }
      if (error?.response?.status === 500) {
        toast.error(error.response.data.message);
      }
    }
  };

  const signup = async (signupCredentials) => {
    try {
      const res = await axios.post("/signup", signupCredentials);
      if (res.status)
        toast.success("Account created successfully. Please Login.");
    } catch (err) {
      if (err.response.status === 409) toast.error(err.response.data.message);
      console.error(err.response);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        logout,
        login,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
