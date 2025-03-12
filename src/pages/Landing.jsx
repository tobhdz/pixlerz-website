import React from "react";
import "./Landing.css";
import Hero from "../sections/Hero.jsx";
import Services from "../sections/Services.jsx";
import Projects from "../sections/Projects.jsx";
import WhyUs from "../sections/WhyUs.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import FAQs from "../sections/FAQs.jsx";
import ActionCard from "../sections/ActionCard.jsx";

export default function Landing() {
  return (
    <div className="landing-container">
      <Hero />
      <Services />
      <Projects />
      <WhyUs />
      <Testimonials />
      <FAQs />
      <ActionCard />
    </div>
  );
}
