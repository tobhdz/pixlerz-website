import React from "react";
import "./Service.css";
import ServiceHead from "../sections/ServiceHead.jsx";
import ObliqueProjects from "../sections/ObliqueProjects.jsx";
import Problem from "../sections/Problem.jsx";
import Solution from "../sections/Solution.jsx";
import Benefits from "../sections/Benefits.jsx";
import FAQs from "../sections/FAQs.jsx";
import ActionCard from "../sections/ActionCard.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";
import CurvesVideo from "../components/CurvesVideo";

export default function ServicePage({ id, content, sliderClassName }) {
  return (
    <div className="service-container" id={id}>
      <CurvesVideo />
      <AnimatedSection animation="scale-in" zIndex={7}>
        <ServiceHead {...content.serviceHead} />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-up">
        <div className={`projects-container ${sliderClassName}`}>
          <ObliqueProjects {...content.obliqueProjects} />
        </div>
      </AnimatedSection>
      <AnimatedSection animation="fade-in-left">
        <Problem {...content.problem} />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-right">
        <Solution {...content.solution} />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-up">
        <Benefits {...content.benefits} />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-left">
        <FAQs />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-right">
        <ActionCard />
      </AnimatedSection>
    </div>
  );
}
