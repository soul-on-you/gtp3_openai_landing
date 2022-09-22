import React from "react";
import "./feature.css";

const Feature = ({ title, text, style, className, ...props }) => {
  return (
    <div className={`${className} feature__container`} style={style} {...props}>
      <div className="title">
        <div className="accent__bar"/>
        <h1>{title}</h1>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
