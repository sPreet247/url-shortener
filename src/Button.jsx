import React from "react";
import "./Button.css";

const Button = ({ handleReset }) => {
  return (
    <button className="reset" onClick={handleReset}>
      Reset
    </button>
  );
};

export default Button;
