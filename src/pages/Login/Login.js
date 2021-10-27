import { useState } from "react";
import { useAuth } from "../../context/authContext";
import "./Login.css";
import { Link } from "react-router-dom";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const [loginCredentials, setLoginCredentials] = useState({
    username: "admin",
    password: "admin",
  });

  return (
    <div className="login-container">
      <form className="login">
        <h2>Login</h2>
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
              login(loginCredentials);
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
