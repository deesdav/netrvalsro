import { Link } from "react-router-dom";

import Footer from "../../../components/MainPage/Footer";
import SubPagesNavigation from "../../../components/MainPage/SubPagesNavigation";
import HeaderHealthcare from "../../../components/Healthcare/HeaderHealthcare";

import HealthcarePicOne from "./images/ocniKlinikaKladno.png";
import HealthcarePicTwo from "./images/nemocniceSedlcany.png";
import Navigation from "../../../components/MainPage/Navigation";

import "./Healthcare.css";

export default function Healthcare() {
  return (
    <>
      <Navigation />
      <div className="healthcare-container">
        <HeaderHealthcare />
        <div className="healthcare-content">
          <section className="healthcare-article">
            <div className="healthcare-text">
              <h2>Oční klinika Kladno - Silnoproud</h2>
              <p>
                Detailed description and information about the Oční klinika
                Kladno project can be added here. This can include technical
                specifications, key features, and the impact of the project.
              </p>
            </div>
            <div className="healthcare-image">
              <img src={HealthcarePicOne} alt="Oční klinika Kladno" />
            </div>
          </section>
          <section className="healthcare-article">
            <div className="healthcare-image">
              <img src={HealthcarePicTwo} alt="Nemocnice Sedlčany" />
            </div>
            <div className="healthcare-text">
              <h2>
                Nemocnice Sedlčany - Kompletní Rekonstrukce Elektroinstalace
              </h2>
              <p>
                Detailed description and information about the Nemocnice
                Sedlčany project can be added here. This can include technical
                specifications, key features, and the impact of the project.
              </p>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
