import { useState } from "react";
import { instance } from "../../App";
import { useAuth } from "../../context/authContext";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showWrongCredentialsAlert, setShowWrongCredentialsAlert] =
    useState(null);
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });
  const { setLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = async (loginCredentials) => {
    try {
      const response = await instance.post("/login", {
        username: loginCredentials.username,
        password: loginCredentials.password,
      });
      if (response.data.success) {
        setLogin(true);
        localStorage?.setItem("login", JSON.stringify({ login: true }));
        navigate(location.state?.from ? location.state.from : "/");
        console.log({ location });
      }
      console.log(response.data);
    } catch (error) {
      setShowWrongCredentialsAlert(true);
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <form className="login">
        <h2>Login</h2>
        {showWrongCredentialsAlert && (
          <div className="alert danger">
            <i className="fas fa-exclamation-triangle"></i>
            <p> Wrong credentials provided. </p>
          </div>
        )}
        <div className="input-container">
          <input
            value={loginCredentials.username}
            onChange={(e) =>
              setLoginCredentials({
                ...loginCredentials,
                username: e.target.value,
              })
            }
            placeholder="Username"
            aria-label="Username"
          />
        </div>
        <div className="input-container">
          <input
            value={loginCredentials.password}
            onChange={(e) =>
              setLoginCredentials({
                ...loginCredentials,
                password: e.target.value,
              })
            }
            type={!showPassword ? "password" : "text"}
            placeholder="Password"
            aria-label="Username"
          />
          <button
            type="button"
            className="btn secondary outline"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div>
          <button
            className="btn primary"
            onClick={(e) => {
              e.preventDefault();
              loginHandler(loginCredentials);
            }}
          >
            Login
          </button>
          <Link to="/signup">
            <p style={{ textAlign: "center" }}>Signup</p>
          </Link>
        </div>
      </form>
    </div>
  );
};
