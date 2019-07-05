import React from "react";

const Spacer = ({ size }) => {
  const boxStyle = {
    backgroundColor: "#FABCC7",
    color: "#BC4A9E",
    height: size,
    width: size,
    marginRight: "16px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "top"
  };

  const fontStyle = {
    fontSize: size <= 20 ? "10px" : "16px"
  };

  return (
    <div style={{ ...boxStyle, ...fontStyle }}>
      <span>{size}</span>
    </div>
  );
};

export default Spacer;
