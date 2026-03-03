import React, { useRef, useEffect, useState } from "react";
import TestimonialCard from "../components/TestimonialCard";
import "./TestimonialsMobile.css";

export default function TestimonialsMobile({ testimonios }) {
  const wrapperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`tm-wrapper ${isVisible ? "tm-visible" : ""}`}
    >
      {/* Two identical sets: marquee technique for seamless infinite scroll */}
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
