import React from "react";
import "./ServiceHead.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ServiceHead() {
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
            <p>+000</p>
          </div>
        </div>
        <div className="servicehead-content">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
            Pellentesque nec nisi posuere, hendrerit massa non, pellentesque
            dolor suspendisse potenti. Donec consectetur tristique quam, eget
            blandit dui convallis non.
          </p>
          <div className="servicehead-button-box">
            <button className="servicehead-button">
              <span>Button</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <button className="servicehead-button2">
              <span>Button</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
