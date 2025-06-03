import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const videoRef = useRef(null);
  const [useFallback, setUseFallback] = useState(false);
  const [fallbackError, setFallbackError] = useState(false);

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
          fetchpriority="high"
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
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
          src="/img/headervideo.mp4"
        />
      )}
      <img
        src="/img/pixlerztext.png"
        alt="Pixlerz"
        loading="eager"
        fetchpriority="high"
      />
    </div>
  );
}
