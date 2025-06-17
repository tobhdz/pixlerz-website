import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import AnimatedSection from "../components/AnimatedSection.jsx";

const VideoComponent = ({ src, alt }) => {
  const videoRef = useRef(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current && !useFallback) {
            videoRef.current.play().catch(() => {
              setUseFallback(true);
            });
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [useFallback]);

  if (useFallback) {
    const gifSrc = src.replace(".mp4", ".gif");
    return <img src={gifSrc} alt={alt} loading="lazy" />;
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      disablePictureInPicture
      disableRemotePlayback
      loading="lazy"
      alt={alt}
      src={src}
    />
  );
};

export default function Services() {
  return (
    <div className="services-container">
      <AnimatedSection animation="scale-in">
        <Link to="/webdevelopment" className="service">
          <div className="image">
            <img src="./img/development.png" alt="Web Development" />
          </div>
          <div className="service-details">
            <h3>Web Development</h3>
            <span>Starts at $3000</span>
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
            <span>Starts at $1200</span>
          </div>
        </Link>
      </AnimatedSection>
      <AnimatedSection animation="scale-in">
        <Link to="/socialmedia" className="service">
          <div className="image">
            <VideoComponent src="./img/socialmedia.mp4" alt="Social Media" />
          </div>
          <div className="service-details">
            <h3>Social Media</h3>
            <span>Starts at $3000</span>
          </div>
        </Link>
      </AnimatedSection>
      <AnimatedSection animation="scale-in">
        <Link to="/branding" className="service">
          <div className="image">
            <img src="./img/branding.png" alt="Branding" />
          </div>
          <div className="service-details">
            <h3>Branding</h3>
            <span>Contact Us</span>
          </div>
        </Link>
      </AnimatedSection>
    </div>
  );
}
