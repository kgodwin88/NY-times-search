import React from "react";
import './Card.css';
export const Card = props => (
  <div className="card">
    <div className="card-header bg-primary"><strong>{props.title}</strong></div>
    {props.children}
  </div>
);
