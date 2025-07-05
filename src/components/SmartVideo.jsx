import React, { useEffect, useRef, useState } from "react";

export default function SmartVideo({
  src,
  poster,
  forceLoad = false,
  ...props
}) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(forceLoad);

  useEffect(() => {
    if (forceLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [forceLoad]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload={shouldLoad ? "auto" : "none"}
      {...props}
    />
  );
}
