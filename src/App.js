import React from "react";
import "./App.css";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <LeftSidebar />
      </div>
    </div>
  );
}

export default App;
