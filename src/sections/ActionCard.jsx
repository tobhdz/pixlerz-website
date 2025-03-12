import React from 'react'
import "./ActionCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ActionCard() {
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
            <p>+000</p>
          </div>
        </div>
        <div className="actioncard-content">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
            Pellentesque nec nisi posuere, hendrerit massa non, pellentesque dolor suspendisse potenti. Donec consectetur tristique quam, eget blandit dui convallis non.
          </p>
          <button class="actioncard-button">
            <span>Call to action</span>
            <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
      </div>
    </div>
  );
}
