import React from "react";
import ServicePage from "./ServicePage";
import { brandingContent } from "../data/services";

export default function Branding() {
  return (
    <ServicePage
      id="branding"
      content={brandingContent}
      sliderClassName="branding-slider"
    />
  );
}
