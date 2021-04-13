import { useState } from "react";
import { useLogin } from "../../context/authContext";
import "./Login.css";
import {useLocation, useNavigate} from "react-router-dom"

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {login ,setLogin} = useLogin()
  const {state} = useLocation()
  const navigate = useNavigate()
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
              placeholder="Username"
              aria-label="Username"
            />
          </div>
          <div className="input-container">
            <input
              type={!showPassword && "password"}
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
          <button className="btn primary" type="button" onClick={() => {
            setLogin(!login) 
            navigate(state.from)
            }}>{login ? "LogOut" : "LogIn"}</button>
          <p>Forgot Password?</p>
          <button className="btn text">Sign Up</button>
        </form>
      </div>
    </div>
  );
};
