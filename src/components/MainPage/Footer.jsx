import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'; // Import the CSS file for styling

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-about">
          <h3>O nás</h3>
          <p>
            Netrval S.R.O. se specializuje na poskytování komplexních technických řešení
            v oblastech zdravotnictví, průmyslu a infrastruktury. Naším cílem je přinášet
            inovativní a efektivní řešení, která splní specifické potřeby našich klientů.
          </p>
        </div>
        <div className="footer-section footer-links">
          <h3>Odkazy</h3>
          <ul>
            <li><Link to="/healthcare">Zdravotnictví</Link></li>
            <li><Link to="/skoda">ŠKODA AUTO</Link></li>
            <li><Link to="/industry">Průmysl</Link></li>
            <li><Link to="/infrastructure">Infrastruktura</Link></li>
            <li><Link to="/references">Reference</Link></li>
            <li><Link to="/contacts">Kontakty</Link></li>
          </ul>
        </div>
        <div className="footer-section footer-contact">
          <h3>Kontakty</h3>
          <p>Email: <a href="mailto:info@netrval.cz">tomas@netrval.net</a></p>
          <p>Telefon: <a href="tel:+420603832589">+420 603 832 589</a></p>
        </div>
        <div className="footer-section footer-social">
          <h3>Sledujte nás</h3>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-section footer-rights">
          <p>© 2024 Netrval S.R.O. Všechna práva vyhrazena.</p>
          <p>Autor: <a href="https://github.com/deesdav" target="_blank" rel="noopener noreferrer">David Švancar</a></p>
        </div>
        <button className="scroll-to-top" onClick={scrollToTop}>↑</button>
      </div>
    </footer>
  );
}
