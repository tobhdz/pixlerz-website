import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <video
        src="./img/headervideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        className="hero-video"
      />
      <img src="./img/pixlerztext.png" alt="Pixlerz" />
    </div>
  );
}
