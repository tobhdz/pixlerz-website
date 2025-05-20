import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ActionCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ActionCard({ title, description, buttonText, rating }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animar estrellas secuencialmente
          const stars = entry.target.querySelectorAll(
            ".animate-star-fade-in-down"
          );
          stars.forEach((star, index) => {
            setTimeout(() => {
              star.classList.add("visible");
            }, index * 200); // 200ms de retraso entre cada estrella
          });

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

  return (
    <div className="actioncard-container" ref={containerRef}>
      <div className="actioncard">
        <div className="actioncard-top">
          <div className="discs">
            <div
              style={{ backgroundImage: "url(./img/clients/Derek.webp)" }}
            ></div>
            <div
              style={{
                backgroundImage: "url(./img/clients/FernandoAndres.webp)",
              }}
            ></div>
            <div
              style={{
                backgroundImage: "url(./img/clients/RubenFuentes.webp)",
              }}
            ></div>
            <div
              style={{ backgroundImage: "url(./img/clients/David.webp)" }}
            ></div>
            <div
              style={{ backgroundImage: "url(./img/clients/NormaDevine.webp)" }}
            ></div>
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
        <div className="actioncard-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <Link to="/form">
            <button className="actioncard-button">
              <span>{buttonText}</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
