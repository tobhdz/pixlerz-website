import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import "./TestimonialsMobile.css";

export default function TestimonialsMobile({ testimonios }) {
  return (
    <div className="tm-wrapper">
      {/* Two identical sets: standard CSS marquee technique */}
      {[0, 1].map((copy) => (
        <div key={copy} className="tm-set" aria-hidden={copy === 1}>
          {testimonios.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      ))}
    </div>
  );
}
