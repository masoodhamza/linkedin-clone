import React, { useState } from "react";
import { auth } from "../firebase";
import linkedinlogo from "../assets/images/linkedIn.png";
import "../assets/styles/Login.css";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [LoginPage, setLoginPage] = useState(true);

  // signup fields
  const [FullName, setFullName] = useState("");
  const [ProfileURL, setProfileURL] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  // signin fields
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");

  const SignupHandler = (e) => {
    e.preventDefault();

    if (
      FullName.trim().length > 0 &&
      ProfileURL.trim().length > 0 &&
      Email.trim().length > 0 &&
      Password.trim().length > 7
    ) {
      auth
        .createUserWithEmailAndPassword(Email, Password)
        .then((auth) => {
          auth.user.updateProfile({
            FullName: FullName,
            ProfileURL: ProfileURL,
          });
        })
        .then(() => {
          dispatch(
            login({
              Email: Email,
              FullName: FullName,
              ProfileURL: ProfileURL,
            })
          );
        })
        .catch((error) => alert(error.message));
    } else {
      alert("Please fill all the fields");
    }
  };

  const SigninHandler = (e) => {
    e.preventDefault();

    if (LoginEmail.trim().length > 0 && LoginPassword.trim().length > 7) {
      auth
        .signInWithEmailAndPassword(LoginEmail, LoginPassword)
        .then((auth) => {
          dispatch(
            login({
              Email: auth.Email,
              FullName: auth.FullName,
              ProfileURL: auth.ProfileURL,
            })
          );
        })
        .catch((error) => alert(error.message));
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="login-container">
      <img src={linkedinlogo} alt="LinkedIn-Logo" />
      {LoginPage ? (
        <div className="login-form">
          <form onSubmit={SigninHandler}>
            <input
              value={LoginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <input
              value={LoginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
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
          <form onSubmit={SignupHandler}>
            <input
              type="text"
              placeholder="Enter Full Name"
              value={FullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Profile Photo URL"
              value={ProfileURL}
              onChange={(e) => setProfileURL(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
