import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Messaging from "./pages/Messaging";
import Networks from "./pages/Networks";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // user is loggedin
        dispatch(
          login({
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      } else {
        // user is not loggedin
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <>
        {!user ? (
          <Login />
        ) : (
          <div className="app">
            <Header />
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/networks" element={<Networks />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/messaging" element={<Messaging />} />
              </Routes>
            </div>
          </div>
        )}
      </>
    </Router>
  );
}

export default App;
