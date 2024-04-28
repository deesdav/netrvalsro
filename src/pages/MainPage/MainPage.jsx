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
      <div id="one"></div>
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
              <a href="#one">Domovská stránka</a>
            </li>
            <li>
              <a href="#two">Obory</a>
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
              <li>- projekce elektrických zařízení a řídících systémů </li>
              <li>- Měření a Regulace</li>
              <li>
                - navrhujeme řídící systémy pro průmyslové
                aplikace,administrativní objekty, nemocnice, letiště
              </li>
              <li> - silnoproudé rozvody</li>
              <li>
                - výpočty osvětlení, protokoly vnějších vlivů, pasportizace
                stávajících elektroinstalací
              </li>
              <li>- veřejné osvětlení</li>
              <li>- technická pomoc</li>
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
          <div id="two"></div>
        </article>
      </div>
      <div id="subContent">
        <article id="disciplinesHealthcareArticle">
          <div id="leftBoxArticle">
            <h2>Zdravotnictví</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, at? Doloribus facere, at, eligendi aliquid excepturi
              nostrum dolor optio ipsum numquam quo ab provident expedita odio,
              adipisci quis quia a!
            </p>
            <Link id="moreInfo" to={"/healthcare"}>
              Více informací
            </Link>
          </div>
          <div id="three"></div>
        </article>
        <article id="disciplinesSkodaArticle">
          <div id="leftBoxArticle">
            <h2>ŠKODA AUTO</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, at? Doloribus facere, at, eligendi aliquid excepturi
              nostrum dolor optio ipsum numquam quo ab provident expedita odio,
              adipisci quis quia a!
            </p>
            <Link id="moreInfo" to={"/skoda"}>
              Více informací
            </Link>
          </div>
          <div id="four"></div>
        </article>
        <article id="disciplinesIndustryArticle">
          <div id="leftBoxArticle">
            <h2>Průmysl</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, at? Doloribus facere, at, eligendi aliquid excepturi
              nostrum dolor optio ipsum numquam quo ab provident expedita odio,
              adipisci quis quia a!
            </p>
            <Link id="moreInfo" to={"/industry"}>
              Více informací
            </Link>
          </div>
          <div id="five"></div>
        </article>

        <article id="referencesArticle">
          <div id="leftBoxArticle">
            <h2>Reference</h2>
            <p>
              Zde naleznete přehled našich úspěšných projektů a spokojených
              zákazníků. Jsme hrdí na naši práci a rádi se s vámi podělíme o
              naše dosavadní úspěchy. Děkujeme vám za zájem o naše služby a
              těšíme se na možnost spolupráce
            </p>
            <Link id="moreInfo" to={"/references"}>
              Více informací
            </Link>
          </div>
          <div id="six"></div>
        </article>

        <article id="contactsArticle">
          <div id="leftBoxArticle">
            <h2>Kontakty</h2>
            <p>
              Pro více informací nás kontaktujte na následujících údajích zde.
            </p>
            <Link id="moreInfo" to={"/contacts"}>
              Více informací
            </Link>
          </div>
          <div id="seven"></div>
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
