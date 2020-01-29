import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <img id="logo" src="" alt=""></img>
      <NavLink classname="link" activeClassName="active-link" to="/">
        Logo
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
