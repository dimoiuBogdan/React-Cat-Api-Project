import React from "react";
import "./Navbar.scss";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="menu">
        <h3>Home</h3>
      </div>
    </div>
  );
}
