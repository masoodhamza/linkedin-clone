import { Avatar } from "@mui/material";
import React from "react";
import "../assets/styles/LeftSidebar.css";
import Background from "../assets/images/bgimage.jpg";

const LeftSidebar = () => {
  const RecentItems = ({ title }) => {
    return (
      <div>
        <p className="hashtags"># {title}</p>
      </div>
    );
  };

  return (
    <div className="leftsidebar-container">
      <div className="leftsidebar">
        <img src={Background} alt="background" />
        <div className="avatar-container">
          <Avatar />
        </div>
        <div style={{ borderBottom: "0.1px solid #dfdedb" }}>
          <h4>Hamza Masood</h4>
          <p>masood.hamzaa@gmail.com</p>
        </div>
        <div className="leftsidebar-stats">
          <p className="display-stats">Who viewed your profile</p>
          <p className="number-stats">96</p>
        </div>
        <div className="leftsidebar-stats">
          <p className="display-stats">Views of your posts</p>
          <p className="number-stats">996</p>
        </div>
      </div>
      <div className="leftsidebar-recent">
        <h4>Recent</h4>
        <RecentItems title="career join" />
        <RecentItems title="dubai recruitement" />
        <RecentItems title="recruitement" />
        <RecentItems title="islamabad" />
        <RecentItems title="ios" />
      </div>
    </div>
  );
};

export default LeftSidebar;
