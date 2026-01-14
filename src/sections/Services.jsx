import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import AnimatedSection from "../components/AnimatedSection.jsx";
import SmartVideo from "../components/SmartVideo";

const VideoComponent = ({ src, alt }) => {
  // Forzar carga inmediata para evitar problemas de observer
  return (
    <SmartVideo
      src={src}
      poster={src.replace(".mp4", ".jpg")}
      alt={alt}
      loading="lazy"
      forceLoad={true}
    />
  );
};

export default function Services() {
  return (
    <div className="services-container">
      <AnimatedSection animation="scale-in">
        <Link to="/webdevelopment" className="service first">
          <div className="image">
            <img src="./img/development.png" alt="Web Development" />
          </div>
          <div className="service-details">
            <h3>Web Development</h3>
          </div>
        </Link>
      </AnimatedSection>
      <AnimatedSection animation="scale-in">
        <Link to="/logodesign" className="service">
          <div className="image">
            <VideoComponent src="./img/pixlerz.mp4" alt="Logo Design" />
          </div>
          <div className="service-details">
            <h3>Logo Design</h3>
          </div>
        </Link>
      </AnimatedSection>
      <AnimatedSection animation="scale-in">
        <Link to="/socialmedia" className="service 2">
          <div className="image">
            <VideoComponent src="./img/socialmedia.mp4" alt="Social Media" />
          </div>
          <div className="service-details">
            <h3>Social Media</h3>
          </div>
        </Link>
      </AnimatedSection>
      <AnimatedSection animation="scale-in">
        <Link to="/branding" className="service last">
          <div className="image">
            <img src="./img/branding.png" alt="Branding" />
          </div>
          <div className="service-details">
            <h3>Branding</h3>
          </div>
        </Link>
      </AnimatedSection>
    </div>
  );
}
