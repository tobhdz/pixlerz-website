import React, { useRef, useEffect } from "react";
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";

export default function ObliqueProjects({ projects = [] }) {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      {
        threshold: 0.5,
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
      <video autoPlay muted loop className="curvesvideo">
        <source src="./public/img/curves.mp4" type="video/mp4" />
      </video>
      <div className="projects oblique">
        {[1, 2].map((_, index) => (
          <div key={index} className="projects-slide" aria-hidden={index === 1}>
            {projects.map((project, projectIndex) => (
              <ProjectCard key={projectIndex} {...project} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
