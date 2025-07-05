import React, { useRef, useState } from "react";
import "./Hero.css";
import SmartVideo from "../components/SmartVideo";

export default function Hero() {
  const [useFallback, setUseFallback] = useState(false);
  const [fallbackError, setFallbackError] = useState(false);

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
        <SmartVideo
          className="hero-video"
          src="/img/headervideo.mp4"
          poster="/img/headervideo.jpg"
          forceLoad={true}
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
