import React from "react";
import "./styles/Footer.scss";

function Footer() {
  return (
    <div id="footer">
      <ul className="links">
        <li>Qui sommes-nous?</li>
        <li>Nous contacter</li>
      </ul>
      <ul className="icons">
        <li>
          <img src="/images/iconinsta.png" alt=""></img>
        </li>
        <li>
          <img src="/images/iconface.png" alt=""></img>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
