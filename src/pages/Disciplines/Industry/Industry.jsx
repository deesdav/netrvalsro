import { Link } from "react-router-dom";

import Footer from "../../../components/MainPage/Footer";
import HeaderIndustry from "../../../components/Industry/HeaderIndustry";

import IndustryPicOne from "./images/letiste_praha.png";
import IndustryPicTwo from "./images/ctPark-Brno-Lisen-3.jpg";
import IndustryPicThree from "./images/Toyo2.jpg";
import IndustryPicFour from "./images/bridgestone-tatabanya-rolunk.jpg";
import Navigation from "../../../components/MainPage/Navigation";

import './Industry.css'; 

export default function Industry() {
  return (
    <>
      <Navigation />
      <div className="industry-container">
        <HeaderIndustry />
        <div className="industry-content">
          <section className="industry-article">
            <div className="industry-text">
              <h2>Letiště Praha - Připojení Kalorimetrů</h2>
              <p>
                Detailní popis projektu Letiště Praha, zahrnující připojení kalorimetrů, rozšíření křižovatky u APC a Security point.
              </p>
            </div>
            <div className="industry-image">
              <img src={IndustryPicOne} alt="Letiště Praha" />
            </div>
          </section>
          <section className="industry-article">
            <div className="industry-image">
              <img src={IndustryPicTwo} alt="CTP Park Brno" />
            </div>
            <div className="industry-text">
              <h2>CTP Park Brno - Hala G47 - MOL Logistic</h2>
              <p>
                Detailní popis projektu CTP Park Brno, hala G47, včetně informací o MOL Logistic.
              </p>
            </div>
          </section>
          <section className="industry-article">
            <div className="industry-text">
              <h2>TOYO Tires Serbia - India Bělehrad - Řídící Systém</h2>
              <p>
                Detailní popis projektu TOYO Tires Serbia v Indii, Bělehrad, včetně implementace řídícího systému.
              </p>
            </div>
            <div className="industry-image">
              <img src={IndustryPicThree} alt="TOYO Tires Serbia" />
            </div>
          </section>
          <section className="industry-article">
            <div className="industry-image">
              <img src={IndustryPicFour} alt="Bridgestone Tatabánya" />
            </div>
            <div className="industry-text">
              <h2>Bridgestone Tatabánya Kft. - Řídící Systém</h2>
              <p>
                Detailní popis projektu Bridgestone Tatabánya Kft. v Maďarsku, včetně implementace řídícího systému.
              </p>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
