import { Link } from "react-router-dom";

import HeaderHealthcare from "../../../components/Healthcare/HeaderHealthcare";

import HealthcarePicOne from "./images/ocniKlinikaKladno.png";
import HealthcarePicTwo from "./images/nemocniceSedlcany.png";
import Navigation from "../../../components/Navigation/Navigation";

import "./Healthcare.css";
import Footer from "../../../components/Footer/Footer";

export default function Healthcare() {
  return (
    <>
      <Navigation />
      <div className="healthcare-container">
        <HeaderHealthcare />
        <div className="healthcare-content">
          <section className="healthcare-article">
            <div className="healthcare-text">
              <h2>Oční klinika Kladno</h2>
              <p> <strong>Zde jsme udělali: </strong> silnoproud</p>
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
              <h2>Nemocnice Sedlčany</h2>
              <p>
                <strong>Zde jsme udělali: </strong> kompletní rekonstrukci
                elektroinstalace
              </p>
            </div>
          </section>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
