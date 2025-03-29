import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Service from "./pages/Service";

// Componente temporal para pruebas
const TempComponent = () => (
  <div style={{ padding: "20px" }}>Página de prueba</div>
);

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/webdesign" element={<Service />} />
        <Route path="/logos" element={<Service />} />
        <Route path="/socialmedia" element={<Service />} />
        <Route path="/branding" element={<Service />} />
        <Route path="/letstalk" element={<Service />} />
      </Routes>
      <Footer />
    </>
  );
}
