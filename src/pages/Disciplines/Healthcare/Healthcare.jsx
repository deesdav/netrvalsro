import { Link } from "react-router-dom";

import Footer from "../../../components/MainPage/Footer";
import SubPagesNavigation from "../../../components/MainPage/SubPagesNavigation";
import HeaderHealthcare from "../../../components/Healthcare/HeaderHealthcare";

import HealthcarePicOne from "./images/ocniKlinikaKladno.png";
import HealthcarePicTwo from "./images/nemocniceSedlcany.png";

export default function Skoda() {
  return (
    <>
      <div id="container">
        <HeaderHealthcare></HeaderHealthcare>
        <SubPagesNavigation></SubPagesNavigation>
        <div id="subPagesContent">
        <article id="healthcareArticle">
            <div id="leftBoxArticle">Oční klinika Kladno - silnoproud</div>
            <div id="rightBoxArticle">
              <img src={HealthcarePicOne} alt="photo" />
            </div>
          </article>
          <article id="healthcareArticle">
            <div id="rightBoxArticle">
              <img src={HealthcarePicTwo} alt="photo" />
            </div>
            <div id="leftBoxArticle">
              Nemocnice Sedlčany - kompletní rekonstrukce elektroinstalace
              objektu
            </div>
          </article>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}