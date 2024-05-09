import { Link } from "react-router-dom";

import Footer from "../../../components/MainPage/Footer";
import SubPagesNavigation from "../../../components/MainPage/SubPagesNavigation";
import HeaderIndustry from "../../../components/Industry/HeaderIndustry";

import IndustryPicOne from "./images/letiste_praha.png";
import IndustryPicTwo from "./images/ctPark-Brno-Lisen-3.jpg";
import IndustryPicThree from "./images/Toyo2.jpg";
import IndustryPicFour from "./images/bridgestone-tatabanya-rolunk.jpg";
/*
import IndustryPicFive from "./pilotHala.png";
*/
export default function Industry() {
  return (
    <>
      <div id="container">
      <HeaderIndustry></HeaderIndustry>
        <SubPagesNavigation></SubPagesNavigation>
        <div id="subPagesContent">
          <article id="industryArticle">
            <div id="leftBoxArticle">
              Letiště Praha - připojení kalorimetrů, rozšíření křižovatky u APC,
              Security point
            </div>
            <div id="rightBoxArticle">
              <img src={IndustryPicOne} alt="photo" />
            </div>
          </article>
          <article id="industryArticle">
            <div id="rightBoxArticle">
              <img src={IndustryPicTwo} alt="photo" />
            </div>
            <div id="leftBoxArticle">CTP Park Brno hala G47 - MOL Logistic</div>
          </article>
          <article id="industryArticle">
            <div id="leftBoxArticle">
              TOYO Tires Serbia - India Bělehrad - řídící systém
            </div>
            <div id="rightBoxArticle">
              <img src={IndustryPicThree} alt="photo" />
            </div>
          </article>
          <article id="industryArticle">
            <div id="rightBoxArticle">
              <img src={IndustryPicFour} alt="photo" />
            </div>
            <div id="leftBoxArticle">
              Bridgestone Tatabánya Kft. Hungaria - řídící systém
            </div>
          </article>
        
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
