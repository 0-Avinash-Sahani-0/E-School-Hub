import React from "react";
import "./Input.css"; // Import CSS file if needed

const Input = ({ type = "text", placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`custom-input ${className}`}
    />
  );
};

export default Input;
