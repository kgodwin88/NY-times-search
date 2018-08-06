import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
    <div className="list-overflow-container">
      <ul className="list-group list-group-flush">
        {children}
      </ul>
    </div>
  );
};
