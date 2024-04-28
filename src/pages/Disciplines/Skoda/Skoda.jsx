import { Link } from "react-router-dom";

import SkodaPicOne from "./skodaMuzeum.png";
import SkodaPicTwo from "./skodaNovýPentagon.png";
import SkodaPicThree from "./ŠPC_sklad HRC.png";
import SkodaPicFour from "./LAKOVNA_1.jpg";
import SkodaPicFive from "./pilotHala.png";
import SkodaPicSix from "./HRL dopravníkové mosty.png";

export default function Skoda() {
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
              Škoda Auto a.s.
            </Link>
          </h2>
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
          <Link id="bottomLink" to={"/"}>
            Zpět na domovskou stránku
          </Link>
        </div>
      </div>
    </>
  );
}
