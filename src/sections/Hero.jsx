import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const videoRef = useRef(null);
  const [useFallback, setUseFallback] = useState(false);
  const [fallbackError, setFallbackError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setUseFallback(true);
      });
    }
  }, []);

  const handleFallbackError = () => {
    setFallbackError(true);
    setUseFallback(false);
  };

  return (
    <div className="hero-container">
      {useFallback && !fallbackError ? (
        <img
          src="/img/headervideo.gif"
          alt="Hero Background"
          className="hero-video"
          loading="eager"
          fetchPriority="high"
          onError={handleFallbackError}
        />
      ) : (
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src="/img/headervideo.mp4"
        />
      )}
      <img
        src="/img/pixlerztext.png"
        alt="Pixlerz"
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
}
