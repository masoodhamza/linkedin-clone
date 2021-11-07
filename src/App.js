import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Feeds from "./components/Feeds";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import Login from "./components/Login";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);

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
