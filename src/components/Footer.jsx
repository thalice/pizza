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
          <a href="https://www.instagram.com" target="blank">
            <img src="/images/iconinsta.png" alt=""></img>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com" target="blank">
            <img src="/images/iconface.png" alt=""></img>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
