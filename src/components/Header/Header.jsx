import React, { useState, useEffect } from "react";
import './Header.css';

export default function Header() {
  return (
    <>
      <header>
        <h1>NETRVAL s.r.o.</h1>
        <p>
          <span className="first-word">Vítejte</span> na webových stránkách
          společnosti NETRVAL s.r.o.! Jsme váš partner v oblasti
          elektroinženýrství, přinášíme inovativní a spolehlivá řešení pro vaše
          elektrotechnické projekty.
        </p>
      </header>
      <div id="headerMask"></div>
    </>
  );
}
