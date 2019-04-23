import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1 style={headerStyle}>EAT MY TODOs!</h1>
      <div style={linkBox}>
        <Link className="linkStyle" to="/">
          Home
        </Link>
        <Link className="linkStyle" to="/about">
          About
        </Link>
      </div>
    </header>
  );
}

const headerStyle = {
  color: "white",
  backgroundColor: "#333",
  textAlign: "center",
  padding: "10px"
};

const linkBox = {
  display: "flex",
  backgroundColor: "#333",
  justifyContent: "center"
};
