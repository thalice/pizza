import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Header.scss";

function Header() {
  return (
    <div id="header">
      <div id="blocLogo">
        <NavLink classname="link" activeClassName="active-link" to="/">
          <img src="images/logo.png" alt=""></img>
        </NavLink>
      </div>
      <ul id="links">
        <li>
          <NavLink classname="link" activeClassName="active-link" to="/menu">
            Le menu
          </NavLink>
        </li>
        <li>
          <NavLink
            classname="link"
            activeClassName="active-link"
            to="/location"
          >
            Où nous trouver?
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
