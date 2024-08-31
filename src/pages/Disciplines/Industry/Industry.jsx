import { Link } from "react-router-dom";

import Footer from "../../../components/Footer/Footer";
import HeaderIndustry from "../../../components/Industry/HeaderIndustry";

import IndustryPicOne from "./images/letiste_praha.png";
import IndustryPicTwo from "./images/ctPark-Brno-Lisen-3.jpg";
import IndustryPicThree from "./images/Toyo2.jpg";
import IndustryPicFour from "./images/bridgestone-tatabanya-rolunk.jpg";
import Navigation from "../../../components/Navigation/Navigation";

import "./Industry.css";

export default function Industry() {
  return (
    <>
      <Navigation />
      <div className="industry-container">
        <HeaderIndustry />
        <div className="industry-content">
          <section className="industry-article">
            <div className="industry-text">
              <h2>Letiště Praha</h2>
              <p>
                <strong>Zde jsme udělali: </strong> připojení kalorimetrů,
                rozšíření křižovatky u APC a security point{" "}
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
              <h2>CTP Park Brno - Hala G47</h2>
              <p>
                <strong>Zde jsme dělali pro: </strong> MOL Logistics
              </p>
            </div>
          </section>
          <section className="industry-article">
            <div className="industry-text">
              <h2>TOYO Tires Serbia - India Bělehrad</h2>
              <p>
                <strong>Zde jsme udělali: </strong> řídící systém
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
              <h2>Bridgestone Tatabánya Kft.</h2>
              <p>
                <strong>Zde jsme udělali: </strong> řídící systém
              </p>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
