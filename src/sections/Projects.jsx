import React, { useRef, useEffect } from "react";
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const titleRef = useRef(null);

  const dynamicFundingProjects = [
    {
      imagen: "./img/websites/DynamicFunding-web.webp",
    },
    {
      imagen: "./img/branding/DynamicFunding1-branding.webp",
    },
    {
      imagen: "./img/branding/DynamicFunding2-branding.webp",
    },
  ];

  const systemsEffectProjects = [
    {
      imagen: "./img/websites/TheSystemsEffect-web.webp",
    },
    {
      imagen: "./img/socials/TheSystemsEffect-socials.webp",
    },
    {
      imagen: "./img/logos/TheSystemEffects-logo.webp",
    },
  ];

  const resultsStaffingProjects = [
    {
      imagen: "./img/branding/ResultsStaffing1-branding.webp",
    },
    {
      imagen: "./img/branding/ResultsStaffing2-branding.webp",
    },
    {
      imagen: "./img/socials/ResultsStaffing-socials.webp",
    },
    {
      imagen: "./img/logos/ResultsStaffing-logo.webp",
    },
  ];

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
            {dynamicFundingProjects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        ))}
      </div>

      <div className="projects projects-reverse">
        {[1, 2].map((_, index) => (
          <div key={index} className="projects-slide" aria-hidden={index === 1}>
            {systemsEffectProjects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        ))}
      </div>

      <div className="projects">
        {[1, 2].map((_, index) => (
          <div key={index} className="projects-slide" aria-hidden={index === 1}>
            {resultsStaffingProjects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
