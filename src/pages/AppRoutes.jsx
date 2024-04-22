import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage/MainPage.jsx";
import Healthcare from "./Disciplines/Healthcare/Healthcare";
import Contacts from "./Contacts/Contacts";
import References from "./References/References";
import Industry from "./Disciplines/Industry/Industry";
import Skoda from "./Disciplines/Skoda/Skoda";
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
          <Route
            path="/disciplines/healthcare"
            element={<Healthcare></Healthcare>}
          />
          <Route path="/disciplines/skoda" element={<Skoda></Skoda>} />
          <Route path="/disciplines/industry" element={<Industry></Industry>} />

          <Route path="/references" element={<References></References>} />
          <Route path="/contacts" element={<Contacts></Contacts>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
