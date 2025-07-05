import React, { useState } from "react";
import SmartVideo from "./SmartVideo";

export default function CurvesVideo() {
  const [useFallback, setUseFallback] = useState(false);
  const [fallbackError, setFallbackError] = useState(false);

  const handleFallbackError = () => {
    setFallbackError(true);
    setUseFallback(false);
  };

  if (useFallback && !fallbackError) {
    return (
      <img
        src="/img/curves.gif"
        alt="Curves Animation"
        className="curvesvideo-service-page"
        loading="lazy"
        onError={handleFallbackError}
      />
    );
  }

  return (
    <SmartVideo
      className="curvesvideo-service-page"
      src="/img/curves.mp4"
      poster="/img/curves.jpg"
    />
  );
}
