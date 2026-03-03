import React from "react";
import ServicePage from "./ServicePage";
import { socialMediaContent } from "../data/services";

export default function SocialMedia() {
  return (
    <ServicePage
      id="socialmedia"
      content={socialMediaContent}
      sliderClassName="social-slider"
    />
  );
}
