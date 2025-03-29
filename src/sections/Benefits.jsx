import React from "react";
import "./Benefits.css";

export default function Benefits() {
  return (
    <div className="benefits-container">
      <div className="benefits">
        <h3>Benefits title</h3>
        <p className="benefits-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>

        <div className="benefits-grid">
          <div className="benefit-item">
            <h4>🌟 Lorem Ipsum</h4>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="benefit-item">
            <h4>🚀 Dolor Sit</h4>
            <p>Ut enim ad minim veniam quis nostrud exercitation ullamco</p>
          </div>

          <div className="benefit-item">
            <h4>🌈 Amet Consectetur</h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit</p>
          </div>

          <div className="benefit-item">
            <h4>🎉 Adipisicing Elit</h4>
            <p>Excepteur sint occaecat cupidatat non proident sunt in culpa</p>
          </div>

          <div className="benefit-item">
            <h4>🚫 Tempor Incididunt</h4>
            <p>Qui officia deserunt mollit anim id est laborum consectetur</p>
          </div>

          <div className="benefit-item">
            <h4>🌱 Magna Aliqua</h4>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut</p>
          </div>
        </div>
      </div>
    </div>
  );
}
