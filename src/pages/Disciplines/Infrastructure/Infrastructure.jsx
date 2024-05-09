import { Link } from "react-router-dom";

import Footer from "../../../components/MainPage/Footer";
import SubPagesNavigation from "../../../components/MainPage/SubPagesNavigation";
import HeaderInfrastructure from "../../../components/Infrastructure/HeaderInfrastructure";

import InfrastructurePicOne from "./images/letckeMuzeumMladaBoleslav.jpg";
import InfrastructurePicTwo from "./images/staromestskeNamesti.jpg";
import InfrastructurePicThree from "./images/obec_skorkov.jpg";
export default function Infrastructure() {
  return (
    <>
      <div id="container">
      <HeaderInfrastructure></HeaderInfrastructure>
        <SubPagesNavigation></SubPagesNavigation>
        <div id="subPagesContent">
          <article id="InfrastructureArticle">
            <div id="leftBoxArticle">
              Letecké muzeum Metoděje Vlacha Mladá Boleslav - MaR, Silnoproud
            </div>
            <div id="rightBoxArticle">
              <img src={InfrastructurePicOne} alt="photo" />
            </div>
          </article>
          <article id="InfrastructureArticle">
            <div id="rightBoxArticle">
              <img src={InfrastructurePicTwo} alt="photo" />
            </div>
            <div id="leftBoxArticle">
              Revitalizace Staroměstské náměstí Mladá Boleslav - silnoproud,
              slaboproud
            </div>
          </article>
          <article id="InfrastructureArticle">
            <div id="leftBoxArticle">Veřejné osvětlení obec Skorkov</div>
            <div id="rightBoxArticle">
              <img src={InfrastructurePicThree} alt="photo" />
            </div>
          </article>

        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
