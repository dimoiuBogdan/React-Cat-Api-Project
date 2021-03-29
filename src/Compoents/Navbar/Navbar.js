import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Navbar/logo.png";
import "./Navbar.scss";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        <NavLink to="/" exact activeClassName="selected">
          <h3>Home</h3>
        </NavLink>
        <NavLink to="/favorites" activeClassName="selected">
          <h3>Favorites</h3>
        </NavLink>
        <NavLink to="/breeds" activeClassName="selected">
          <h3>Breeds</h3>
        </NavLink>
      </div>
    </div>
  );
}
