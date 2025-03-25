import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
