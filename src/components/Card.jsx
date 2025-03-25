import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`border rounded-lg p-4 shadow-md bg-white ${className}`}>
      {children}
    </div>
  );
};

export default Card;
