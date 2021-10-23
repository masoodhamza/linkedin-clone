import React from "react";

const FeedsInputOptions = ({ title, Icon, color }) => {
  return (
    <div className="singleOptionContainer">
      {Icon && <Icon style={{ color: color, marginRight: "10px" }} />}
      {title && <h5>{title}</h5>}
    </div>
  );
};

export default FeedsInputOptions;
