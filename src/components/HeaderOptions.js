import React from "react";

const HeaderOptions = ({ Icon, title, Avatar, Signout }) => {
  return (
    <div className="header-item">
      {Icon && <Icon />}
      {title && <div>{title}</div>}
      {Avatar && <img src={Avatar} alt="avatar" onClick={Signout} />}
    </div>
  );
};

export default HeaderOptions;
