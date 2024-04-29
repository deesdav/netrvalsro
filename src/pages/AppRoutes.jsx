import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage/MainPage.jsx";
import Healthcare from "./Disciplines/Healthcare/Healthcare";
import Contacts from "./Contacts/Contacts";
import References from "./References/References";
import Skoda from "./Disciplines/Skoda/Skoda";
import Industry from "./Disciplines/Industry/Industry";
import Infrastructure from "./Disciplines/Infrastructure/Infrastructure";
import "../App.css";
import { React, useEffect } from "react";

export default function AppRoutes() {
  useEffect(() => {
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>} />
          <Route path="/healthcare" element={<Healthcare></Healthcare>} />
          <Route path="/skoda" element={<Skoda></Skoda>} />
          <Route path="/industry" element={<Industry></Industry>} />
          <Route
            path="/infrastructure"
            element={<Infrastructure></Infrastructure>}
          />

          <Route path="/references" element={<References></References>} />
          <Route path="/contacts" element={<Contacts></Contacts>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
