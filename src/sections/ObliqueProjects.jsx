import React, { useRef, useEffect } from "react";
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";

export default function ObliqueProjects() {
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
      <video autoplay="autoplay" muted loop="true" className="curvesvideo">
        <source src="./public/img/curves.mp4" type="video/mp4" />
      </video>
      <div className="projects oblique">
        {[1, 2].map((_, index) => (
          <div key={index} className="projects-slide" aria-hidden={index === 1}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        ))}
      </div>
    </div>
  );
}
