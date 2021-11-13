import React from "react";
import "../assets/styles/LeftSidebar.css";
import Background from "../assets/images/bgimage.jpg";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const LeftSidebar = () => {
  const { email, displayName, photoURL } = useSelector(selectUser);

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
          <Avatar src={photoURL} />
        </div>
        <div style={{ borderBottom: "0.1px solid #dfdedb" }}>
          <h4>{displayName}</h4>
          <p>{email}</p>
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
