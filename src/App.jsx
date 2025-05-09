import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Landing from "./pages/Landing";
import Service from "./pages/Service";

function App() {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/webdevelopment" element={<Service />} />
        <Route path="/logodesign" element={<Service />} />
        <Route path="/socialmedia" element={<Service />} />
        <Route path="/branding" element={<Service />} />
        <Route path="/letstalk" element={<Service />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
