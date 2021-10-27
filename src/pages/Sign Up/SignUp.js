import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import "./SignUp.css";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signup } = useAuth();

  const [signupCredentials, setSignupCredentials] = useState({
    username: "",
    password: "",
  });

  return (
    <div className="login-container">
      <div className="login">
        <h2>Signup</h2>
        <div className="input-container">
          <input
            onChange={(e) =>
              setSignupCredentials({
                ...setSignupCredentials,
                username: e.target.value,
              })
            }
            placeholder="Username"
            aria-label="Username"
          />
        </div>
        <div className="input-container">
          <input
            onChange={(e) =>
              setSignupCredentials({
                ...signupCredentials,
                password: e.target.value,
              })
            }
            type={!showPassword ? "password" : "text"}
            placeholder="Password"
            aria-label="Username"
          />
          <button
            className="btn secondary outline"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div>
          <button
            className="btn secondary"
            onClick={() => signup(signupCredentials)}
          >
            Sign Up
          </button>
          <Link to="/login">
            <p style={{ textAlign: "center" }}>Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
