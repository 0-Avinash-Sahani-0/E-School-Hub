import React from "react";
import "./Button.css";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
