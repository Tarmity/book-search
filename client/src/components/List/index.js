import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-group p-3 mb-2 bg-dark text-white">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item p-3 mb-2 bg-dark text-white">{children}</li>;
}
