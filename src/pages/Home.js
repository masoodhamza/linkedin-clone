import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import Feeds from "../components/Feeds";

const Home = () => {
  return (
    <div className="app-body">
      <LeftSidebar />
      <Feeds />
    </div>
  );
};

export default Home;
