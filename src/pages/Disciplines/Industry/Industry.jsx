import { Link } from "react-router-dom";

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
          <article id="skodaArticle">
            <div id="leftBoxArticle">
              Škoda Auto Muzeum - rozšíření a přestavba, MaR, silnoproudé
              rozvody
            </div>
            <div id="rightBoxArticle">
              <img src="./src/pages/MainPage/skodaMuzeum.png" alt="photo" />
            </div>
          </article>
          <article id="skodaArticle">
            <div id="rightBoxArticle">
              <img src="./src/pages/MainPage/skodaMuzeum.png" alt="photo" />
            </div>
            <div id="leftBoxArticle">Hala M14 - MaR, osvětlení</div>
          </article>
          <article id="skodaArticle">
            <div id="leftBoxArticle">Hala M9 - MaR</div>
            <div id="rightBoxArticle">
              <img src="./src/pages/MainPage/skodaMuzeum.png" alt="photo" />
            </div>
          </article>
          <article id="skodaArticle">
            <div id="rightBoxArticle">
              <img
                src="./src/pages/MainPage/skodaNovýPentagon.png"
                alt="photo"
              />
            </div>
            <div id="leftBoxArticle">
              Kampus Laurin a Klement - VZT zařízení, IRC regulace
            </div>
          </article>
          <article id="skodaArticle">
            <div id="leftBoxArticle">ŠPC / sklad HRC - osvětlení</div>
            <div id="rightBoxArticle">
              <img src="./src/pages/MainPage/ŠPC_sklad HRC.png" alt="photo" />
            </div>
          </article>
          <article id="skodaArticle">
            <div id="rightBoxArticle">
              <img src="./src/pages/MainPage/LAKOVNA_1.jpg" alt="photo" />
            </div>
            <div id="leftBoxArticle">Lakovna M19</div>
          </article>
          <article id="skodaArticle">
            <div id="leftBoxArticle">Pilot hala </div>
            <div id="rightBoxArticle">
              <img src="./src/pages/MainPage/pilotHala.png" alt="photo" />
            </div>
          </article>
          <article id="skodaArticle">
            <div id="rightBoxArticle">
              <img
                src="./src/pages/MainPage/HRL dopravníkové mosty.png"
                alt="photo"
              />
            </div>
            <div id="leftBoxArticle">
              HRL dopravníkové mosty - silnoproud, inženýrské sítě
            </div>
          </article>
          <article id="skodaArticle">
            <div id="leftBoxArticle">CVV Česana - protipovodňová stěna</div>
            <div id="rightBoxArticle">
              <img src="./src/pages/MainPage/" alt="photo" />
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
