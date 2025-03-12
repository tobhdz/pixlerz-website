import React, { useRef, useEffect } from "react";
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
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

      <div className="projects">
        {[1, 2].map((_, index) => (
          <div key={index} className="projects-slide" aria-hidden={index === 1}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        ))}
      </div>

      <div className="projects projects-reverse">
        {[1, 2].map((_, index) => (
          <div key={index} className="projects-slide" aria-hidden={index === 1}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        ))}
      </div>

      <div className="projects">
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
