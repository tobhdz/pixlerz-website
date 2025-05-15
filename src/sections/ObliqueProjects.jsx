import React, { useRef, useEffect } from "react";
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";
// import AnimatedSection from "../components/AnimatedSection.jsx"; // Comentado o eliminado si no se usa en otro lugar aquí

export default function ObliqueProjects({ projects = [] }) {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              entry.target.classList.add("visible");
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div className="projects-container" id="projects">
      {/* Elemento de video eliminado de aquí */}
      {/* AnimatedSection eliminado de aquí */}
      <div className="projects oblique">
        {[1, 2].map((_, index) => (
          <div className="projects-slide" key={index} aria-hidden={index === 1}>
            {projects.map((project, projectIndex) => (
              <ProjectCard key={projectIndex} {...project} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
