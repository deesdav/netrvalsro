import { Link } from "react-router-dom";

import Footer from "../../../components/Footer/Footer";
import HeaderInfrastructure from "../../../components/Infrastructure/HeaderInfrastructure";

import InfrastructurePicOne from "./images/letckeMuzeumMladaBoleslav.jpg";
import InfrastructurePicTwo from "./images/staromestskeNamesti.jpg";
import InfrastructurePicThree from "./images/obec_skorkov.jpg";
import Navigation from "../../../components/Navigation/Navigation";

import "./Infrastructure.css";

export default function Infrastructure() {
  return (
    <>
      <Navigation />
      <div className="infrastructure-container">
        <HeaderInfrastructure />
        <div className="infrastructure-content">
          <section className="infrastructure-article">
            <div className="infrastructure-text">
              <h2>Letecké muzeum Metoděje Vlacha Mladá Boleslav</h2>
              <p>MaR, Silnoproud</p>
            </div>
            <div className="infrastructure-image">
              <img
                src={InfrastructurePicOne}
                alt="Letecké muzeum Metoděje Vlacha"
              />
            </div>
          </section>
          <section className="infrastructure-article">
            <div className="infrastructure-image">
              <img src={InfrastructurePicTwo} alt="Staroměstské náměstí" />
            </div>
            <div className="infrastructure-text">
              <h2>Revitalizace Staroměstské náměstí Mladá Boleslav</h2>
              <p>Silnoproud, slaboproud</p>
            </div>
          </section>
          <section className="infrastructure-article">
            <div className="infrastructure-text">
              <h2>Obec Skorkov</h2>
              <p>Veřejné osvětlení </p>
            </div>
            <div className="infrastructure-image">
              <img
                src={InfrastructurePicThree}
                alt="Veřejné osvětlení obec Skorkov"
              />
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
