import React from "react";
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";

export default function ObliqueProjects({ projects = [] }) {
  return (
    <div className="projects-container" id="projects">
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
