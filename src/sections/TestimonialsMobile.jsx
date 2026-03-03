import React, { useRef, useEffect, useState } from "react";
import TestimonialCard from "../components/TestimonialCard";
import "./TestimonialsMobile.css";

export default function TestimonialsMobile({ testimonios }) {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Appear on scroll
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

  // Smooth infinite scroll via rAF — no CSS animation reset = no blink
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !isVisible) return;

    let offset = 0;
    let animId;
    const speed = 0.5; // px per frame (~30px/sec at 60fps)

    const animate = () => {
      const firstSet = track.firstElementChild;
      if (!firstSet) return;

      // Height of one full set of cards (including its padding-bottom gap)
      const setHeight = firstSet.offsetHeight;

      offset += speed;

      // When we've scrolled past one full set, snap back seamlessly
      if (offset >= setHeight) {
        offset -= setHeight;
      }

      track.style.transform = `translateY(${-offset}px)`;
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isVisible]);

  return (
    <div
      ref={wrapperRef}
      className={`tm-wrapper ${isVisible ? "tm-visible" : ""}`}
    >
      <div ref={trackRef} className="tm-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="tm-set" aria-hidden={copy === 1}>
            {testimonios.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
