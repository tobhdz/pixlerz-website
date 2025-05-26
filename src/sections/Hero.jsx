import React, { useEffect, useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play().catch(() => {
              // Manejo silencioso de errores de reproducción automática
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
  }, []);

  return (
    <div className="hero-container">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        disableRemotePlayback
        src="./img/headervideo.mp4"
      />
      <img
        src="./img/pixlerztext.png"
        alt="Pixlerz"
        loading="eager"
        fetchpriority="high"
      />
    </div>
  );
}
