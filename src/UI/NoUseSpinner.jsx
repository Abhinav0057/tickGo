import React from "react";

const NoUseSpinner = ({ height, width }) => {
  const spinnerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  const spinnerInnerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const spinnerElementStyle = {
    display: "inline-block",
    position: "relative",
    width: "10%",
    paddingBottom: "10%",
    borderRadius: "50%",
    backgroundColor: "#333",
  };

  const containerStyle = {
    height,
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      <div style={spinnerStyle}>
        <div style={spinnerInnerStyle}>
          <div style={spinnerElementStyle}></div>
        </div>
      </div>
    </div>
  );
};

export default NoUseSpinner;
