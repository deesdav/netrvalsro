import { Link } from "react-router-dom";

import InfrastructurePicOne from "./letckeMuzeumMladaBoleslav.jpg";
import InfrastructurePicTwo from "./staromestskeNamesti.jpg";
import InfrastructurePicThree from "./obec_skorkov.jpg";
export default function Infrastructure() {
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
              Infrastruktura
            </Link>
          </h2>
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

          <Link id="bottomLink" to={"/"}>
            Zpět na domovskou stránku
          </Link>
        </div>
      </div>
    </>
  );
}
