import React from "react";

const HeaderOptions = ({ Icon, title, Avatar }) => {
  return (
    <div className="header-item">
      {Icon && <Icon />}
      {title && <div>{title}</div>}
      {Avatar && <img src={Avatar} alt="avatar" />}
    </div>
  );
};

export default HeaderOptions;
