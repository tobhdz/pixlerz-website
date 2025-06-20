import React, { useEffect, useRef, useState } from "react";

export default function CurvesVideo() {
  const videoRef = useRef(null);
  const [useFallback, setUseFallback] = useState(false);
  const [fallbackError, setFallbackError] = useState(false);

  useEffect(() => {
    if (videoRef.current && !useFallback) {
      videoRef.current.play().catch(() => {
        setUseFallback(true);
      });
    }
  }, [useFallback]);

  const handleFallbackError = () => {
    setFallbackError(true);
    setUseFallback(false); // Volver al video si el GIF falla
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
    <video
      ref={videoRef}
      className="curvesvideo-service-page"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      disablePictureInPicture
      disableRemotePlayback
      src="/img/curves.mp4"
    />
  );
}
