import { Link } from "react-router-dom";

import Footer from "../../../components/Footer/Footer";
import HeaderSkoda from "../../../components/Skoda/HeaderSkoda";

import SkodaPicOne from "./images/skodaMuzeum.png";
import SkodaPicTwo from "./images/skodaNovýPentagon.png";
import SkodaPicThree from "./images/ŠPC_sklad HRC.png";
import SkodaPicFour from "./images/LAKOVNA_1.jpg";
import SkodaPicFive from "./images/pilotHala.png";
import SkodaPicSix from "./images/HRL dopravníkové mosty.png";
import Navigation from "../../../components/Navigation/Navigation";

import './Skoda.css';

export default function Skoda() {
  return (
    <>
      <Navigation />
      <div className="skoda-container">
        <HeaderSkoda />
        <div className="skoda-content">
          <section className="skoda-article">
            <div className="skoda-text">
              <h2>Škoda Auto Muzeum</h2>
              <p>Rozšíření a přestavba, MaR, silnoproudé rozvody</p>
            </div>
            <div className="skoda-image">
              <img src={SkodaPicOne} alt="Škoda Auto Muzeum" />
            </div>
          </section>
          <section className="skoda-article">
            <div className="skoda-image">
              <img src={SkodaPicTwo} alt="Kampus Laurin a Klement" />
            </div>
            <div className="skoda-text">
              <h2>Kampus Laurin a Klement</h2>
              <p>VZT zařízení, IRC regulace</p>
            </div>
          </section>
          <section className="skoda-article">
            <div className="skoda-text">
              <h2>ŠPC / sklad HRC</h2>
              <p>Osvětlení</p>
            </div>
            <div className="skoda-image">
              <img src={SkodaPicThree} alt="ŠPC / sklad HRC" />
            </div>
          </section>
          <section className="skoda-article">
            <div className="skoda-image">
              <img src={SkodaPicFour} alt="Lakovna M19" />
            </div>
            <div className="skoda-text">
              <h2>Lakovna M19</h2>
            </div>
          </section>
          <section className="skoda-article">
            <div className="skoda-text">
              <h2>Pilot hala</h2>
            </div>
            <div className="skoda-image">
              <img src={SkodaPicFive} alt="Pilot hala" />
            </div>
          </section>
          <section className="skoda-article">
            <div className="skoda-image">
              <img src={SkodaPicSix} alt="HRL dopravníkové mosty" />
            </div>
            <div className="skoda-text">
              <h2>HRL dopravníkové mosty</h2>
              <p>Silnoproud, inženýrské sítě</p>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
