import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SubPagesNavigation() {
  return (
    <>
      <div className="fix">
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Domovská stránka</Link>
            </li>
            <li>
              <Link>Obory</Link>
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
