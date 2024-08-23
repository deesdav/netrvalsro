import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"; // Import the CSS file for navigation

export default function Navigation() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navigation">
      <div className="menu-container">
        <div
          className={`menu-toggle ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          &#9776; {/* Hamburger icon */}
        </div>
        <ul className={menuActive ? "active" : ""}>
          <li>
            <Link to="/">Domovská stránka </Link>
          </li>
          <li>
            <a >Obory</a>
            <ul className="subnav">
              <li>
                <Link to="/healthcare">Zdravotnictví</Link>
              </li>
              <li>
                <Link to="/skoda">ŠKODA AUTO</Link>
              </li>
              <li>
                <Link to="/industry">Průmysl</Link>
              </li>
              <li>
                <Link to="/infrastructure">Infrastruktura</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/references">Reference</Link>
          </li>
          <li>
            <Link to="/contacts">Kontakty</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
