import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Service from "./pages/Service";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </Router>
  );
}
