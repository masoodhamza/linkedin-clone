import React from "react";
import LinkedInImage from "../assets/images/linkedIn.png";
import Avatar from "../assets/images/avatar.png";
import "../assets/styles/Header.css";
import HeaderOptions from "./HeaderOptions";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { auth } from "../firebase";
import { logout, selectUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const { photoURL } = useSelector(selectUser);
  const SignoutHandler = () => {
    auth.signOut();
    dispatch(logout);
  };

  return (
    <div className="header">
      <div className="header-left">
        <img src={LinkedInImage} alt="LinkedIn-Logo" />
        <div className="header-search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header-right">
        <HeaderOptions Icon={HomeIcon} title="Home" path="/" />
        <HeaderOptions Icon={PeopleIcon} title="My Networks" path="/networks" />
        <HeaderOptions Icon={WorkIcon} title="Jobs" path="/jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" path="/messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions
          Avatar={photoURL ? photoURL : Avatar}
          Signout={SignoutHandler}
        />
      </div>
    </div>
  );
};

export default Header;
