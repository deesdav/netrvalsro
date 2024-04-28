import { Link } from "react-router-dom";
/*
import HealthcarePicOne from "./skodaMuzeum.png";
import HealthcarePicTwo from "./skodaNovýPentagon.png";
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
              Průmysl
            </Link>
          </h2>
          <article id="skodaArticle">
            <div id="leftBoxArticle">
              Škoda Auto Muzeum - rozšíření a přestavba, MaR, silnoproudé
              rozvody
            </div>
            <div id="rightBoxArticle">
              <img src="" alt="photo" />
            </div>
          </article>
          <article id="skodaArticle">
            <div id="rightBoxArticle">
              <img src="" alt="photo" />
            </div>
            <div id="leftBoxArticle">
              Kampus Laurin a Klement - VZT zařízení, IRC regulace
            </div>
          </article>
          <article id="skodaArticle">
            <div id="leftBoxArticle">ŠPC / sklad HRC - osvětlení</div>
            <div id="rightBoxArticle">
              <img src="" alt="photo" />
            </div>
          </article>
          <article id="skodaArticle">
            <div id="rightBoxArticle">
              <img src="" alt="photo" />
            </div>
            <div id="leftBoxArticle">Lakovna M19</div>
          </article>
          <article id="skodaArticle">
            <div id="leftBoxArticle">Pilot hala </div>
            <div id="rightBoxArticle">
              <img src="" alt="photo" />
            </div>
          </article>
          <article id="skodaArticle">
            <div id="rightBoxArticle">
              <img src="" alt="photo" />
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
