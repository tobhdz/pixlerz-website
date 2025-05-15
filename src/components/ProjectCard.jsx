import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./ProjectCard.css";

export default function ProjectCard({ imagen }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Deja de observar una vez visible
        }
      },
      {
        threshold: 0.1, // Carga cuando al menos el 10% es visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className="project-card" ref={cardRef}>
      <div
        className="project-card-image"
        style={{
          backgroundImage: isVisible ? `url(${imagen})` : "none", // Aplica solo si es visible
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}

ProjectCard.propTypes = {
  imagen: PropTypes.string.isRequired,
};
