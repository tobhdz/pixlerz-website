import React from "react";
import "./Landing.css";
import Hero from "../sections/Hero.jsx";
import Services from "../sections/Services.jsx";
import Projects from "../sections/Projects.jsx";
import WhyUs from "../sections/WhyUs.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import FAQs from "../sections/FAQs.jsx";
import ActionCard from "../sections/ActionCard.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";

export default function Landing() {
  return (
    <div className="landing-container">
      <Hero />
      <Services />

      <AnimatedSection animation="fade-in-up" delay={200}>
        <Projects />
      </AnimatedSection>

      <AnimatedSection animation="fade-in-right" delay={200} zIndex={7}>
        <WhyUs />
      </AnimatedSection>

      <AnimatedSection animation="scale-in" delay={200}>
        <Testimonials />
      </AnimatedSection>

      <AnimatedSection animation="fade-in-left" delay={200}>
        <FAQs />
      </AnimatedSection>

      <AnimatedSection animation="fade-in-right" delay={200}>
        <ActionCard />
      </AnimatedSection>
    </div>
  );
}
