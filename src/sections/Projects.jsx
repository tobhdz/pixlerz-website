import React, { useRef, useEffect } from "react";
import "./Projects.css";
import StandardInfiniteCarousel from "../components/StandardInfiniteCarousel";

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
    <div className="projects-container home-slider" id="projects">
      <StandardInfiniteCarousel
        projects={dynamicFundingProjects}
        reverse={false}
        className="projects"
      />

      <StandardInfiniteCarousel
        projects={systemsEffectProjects}
        reverse={true}
        className="projects"
      />

      <StandardInfiniteCarousel
        projects={resultsStaffingProjects}
        reverse={false}
        className="projects"
      />
    </div>
  );
}
