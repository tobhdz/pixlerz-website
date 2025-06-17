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
        question: "What do you actually do?",
        answer: "We build badass brands. Strategy, design, websites, content, social—full-stack creative so you don’t patch together five different freelancers.",
      },
      {
        question: "Who works on my project?",
        answer: "No interns, no apprentices. You get senior-level designers, developers, strategists—all handpicked to be the dream team your brand deserves.",
      },
      {
        question: "How long will this take?",
        answer: "Fast is for amateurs; done-right takes time. Brand identity typically takes 2–3 weeks, websites 4–8+ weeks, depending on scope and how fast you get us feedback.",
      },
      {
        question: "Do you offer ongoing support?",
        answer: "Always. Launch day isn’t goodbye—it’s just the start line. We stick around so your brand doesn’t fizzle out.",
      },
    ],
  },
  actionCard: {
    title: "Join 200+ brands that got it right",
    description:
      "We don't do average. We do unforgettable.",
    buttonText: "Let's talk",
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

      <AnimatedSection animation="scale-in" delay={200}>
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
