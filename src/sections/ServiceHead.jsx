import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ServiceHead.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ServiceHead({ title, description, rating }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const animatedElements = entry.target.querySelectorAll(
            ".animate-fade-in-up"
          );
          animatedElements.forEach((el) => el.classList.add("visible"));

          // Animar estrellas secuencialmente
          const stars = entry.target.querySelectorAll(
            ".animate-star-fade-in-down"
          );
          stars.forEach((star, index) => {
            setTimeout(() => {
              star.classList.add("visible");
            }, index * 200); // 200ms de retraso entre cada estrella
          });

          // Animar botón
          const button = entry.target.querySelector(".servicehead-button2");
          setTimeout(() => {
            button.classList.add("visible");
          }, 1000);

          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const processTitle = (text) => {
    if (!text) return "";
    const parts = text.split(/(\*[^\*]+\*)/g);

    return parts.map((part, index) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        return (
          <span key={index} className="instrument-italic">
            {part.substring(1, part.length - 1)}
          </span>
        );
      } else {
        return part;
      }
    });
  };

  return (
    <div className="servicehead-container" ref={containerRef}>
      <div className="servicehead">
        <div className="servicehead-top">
          <div className="discs">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="puntuation">
            <FontAwesomeIcon
              icon={faStar}
              className="animate-star-fade-in-down"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="animate-star-fade-in-down"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="animate-star-fade-in-down"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="animate-star-fade-in-down"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="animate-star-fade-in-down"
            />
            <p>{rating}</p>
          </div>
        </div>
        <div className="servicehead-content">
          <h3>{processTitle(title)}</h3>
          <p>{description}</p>
          <div className="servicehead-button-box">
            <Link to="/form">
              <button className="servicehead-button2 animate-fade-in-up">
                <span>Let's talk</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
