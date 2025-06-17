import React from "react";
import "./Service.css";
import ServiceHead from "../sections/ServiceHead.jsx";
import ObliqueProjects from "../sections/ObliqueProjects.jsx";
import Problem from "../sections/Problem.jsx";
import Solution from "../sections/Solution.jsx";
import Benefits from "../sections/Benefits.jsx";
import FAQs from "../sections/FAQs.jsx";
import ActionCard from "../sections/ActionCard.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";
import CurvesVideo from "../components/CurvesVideo";

const serviceContent = {
  serviceHead: {
    title: "We Build Brands That Stick",
    description:
      "Your brand isn’t your logo. It’s how people remember you. We build brands that actually mean something — and stay sharp for the long haul.",
    rating: "+32 Projects completed",
  },
  obliqueProjects: {
    projects: [
      {
        imagen: "./img/branding/QLQEstaComida1-branding.webp",
      },
      {
        imagen: "./img/branding/QLQEstaComida2-branding.webp",
      },
      {
        imagen: "./img/branding/SupremeElectricSolutions1-branding.webp",
      },
      {
        imagen: "./img/branding/SupremeElectricSolutions2-branding.webp",
      },
      {
        imagen: "./img/branding/DynamicFunding1-branding.webp",
      },
      {
        imagen: "./img/branding/DynamicFunding2-branding.webp",
      },
      {
        imagen: "./img/branding/ResultsStaffing1-branding.webp",
      },
      {
        imagen: "./img/branding/ResultsStaffing2-branding.webp",
      },
      {
        imagen: "./img/branding/WeEndeavor1-branding.webp",
      },
      {
        imagen: "./img/branding/WeEndeavor2-branding.webp",
      },
    ],
  },
  problem: {
    title: "Why Most Brands Fade",
    frustration: {
      title: "Your frustration",
      items: [
        "Generic branding that sounds like everyone else",
        "Random visuals with no consistency",
        "“Strategy” that’s just buzzwords",
        "Trend-chasing that ages fast",
      ],
    },
    solution: {
      items: [
        "Messaging that sounds like you",
        "Visual identity that’s instantly recognizable",
        "Strategy built around your actual business",
        "Timeless creative that holds up as you grow",
      ],
    },
  },
  solution: {
    title: "How We Build Brands That Actually Last",
    description: "Real brand work — not trendy templates.",
    items: [
      {
        title: "Brand Messaging",
        description:
          "Clear voice, sharp positioning, words that work.",
      },
      {
        title: "Visual Identity",
        description:
          "Logo, colors, typography — built for long-term use across every touchpoint.",
      },
      {
        title: "Brand Strategy",
        description:
          "Aligned to your goals, your audience, and your business model.",
      },
      {
        title: "Full Brand Systems",
        description:
          "Guidelines, templates, and assets so your entire team stays on-brand.",
      },
    ],
  },
  benefits: {
    title: "What You Get With Pixlerz Branding.",
    subtitle: "Custom. Cohesive. Built for real growth.",
    items: [
      {
        title: "🌟 Original Identity",
        description:
          "No recycled visuals — your brand, fully custom.",
      },
      {
        title: "🚀 Positioning That Cuts Through Noise",
        description:
          "We help you own your space and say what matters.",
      },
      {
        title: "🎯 Consistency Everywhere",
        description:
          "Your brand shows up sharp across web, social, print, video, and beyond.",
      },
      {
        title: "📱 Scalable Assets",
        description:
          "Brand guidelines and assets ready for whatever you build next.",
      },
      {
        title: "⚡ Timeless Creative",
        description:
          "Designed to last longer than whatever’s trending right now.",
      },
      {
        title: "🔒 Full Ownership",
        description:
          "You own it all. No fine print. No weird licenses.",
      },
    ],
  },
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

export default function Service() {
  return (
    <div className="service-container">
      <CurvesVideo className="curves-video" />
      <AnimatedSection animation="scale-in" zIndex={7}>
        <ServiceHead {...serviceContent.serviceHead} />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-up">
        <div className="projects-container branding-slider">
          <ObliqueProjects {...serviceContent.obliqueProjects} />
        </div>
      </AnimatedSection>
      <AnimatedSection animation="fade-in-left">
        <Problem {...serviceContent.problem} />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-right">
        <Solution {...serviceContent.solution} />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-up">
        <Benefits {...serviceContent.benefits} />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-left">
        <FAQs {...serviceContent.faqs} />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-right">
        <ActionCard {...serviceContent.actionCard} />
      </AnimatedSection>
    </div>
  );
}
