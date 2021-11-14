import React from "react";
import { Link } from "react-router-dom";

const HeaderOptions = ({ Icon, title, Avatar, Signout, path }) => {
  path !== undefined ? (path = path) : (path = "/");
  // console.log(path);
  return (
    <div className="header-item">
      <Link to={path}>
        {Icon && <Icon />}
        {title && <div>{title}</div>}
      </Link>
      {Avatar && <img src={Avatar} alt="avatar" onClick={Signout} />}
    </div>
  );
};

export default HeaderOptions;
