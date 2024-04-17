import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./MainPage.css";
import Picture from "./box2.jpg";
import PictureTwo from "./box2two.jpg";
import PictureThree from "./box2three.jpg";
import PictureFour from "./box2four.jpg";

export default function MainPage() {
  const [currentImage, setCurrentImage] = useState("");
  const [currentText, setCurrentText] = useState("");

  const images = [Picture, PictureTwo, PictureThree, PictureFour];
  const texts = ["mrakodrap", "cokl", "banan", "nevim"];

  useEffect(() => {
    const changeContent = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
      setCurrentText(texts[randomIndex]);
    };

    changeContent();

    const intervalId = setInterval(changeContent, 1000);

    return () => clearInterval(intervalId);
  }, [images, texts]);

  return (
    <div id="container">
      <div id="one"></div>
      <header>
        <h1>NETRVAL S.R.O.</h1>
      </header>
      <div className="fix">
        <nav>
          <ul>
            <li>
              <a href="#one">Domovská stránka</a>
            </li>
            <li>
              <a style={{ cursor: "default" }}>Obory</a>
              <ul className="subnav">
                <li>
                  <a href="#two">Zdravotnictví</a>
                </li>
                <li>
                  <a href="#three">ŠKODA</a>
                </li>
                <li>
                  <a href="#four">Průmysl</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#five">Reference</a>
            </li>
            <li>
              <a href="#six">Kontakty</a>
            </li>
          </ul>
        </nav>
      </div>

      <div id="content">
        <article id="homePageArticle">
          <div id="leftBoxArticle">
            <span className="first-word">Vítejte</span> na stránkách společnosti
            NETRVAL S.R.O. Nabízíme širokou škálu zvukových technologií,
            osvětlovacích systémů, profesionálních mixážních pultů a
            audiovizuálního vybavení pro vaše události a projekty.
          </div>
          <div
            id="randomImagesBoxArticle"
            style={{ backgroundImage: `url(${currentImage})` }}
          >
            <p id="randomImagesBoxArticleText">{currentText}</p>
          </div>
          <div id="two"></div>
        </article>
        <hr />
        <h2>Zdravotnictví</h2>
        <hr />
        <article style={{ width: "100%" }} id="disciplinesHealthcareArticle">
          <div id="leftBoxArticle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            at? Doloribus facere, at, eligendi aliquid excepturi nostrum dolor
            optio ipsum numquam quo ab provident expedita odio, adipisci quis
            quia a!
          </div>
          <div id="rightBoxArticle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            at? Doloribus facere, at, eligendi aliquid excepturi nostrum dolor
            optio ipsum numquam quo ab provident expedita odio, adipisci quis
            quia a!
          </div>
          <div id="three"></div>
        </article>
        <hr />
        <h2>ŠKODA AUTO</h2>
        <hr />
        <article style={{ width: "100%" }} id="disciplinesSkodaArticle">
          <div id="leftBoxArticle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            at? Doloribus facere, at, eligendi aliquid excepturi nostrum dolor
            optio ipsum numquam quo ab provident expedita odio, adipisci quis
            quia a!
          </div>
          <div id="rightBoxArticle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            at? Doloribus facere, at, eligendi aliquid excepturi nostrum dolor
            optio ipsum numquam quo ab provident expedita odio, adipisci quis
            quia a!
          </div>
          <div id="four"></div>
        </article>
        <hr />
        <h2>Průmysl</h2>
        <hr />
        <article style={{ width: "100%" }} id="disciplinesIndustryArticle">
          <div id="leftBoxArticle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            at? Doloribus facere, at, eligendi aliquid excepturi nostrum dolor
            optio ipsum numquam quo ab provident expedita odio, adipisci quis
            quia a!
          </div>
          <div id="rightBoxArticle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            at? Doloribus facere, at, eligendi aliquid excepturi nostrum dolor
            optio ipsum numquam quo ab provident expedita odio, adipisci quis
            quia a!
          </div>
          <div id="five"></div>
        </article>
        <hr />
        <h2>Reference</h2>
        <hr />
        <article id="referencesArticle">
          <div id="leftBoxArticle">
            <Link to={"/references"}>
              Zde naleznete přehled našich úspěšných projektů a spokojených
              zákazníků. Jsme hrdí na naši práci a rádi se s vámi podělíme o
              naše dosavadní úspěchy. Děkujeme vám za zájem o naše služby a
              těšíme se na možnost spolupráce
            </Link>
          </div>
          <div id="six"></div>
        </article>
        <hr />
        <h2>Kontakty</h2>
        <hr />
        <article id="contactsArticle">
          <div id="leftBoxArticle">
            <Link to={"/contacts"}>
              Pro více informací nás kontaktujte na následujících údajích zde.
            </Link>
          </div>
          <div id="seven"></div>
        </article>
      </div>
      <footer>
        <div className="text">
          Copyright © 2023 Netrval S.R.O. Všechna práva vyhrazena.
        </div>
        <div>
          <a href="https://github.com/deesdav"> David Švancar</a>
        </div>
      </footer>
    </div>
  );
}
