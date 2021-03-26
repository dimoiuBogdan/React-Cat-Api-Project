import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Navbar/logo.png";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import "./Navbar.scss";
export default function Navbar() {
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const toggleDropdown = (how) => {
    setDisplayDropdown(how);
  };

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
        <div className="dropdown" onMouseLeave={() => toggleDropdown(false)}>
          <h3 className="breeds" onMouseEnter={() => toggleDropdown(true)}>
            Breeds
            <KeyboardArrowDownIcon />
          </h3>
          {displayDropdown ? (
            <div className="hidden">
              <NavLink to="/breeds/all" activeClassName="selected">
                <h3>All Breeds</h3>
              </NavLink>
              <NavLink to="/breeds/search" activeClassName="selected">
                <h3>Search</h3>
              </NavLink>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
