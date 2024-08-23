import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/MainPage/Header";
import Footer from "../../components/MainPage/Footer";
import "./MainPage.css";

import Picture from "./images/ateliertsunami.png";
import PictureTwo from "./images/bilfidenteobodin.png";
import PictureThree from "./images/grebener.png";
import PictureFour from "./images/hlavacekarchitekti.png";
import PictureFive from "./images/josyma.png";
import PictureSix from "./images/marafinal.png";
import PictureSeven from "./images/rubypm.png";
import PictureEight from "./images/servisautomatik.png";
import Navigation from "../../components/MainPage/Navigation";

export default function MainPage() {
  const [currentImage, setCurrentImage] = useState("");
  const [currentText, setCurrentText] = useState("");
  const [menuActive, setMenuActive] = useState(false);

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
    "Servis Automatik s.r.o., Kosmonsy ",
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

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <Navigation></Navigation>
      <Header />
      <main className="main-content">
        <section className="about-section">
          <h2>ČÍM SE ZABÝVÁME?</h2>
          <div className="about-content">
            <h3>Zabýváme se:</h3>
            <ul>
              <li>Projekce elektrických zařízení a řídících systémů</li>
              <li>
                Měření a Regulace - navrhujeme řídící systémy pro průmyslové
                aplikace, administrativní objekty, nemocnice, letiště
              </li>
              <li>
                Silnoproudé rozvody - výpočty osvětlení, protokoly vnějších
                vlivů, pasportizace stávajících elektroinstalací
              </li>
              <li>Veřejné osvětlení</li>
              <li>Technická pomoc</li>
            </ul>
          </div>
        </section>

        <section className="cooperation-section">
          <h2>SPOLUPRÁCE</h2>
          <div className="cooperation-content">
            <p>Zde jsou zákazníci a firmy se kterými spolupracujeme:</p>
            <div
              className="cooperation-image"
              style={{ backgroundImage: `url(${currentImage})` }}
            >
              <p className="cooperation-text">{currentText}</p>
            </div>
          </div>
        </section>

        <section className="disciplines-section">
          <div className="discipline-card">
            <h2>Zdravotnictví</h2>
            <p>
              Vítejte v naší sekci referencí v oblasti zdravotnictví, kde
              prezentujeme úspěšné projekty a spokojené zákazníky.
            </p>
            <Link className="more-info" to={"/healthcare"}>
              Více informací
            </Link>
          </div>

          <div className="discipline-card">
            <h2>Škoda Auto a.s.</h2>
            <p>
              Vítejte v sekci úspěchů a projektů, kde se můžete seznámit s
              dosavadními úspěchy a spokojenými klienty ve spolupráci s firmou
              ŠKODA AUTO a.s.
            </p>
            <Link className="more-info" to={"/skoda"}>
              Více informací
            </Link>
          </div>

          <div className="discipline-card">
            <h2>Průmysl</h2>
            <p>
              Vítejte v naší sekci referencí v oblasti průmyslu, kde
              prezentujeme úspěšné projekty a spokojené zákazníky.
            </p>
            <Link className="more-info" to={"/industry"}>
              Více informací
            </Link>
          </div>

          <div className="discipline-card">
            <h2>Infrastruktura</h2>
            <p>
              Vítejte v naší sekci referencí v oblasti infrastruktury, kde
              prezentujeme úspěšné projekty a spokojené zákazníky.
            </p>
            <Link className="more-info" to={"/infrastructure"}>
              Více informací
            </Link>
          </div>

          <div className="discipline-card">
            <h2>Reference</h2>
            <p>
              Vítejte v naší sekci referencí, kde prezentujeme úspěšné projekty
              a spokojené zákazníky.
            </p>
            <Link className="more-info" to={"/references"}>
              Více informací
            </Link>
          </div>

          <div className="discipline-card">
            <h2>Kontakty</h2>
            <p>
              Vítejte v sekci kontaktních informací, kde najdete potřebné údaje
              pro kontaktování naší společnosti.
            </p>
            <Link className="more-info" to={"/contacts"}>
              Více informací
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
