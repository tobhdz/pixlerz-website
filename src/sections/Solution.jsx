import React from "react";
import "./Solution.css";

export default function Solution({ title, description, items }) {
  return (
    <div className="solution-container">
      <div className="solution">
        <h3>{title}</h3>
        <p className="solution-desc">{description}</p>

        <div className="solution-items">
          {items.map((item, index) => (
            <div key={index} className="solution-item">
              <img
                src={item.image}
                alt={`Solution ${index + 1}`}
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
