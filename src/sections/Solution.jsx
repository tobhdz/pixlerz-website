import React from "react";
import "./Solution.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faBolt,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

export default function Solution() {
  return (
    <div className="solution-container">
      <div className="solution">
        <h3>Solution title</h3>
        <p className="solution-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

        <div className="solution-items">
          <div className="solution-item">
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              className="solution-icon"
            />
            <h4>Lorem Ipsum</h4>
            <p className="solution-item-desc">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="solution-item">
            <FontAwesomeIcon icon={faBolt} className="solution-icon" />
            <h4>Dolor Sit</h4>
            <p className="solution-item-desc">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </div>

          <div className="solution-item">
            <FontAwesomeIcon icon={faThumbsUp} className="solution-icon" />
            <h4>Amet Consectetur</h4>
            <p className="solution-item-desc">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
