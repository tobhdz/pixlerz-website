import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CursorTrail from "./components/CursorTrail";
import Landing from "./pages/Landing";
import WebDevelopment from "./pages/WebDevelopment";
import LogoDesign from "./pages/LogoDesign";
import SocialMedia from "./pages/SocialMedia";
import Branding from "./pages/Branding";
import FormPage from "./pages/FormPage";
import LegalPage from "./pages/LegalPage";

function App() {
  return (
    <>
      <CursorTrail />
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/webdevelopment" element={<WebDevelopment />} />
        <Route path="/logodesign" element={<LogoDesign />} />
        <Route path="/socialmedia" element={<SocialMedia />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/privacy-policy" element={<LegalPage />} />
        <Route path="/terms-of-use" element={<LegalPage />} />
        <Route path="/cookie-policy" element={<LegalPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
