import React from "react";
import "./Button.css";

export const Button = ({path, name, functionButton}) => {

return (
    <div className="ButtonDesign" onClick={functionButton} path={path}
    >{name}</div> 
)
}