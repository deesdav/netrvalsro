import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./MainPage.css";

import Picture from "./ateliertsunami.png";
import PictureTwo from "./bilfidenteobodin.png";
import PictureThree from "./grebener.png";
import PictureFour from "./hlavacekarchitekti.png";
import PictureFive from "./josyma.png";
import PictureSix from "./marafinal.png";
import PictureSeven from "./rubypm.png";
import PictureEight from "./servisautomatik.png";

export default function MainPage() {
  const [currentImage, setCurrentImage] = useState("");
  const [currentText, setCurrentText] = useState("");

  const images = [
    Picture,
    PictureTwo,
    PictureThree,
    PictureFour,
    PictureFive,
    PictureSix,
    PictureSeven,
    PictureEight,
  ];
  const texts = [
    "ATELIER Tsunami s.r.o. Náchod",
    "Bilfinger Tebodin Czech Republic s.r.o., Praha",
    "GREBNER projektová a inženýrská kancelář, spol. s r.o., Praha",
    "Hlaváček-architekti s.r.o., Praha",
    "JOSYMA MB, s.r.o., Kosmonosy",
    "MaRfinal s.r.o., Sadová",
    "RUBY Project Management s.r.o., Praha",
    "Servis Automatik s.r.o.,  Kosmonsy ",
  ];

  useEffect(() => {
    const changeContent = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
      setCurrentText(texts[randomIndex]);
    };

    changeContent();

    const intervalId = setInterval(changeContent, 3000);

    return () => clearInterval(intervalId);
  }, [images, texts]);

  return (
    <div id="container">
      <div id="home"></div>
      <header>
        <h1>NETRVAL s.r.o.</h1>
        <p>
          <span className="first-word">Vítejte</span> na webových stránkách
          společnosti NETRVAL s.r.o.! Jsme váš partner v oblasti
          elektroinženýrství, přinášíme inovativní a spolehlivá řešení pro vaše
          elektrotechnické projekty.
        </p>
      </header>
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
      <div id="mainContent">
        <h2>ČÍM SE ZABÝVÁME?</h2>
        <article id="homePageArticle">
          <div id="leftBoxArticle">
            <h3>Zabýváme se:</h3>
            <ul>
              <li>Projekce elektrických zařízení a řídících systémů </li>
              <li>
                Měření a Regulace- navrhujeme řídící systémy pro průmyslové
                aplikace,administrativní objekty, nemocnice, letiště
              </li>
              <li>
                Silnoproudé rozvody - výpočty osvětlení, protokoly vnějších
                vlivů, pasportizace stávajících elektroinstalací
              </li>
              <li>Veřejné osvětlení</li>
              <li>Technická pomoc</li>
            </ul>
          </div>
        </article>
        <h2>SPOLUPRÁCE</h2>
        <article id="cooperationPageArticle">
          <div id="leftBoxArticle">
            Zde jsou zákazníci a firmy se kterými spolupracujeme:
          </div>
          <div
            id="randomImagesBoxArticle"
            style={{ backgroundImage: `url(${currentImage})` }}
          >
            <p id="randomImagesBoxArticleText">{currentText}</p>
          </div>
        </article>
      </div>
      <div id="subContent">
        <article id="disciplinesHealthcareArticle">
          <div id="leftBoxArticle">
            <h2>Zdravotnictví</h2>
            <p>
              Vítejte v naší sekci referencí v oblasti zdravotnictví, kde
              prezentujeme úspěšné projekty a spokojené zákazníky.
            </p>
            <Link id="moreInfo" to={"/healthcare"}>
              Více informací
            </Link>
          </div>
          <div id="disciplines"></div>
        </article>
        <article id="disciplinesSkodaArticle">
          <div id="leftBoxArticle">
            <h2>Škoda Auto a.s.</h2>
            <p>
              Vítejte v sekci úspěchů a projektů, kde se můžete seznámit s
              dosavadními úspěchy a spokojenými klienty ve spolupráci s firmou
              ŠKODA AUTO a.s.
            </p>
            <Link id="moreInfo" to={"/skoda"}>
              Více informací
            </Link>
          </div>
        </article>
        <article id="disciplinesIndustryArticle">
          <div id="leftBoxArticle">
            <h2>Průmysl</h2>
            <p>
              Vítejte v naší sekci referencí v oblasti průmyslu, kde
              prezentujeme úspěšné projekty a spokojené zákazníky.
            </p>
            <Link id="moreInfo" to={"/industry"}>
              Více informací
            </Link>
          </div>
          <div id="five"></div>
        </article>
        <article id="disciplinesInfrastructureArticle">
          <div id="leftBoxArticle">
            <h2>Infrastruktura</h2>
            <p>
              Vítejte v naší sekci referencí v oblasti infrastruktury, kde
              prezentujeme úspěšné projekty a spokojené zákazníky.
            </p>
            <Link id="moreInfo" to={"/infrastructure"}>
              Více informací
            </Link>
          </div>
          <div id="five"></div>
        </article>
        <article id="referencesArticle">
          <div id="leftBoxArticle">
            <h2>Reference</h2>
            <p>
              Vítejte v naší sekci referencí, kde prezentujeme úspěšné projekty
              a spokojené zákazníky.
            </p>
            <Link id="moreInfo" to={"/references"}>
              Více informací
            </Link>
          </div>
        </article>
        <article id="contactsArticle">
          <div id="leftBoxArticle">
            <h2>Kontakty</h2>
            <p>
              Vítejte v sekci kontaktních informací, kde najdete potřebné údaje
              pro kontaktování naší společnosti.
            </p>
            <Link id="moreInfo" to={"/contacts"}>
              Více informací
            </Link>
          </div>
        </article>
      </div>
      <footer>
        <div className="text">
          Copyright © 2024 Netrval S.R.O. Všechna práva vyhrazena.
        </div>
        <div>
          <a href="https://github.com/deesdav"> David Švancar</a>
        </div>
      </footer>
    </div>
  );
}
