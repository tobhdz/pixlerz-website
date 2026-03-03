import React from "react";
import ServicePage from "./ServicePage";
import { logoDesignContent } from "../data/services";

export default function LogoDesign() {
  return (
    <ServicePage
      id="logodesign"
      content={logoDesignContent}
      sliderClassName="logo-slider"
    />
  );
}
