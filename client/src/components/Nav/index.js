import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <a className="navbar-brand header" href="/">
        Home
      </a>{"  "}
      <a className="navbar-brand header" href="/saved">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
