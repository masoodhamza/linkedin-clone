import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feeds from "./components/Feeds";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import Login from "./components/Login";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // user is loggedin
        dispatch(
          login({
            Email: user.email,
            FullName: user.FullName,
            ProfileURL: user.ProfileURL,
          })
        );
      } else {
        // user is not loggedin
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app-body">
            <LeftSidebar />
            <Feeds />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
