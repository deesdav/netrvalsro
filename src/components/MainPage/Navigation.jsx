import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <div className="fix">
        <nav>
          <ul>
            <li>
              <a href="#home">Domovská stránka</a>
            </li>
            <li>
              <a href="#disciplines">Obory</a>
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
        </nav>
      </div>
    </>
  );
}
