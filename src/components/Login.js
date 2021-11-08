import React, { useState } from "react";
import linkedinlogo from "../assets/images/linkedIn.png";
import "../assets/styles/Login.css";

const Login = () => {
  const [LoginPage, setLoginPage] = useState(true);

  return (
    <div className="login-container">
      <img src={linkedinlogo} alt="LinkedIn-Logo" />
      {LoginPage ? (
        <div className="login-form">
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account?{" "}
            <span className="register-link" onClick={() => setLoginPage(false)}>
              Sign Up
            </span>
          </p>
        </div>
      ) : (
        <div className="signup-form">
          <form>
            <input type="text" placeholder="Enter Full Name" />
            <input type="text" placeholder="Enter Profile Photo URL" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account?{" "}
            <span className="register-link" onClick={() => setLoginPage(true)}>
              Login
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
