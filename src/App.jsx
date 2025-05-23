import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CursorTrail from "./components/CursorTrail";
import Landing from "./pages/Landing";
import Service from "./pages/Service";
import WebDevelopment from "./pages/WebDevelopment";
import LogoDesign from "./pages/LogoDesign";
import SocialMedia from "./pages/SocialMedia";
import Branding from "./pages/Branding";
import FormPage from "./pages/FormPage";

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
