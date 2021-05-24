import { Link } from "react-router-dom";
import { useState } from "react";
import { instance } from "../../App";
import "./SignUp.css";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signupAlert, setSignupAlert] = useState(null);
  const [signupCredentials, setSignupCredentials] = useState({
    username: "",
    password: "",
  });

  const signupHandler = async (signupCredentials) => {
    try {
      const res = await instance.post("/signup", signupCredentials);
      console.log(res);
      setSignupAlert(true);
    } catch (err) {
      setSignupAlert(false);
      console.log(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <h2>Signup</h2>
        {signupAlert === true && (
          <div className="alert success">
            <i className="fas fa-exclamation-triangle"></i>
            <p>Account created successfully! Please login.</p>
          </div>
        )}{" "}
        {signupAlert === false && (
          <div className="alert danger">
            <i className="fas fa-check-circle"></i>
            <p>Failed to create new account. sorry 😢</p>
          </div>
        )}
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
            onClick={() => signupHandler(signupCredentials)}
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
