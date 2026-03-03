import React from "react";
import ServicePage from "./ServicePage";
import { webDevelopmentContent } from "../data/services";

export default function WebDevelopment() {
  return (
    <ServicePage
      content={webDevelopmentContent}
      sliderClassName="web-slider"
    />
  );
}
