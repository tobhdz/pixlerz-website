import React from "react";
import "./Solution.css";

export default function Solution({ title, description, items }) {
  return (
    <div className="solution-container">
      <div className="solution">
        <h3>{title}</h3>
        <p className="solution-desc">{description}</p>

        <div className="solution-items">
          <div className="solution-item">
            <img
              src="img/solution/solution-1.webp"
              alt="Solution 1"
              className="solution-icon"
            />
            <h4>{items[0].title}</h4>
            <p className="solution-item-desc">{items[0].description}</p>
          </div>
          <div className="solution-item">
            <img
              src="img/solution/solution-2.webp"
              alt="Solution 2"
              className="solution-icon"
            />
            <h4>{items[1].title}</h4>
            <p className="solution-item-desc">{items[1].description}</p>
          </div>
          <div className="solution-item">
            <img
              src="img/solution/solution-3.webp"
              alt="Solution 3"
              className="solution-icon"
            />
            <h4>{items[2].title}</h4>
            <p className="solution-item-desc">{items[2].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
