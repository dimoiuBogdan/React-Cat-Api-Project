import React from "react";
import { Link } from "react-router-dom";
import logo from "../Navbar/logo.png";
import "./Navbar.scss";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/favorites">
          <h3>Favorites</h3>
        </Link>
        <Link to="/search">
          <h3>Search</h3>
        </Link>
      </div>
    </div>
  );
}
