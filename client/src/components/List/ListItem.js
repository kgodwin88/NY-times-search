import React from "react";

export const ListItem = props => (
  <li className="list-group-item">
    <h2>{props.title}</h2>
    <h3>{props.author}</h3>
    <a href = {props.url}><h5>{props.url}</h5></a>
    <h3>{props.date}</h3>
    {props.children}
  </li>
);
