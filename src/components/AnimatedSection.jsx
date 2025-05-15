import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const AnimatedSection = ({
  children,
  animation = "fade-in-up",
  delay = 0,
  className = "",
  zIndex = 6,
  ...props
}) => {
  const sectionRef = useIntersectionObserver();

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-in-left":
        return "animate-fade-in-left";
      case "fade-in-right":
        return "animate-fade-in-right";
      case "scale-in":
        return "animate-scale-in";
      default:
        return "animate-fade-in-up";
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`${getAnimationClass()} ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        position: "relative",
        zIndex: zIndex,
      }}
      {...props}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
