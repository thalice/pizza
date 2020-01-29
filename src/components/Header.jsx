import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Header.scss";

function Header() {
  return (
    <div id="header">
      {" "}
      <NavLink classname="link" activeClassName="active-link" to="/">
        <img id="logo" src="images/logo.png" alt=""></img>
      </NavLink>
      <ul>
        <li>
          {" "}
          <NavLink classname="link" activeClassName="active-link" to="/menu">
            Le menu
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            classname="link"
            activeClassName="active-link"
            to="/location"
          >
            Où nous trouver?{" "}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
