import React from "react";
import "./ActionCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ActionCard({ title, description, buttonText, rating }) {
  return (
    <div className="actioncard-container">
      <div className="actioncard">
        <div className="actioncard-top">
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
        <div className="actioncard-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <button className="actioncard-button">
            <span>{buttonText}</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
