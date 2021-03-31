import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Navbar/logo.png";
import "./Navbar.scss";
export default function Navbar() {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div
        className={`hamburger-menu ${displayMenu ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
      <div
        className={`close-menu-overlay ${!displayMenu ? "hidden" : null}`}
        onClick={() => setDisplayMenu(false)}
      ></div>
      <div className={`menu ${displayMenu ? "" : "hidden"}`}>
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
