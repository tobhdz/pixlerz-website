import React from "react";
import "./Landing.css";
import Hero from "../sections/Hero.jsx";
import Services from "../sections/Services.jsx";
import Projects from "../sections/Projects.jsx";
import WhyUs from "../sections/WhyUs.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import FAQs from "../sections/FAQs.jsx";
import ActionCard from "../sections/ActionCard.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";

const landingContent = {
  faqs: {
    title: "FAQs",
    items: [
      {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        question: "Consectetur adipiscing elit sed do?",
        answer:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        question: "Ut enim ad minim veniam quis nostrud?",
        answer:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      },
    ],
  },
  actionCard: {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Pellentesque nec nisi posuere, hendrerit massa non, pellentesque dolor suspendisse potenti. Donec consectetur tristique quam, eget blandit dui convallis non.",
    buttonText: "Call to action",
    rating: "+32 Projects completed",
  },
};

export default function Landing() {
  return (
    <div className="landing-container">
      <Hero />
      <Services />

      <AnimatedSection animation="fade-in-up" delay={200}>
        <Projects />
      </AnimatedSection>

      <AnimatedSection animation="fade-in-right" delay={200} zIndex={7}>
        <WhyUs />
      </AnimatedSection>

      <AnimatedSection animation="fade-in-up" delay={200}>
        <Testimonials />
      </AnimatedSection>

      <AnimatedSection animation="fade-in-left" delay={200}>
        <FAQs {...landingContent.faqs} />
      </AnimatedSection>

      <AnimatedSection animation="fade-in-right" delay={200}>
        <ActionCard {...landingContent.actionCard} />
      </AnimatedSection>
    </div>
  );
}
