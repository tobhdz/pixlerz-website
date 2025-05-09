import React from "react";
import "./Benefits.css";

export default function Benefits({ title, subtitle, items }) {
  return (
    <div className="benefits-container">
      <div className="benefits">
        <h3>{title}</h3>
        <p className="benefits-subtitle">{subtitle}</p>

        <div className="benefits-grid">
          {items.map((item, index) => (
            <div key={index} className="benefit-item">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
