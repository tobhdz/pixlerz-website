import React from "react";
import "./Service.css";
import ServiceHead from "../sections/ServiceHead.jsx";
import ObliqueProjects from "../sections/ObliqueProjects.jsx";
import Problem from "../sections/Problem.jsx"
import Solution from "../sections/Solution.jsx";
import Benefits from "../sections/Benefits.jsx";
import FAQs from "../sections/FAQs.jsx";
import ActionCard from "../sections/ActionCard.jsx";

export default function Landing() {
  return (
    <div className="service-container">
      <ServiceHead />
      <ObliqueProjects />
      <Problem />
      <Solution />
      <Benefits />
      <FAQs />
      <ActionCard />
    </div>
  );
}
