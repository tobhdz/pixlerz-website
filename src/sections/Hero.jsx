import React from "react";
import "./Hero.css";
import SmartVideo from "../components/SmartVideo";

export default function Hero() {
  return (
    <div className="hero-container">
      <SmartVideo
        className="hero-video"
        src="/img/headervideo.mp4"
        poster="/img/headervideo.jpg"
        forceLoad={true}
      />
      <img
        src="/img/pixlerztext.png"
        alt="Pixlerz"
        loading="eager"
        fetchpriority="high"
      />
    </div>
  );
}
