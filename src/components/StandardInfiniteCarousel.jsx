import React, { useRef, useEffect, useState, useCallback } from "react";
import ProjectCard from "./ProjectCard";
import "./StandardInfiniteCarousel.css";

export default function StandardInfiniteCarousel({
  projects,
  reverse = false,
  className = "",
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Calcular cuántos duplicados necesitamos
  const calculateDuplicates = useCallback(() => {
    const cardWidth = windowWidth > 1500 ? 612 : windowWidth > 1000 ? 459 : 306;
    const gap = windowWidth > 768 ? 30 : windowWidth > 480 ? 20 : 15;
    const totalWidth = cardWidth + gap;
    const viewportWidth = windowWidth;

    // Calcular cuántas tarjetas caben en el viewport
    const cardsPerViewport = Math.ceil(viewportWidth / totalWidth);

    // Para un efecto seamless perfecto, necesitamos al menos 3 sets completos
    const baseDuplicates = Math.max(3, Math.ceil(cardsPerViewport * 3));

    return baseDuplicates;
  }, [windowWidth]);

  // Manejar resize con debounce
  const handleResize = useCallback(() => {
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 150);
    };

    debouncedResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // Generar elementos del carrusel usando la técnica estándar
  const generateCarouselItems = useCallback(() => {
    const duplicateCount = calculateDuplicates();
    const items = [];

    // Crear múltiples copias de los proyectos para asegurar continuidad
    for (let i = 0; i < duplicateCount; i++) {
      items.push(...projects);
    }

    return items;
  }, [projects, calculateDuplicates]);

  const carouselItems = generateCarouselItems();

  return (
    <div
      ref={containerRef}
      className={`standard-infinite-carousel ${
        reverse ? "reverse" : ""
      } ${className}`}
    >
      <div className="standard-carousel-container">
        <div ref={trackRef} className="standard-carousel-track">
          {carouselItems.map((project, i) => (
            <div
              key={`${project.imagen}-${i}`}
              className="standard-carousel-item"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
