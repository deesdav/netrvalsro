import { Link } from "react-router-dom";

import HealthcarePicOne from "./ocniKlinikaKladno.png";

import HealthcarePicTwo from "./nemocniceSedlcany.png";
/*
import HealthcarePicThree from "./ŠPC_sklad HRC.png";
import HealthcarePicFour from "./LAKOVNA_1.jpg";
import HealthcarePicFive from "./pilotHala.png";
import HealthcarePicSix from "./HRL dopravníkové mosty.png";
*/
export default function Healthcare() {
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
              Zdravotnictví
            </Link>
          </h2>
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
          <Link id="bottomLink" to={"/"}>
            Zpět na domovskou stránku
          </Link>
        </div>
      </div>
    </>
  );
}
