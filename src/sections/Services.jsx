import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

export default function Services() {
  return (
    <div className="services-container">
      <Link to="/webdevelopment" className="service">
        <div className="image">
          <img src="./img/development.png" alt="Web Development" />
        </div>
        <div className="service-details">
          <h3>Web Development</h3>
          <span>Starting at $1500</span>
        </div>
        <p>Dolor sit amet.</p>
      </Link>
      <Link to="/logodesign" className="service">
        <div className="image">
          <video
            src="./img/pixlerz.mp4"
            alt="Logo Design"
            autoPlay
            muted
            loop
          />
        </div>
        <div className="service-details">
          <h3>Logo Design</h3>
          <span>Starting at $1000</span>
        </div>
        <p>Dolor sit amet.</p>
      </Link>
      <Link to="/social-media" className="service">
        <div className="image">
          <video
            src="./img/socialmedia.mp4"
            alt="Social Media"
            autoPlay
            muted
            loop
          />
        </div>
        <div className="service-details">
          <h3>Social Media</h3>
          <span>Starting at $2000</span>
        </div>
        <p>Dolor sit amet.</p>
      </Link>
      <Link to="/branding" className="service">
        <div className="image">
          <img src="./img/branding.png" alt="Branding" />
        </div>
        <div className="service-details">
          <h3>Branding</h3>
          <span>Starting at $*</span>
        </div>
        <p>Dolor sit amet.</p>
      </Link>
    </div>
  );
}
