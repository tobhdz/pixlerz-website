import React from "react";
import "./ServiceHead.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ServiceHead({
  title,
  description,
  buttonText,
  buttonText2,
  rating,
}) {
  return (
    <div className="servicehead-container">
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
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <p>{rating}</p>
          </div>
        </div>
        <div className="servicehead-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="servicehead-button-box">
            <button className="servicehead-button">
              <span>{buttonText}</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <button className="servicehead-button2">
              <span>{buttonText2}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
