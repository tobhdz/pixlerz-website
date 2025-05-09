import React from "react";
import "./Solution.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faBolt,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  faEnvelopeOpenText,
  faBolt,
  faThumbsUp,
};

export default function Solution({ title, description, items }) {
  return (
    <div className="solution-container">
      <div className="solution">
        <h3>{title}</h3>
        <p className="solution-desc">{description}</p>

        <div className="solution-items">
          {items.map((item, index) => (
            <div key={index} className="solution-item">
              <FontAwesomeIcon
                icon={iconMap[item.icon]}
                className="solution-icon"
              />
              <h4>{item.title}</h4>
              <p className="solution-item-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
