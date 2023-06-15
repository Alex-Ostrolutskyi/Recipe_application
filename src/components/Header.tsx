import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../images/logo.png";
import "../styles/header.scss";
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav_left">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="nav_right">
          <ul className="list">
            <li className="item">
              <NavLink to={"favorite"}>Favorite</NavLink>
            </li>
            <li className="item">
              <NavLink to={"start-cooking"}>Add your recipe</NavLink>
            </li>
            <li className="item">
              <NavLink to={"login"}>Login</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
