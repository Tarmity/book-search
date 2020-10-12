import React from "react";
import './style.css'

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 20, textAlign: "center", fontSize: 40, }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
