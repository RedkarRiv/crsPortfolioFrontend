import React from "react";
import "./Button.css";

export const Button = ({ path, name, functionButton, className }) => {
  return (
    <div
      className={`ButtonDesign ${className}`}
      onClick={functionButton}
      path={path}
    >
      {name}
    </div>
  );
};