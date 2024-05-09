import { Link } from "react-router-dom";

import Footer from "../../../components/MainPage/Footer";
import SubPagesNavigation from "../../../components/MainPage/SubPagesNavigation";
import HeaderSkoda from "../../../components/Skoda/HeaderSkoda";

import SkodaPicOne from "./images/skodaMuzeum.png";
import SkodaPicTwo from "./images/skodaNovýPentagon.png";
import SkodaPicThree from "./images/ŠPC_sklad HRC.png";
import SkodaPicFour from "./images/LAKOVNA_1.jpg";
import SkodaPicFive from "./images/pilotHala.png";
import SkodaPicSix from "./images/HRL dopravníkové mosty.png";

export default function Skoda() {
  return (
    <>
      <div id="container">
        <HeaderSkoda></HeaderSkoda>
        <SubPagesNavigation></SubPagesNavigation>
        <div id="subPagesContent">
          <article id="skodaArticle">
            <div id="leftBoxArticle">
              Škoda Auto Muzeum - rozšíření a přestavba, MaR, silnoproudé
              rozvody
            </div>
            <div id="rightBoxArticle">
              <img src={SkodaPicOne} alt="photo" />
            </div>
          </article>
          <article id="skodaArticle">
            <div id="rightBoxArticle">
              <img src={SkodaPicTwo} alt="photo" />
            </div>
            <div id="leftBoxArticle">
              Kampus Laurin a Klement - VZT zařízení, IRC regulace
            </div>
          </article>
          <article id="skodaArticle">
            <div id="leftBoxArticle">ŠPC / sklad HRC - osvětlení</div>
            <div id="rightBoxArticle">
              <img src={SkodaPicThree} alt="photo" />
            </div>
          </article>
          <article id="skodaArticle">
            <div id="rightBoxArticle">
              <img src={SkodaPicFour} alt="photo" />
            </div>
            <div id="leftBoxArticle">Lakovna M19</div>
          </article>
          <article id="skodaArticle">
            <div id="leftBoxArticle">Pilot hala </div>
            <div id="rightBoxArticle">
              <img src={SkodaPicFive} alt="photo" />
            </div>
          </article>
          <article id="skodaArticle">
            <div id="rightBoxArticle">
              <img src={SkodaPicSix} alt="photo" />
            </div>
            <div id="leftBoxArticle">
              HRL dopravníkové mosty - silnoproud, inženýrské sítě
            </div>
          </article>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
