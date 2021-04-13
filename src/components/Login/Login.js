import { useState } from "react";
import { useLogin } from "../../context/authContext";
import "./Login.css";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login, loginUserWithCredentials } = useLogin();
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10rem" }}
    >
      <div className="container">
        <form>
          <div className="input-container">
            <span>@</span>
            <input
              type="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              aria-label="Username"
            />
          </div>
          <div className="input-container">
            <input
              type={!showPassword && "password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              aria-label="Password"
            />
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? "Hide Password" : "Show Password"}
            </span>
          </div>
          <button
            className="btn primary"
            type="button"
            onClick={() => {
              loginUserWithCredentials(username, password);
              // navigate(state?.from ? state.from : "/");
            }}
          >
            {login ? "LogOut" : "LogIn"}
          </button>
          <p>Forgot Password?</p>
          <button className="btn text">Sign Up</button>
        </form>
      </div>
    </div>
  );
};
