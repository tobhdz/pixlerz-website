import React, { useRef, useEffect } from "react";
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";

export default function ObliqueProjects({ projects = [] }) {
  const titleRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              entry.target.classList.add("visible");
            } else if (entry.target === videoRef.current) {
              videoRef.current.play().catch(() => {
                // Manejo silencioso de errores de reproducción automática
              });
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
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="projects-container" id="projects">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        disableRemotePlayback
        loading="lazy"
        className="curvesvideo"
        src="./img/curves.mp4"
      />
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
