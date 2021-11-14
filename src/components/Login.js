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
  const [DisplayName, setDisplayName] = useState("");
  const [PhotoURL, setPhotoURL] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  // signin fields
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");

  const SignupHandler = (e) => {
    e.preventDefault();

    if (
      DisplayName.trim().length > 0 &&
      // PhotoURL.trim().length > 0 &&
      Email.trim().length > 0 &&
      Password.trim().length > 7
    ) {
      auth
        .createUserWithEmailAndPassword(Email, Password)
        .then((auth) => {
          auth.user.updateProfile({
            displayName: DisplayName,
            photoURL: PhotoURL,
          });
        })
        .then(() => {
          dispatch(
            login({
              email: Email,
              displayName: DisplayName,
              photoURL: PhotoURL,
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
          // console.log(
          //   auth.user.email,
          //   auth.user.displayName,
          //   auth.user.photoURL
          // );
          dispatch(
            login({
              email: auth.user.email,
              displayName: auth.user.displayName,
              photoURL: auth.user.photoURL,
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
              value={DisplayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Profile Photo URL"
              value={PhotoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
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
