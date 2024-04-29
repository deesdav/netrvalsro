import { Link } from "react-router-dom";

import IndustryPicOne from "./letiste_praha.png";
import IndustryPicTwo from "./ctPark-Brno-Lisen-3.jpg";
import IndustryPicThree from "./Toyo2.jpg";
import IndustryPicFour from "./bridgestone-tatabanya-rolunk.jpg";
/*
import IndustryPicFive from "./pilotHala.png";
*/
export default function Industry() {
  return (
    <>
      <div id="container">
        <div id="subPagesContent">
          <h2>
            <Link
              style={{ color: "white", cursor: "pointer" }}
              to={"/"}
              title="zpět"
            >
              Průmysl
            </Link>
          </h2>
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
          <Link id="bottomLink" to={"/"}>
            Zpět na domovskou stránku
          </Link>
        </div>
      </div>
    </>
  );
}
