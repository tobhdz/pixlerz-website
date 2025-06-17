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
    title: "Websites built *right*",
    description:
      "Your website isn't just a page , it's your brand's first handshake. We build digital homes that feel like you — the kind where people take off their coat and stay awhile.",
    rating: "+32 Projects completed",
  },
  obliqueProjects: {
    projects: [
      {
        imagen: "./img/websites/DynamicFunding-web.webp",
      },
      {
        imagen: "./img/websites/SupremeElectricSolutions-web.webp",
      },
      {
        imagen: "./img/websites/TheSystemsEffect-web.webp",
      },
      {
        imagen: "./img/websites/WeEndeavor-web.webp",
      },
      {
        imagen: "./img/websites/AetherCapital-web.webp",
      },
      {
        imagen: "./img/websites/QLQEstaComida-web.webp",
      },
    ],
  },
  problem: {
    title: "Websites That Don't Embarrass You",
    frustration: {
      title: "Your frustration",
      items: [
        "Slow load times that make people bounce",
        "Cheap templates that all look the same",
        "Clunky mobile experience that breaks everything",
        "Sites that “look nice” but don’t actually work",
      ],
    },
    solution: {
      items: [
        "Fast, clean, fully custom builds",
        "Original designs that actually feel like your brand",
        "Flawless mobile performance across all devices",
        "Built to convert — not just sit there",
      ],
    },
  },
  solution: {
    title: "Websites that work",
    description:
      "No shortcuts. No templates. Just clean, custom sites built for performance, not frustration.",
    items: [
      {
        title: "Custom Design",
        description:
          "We build every site from scratch — no recycled templates, no copy-paste vibes.",
      },
      {
        title: "Speed Obsessed",
        description:
          "Fast load times, smooth UX, zero patience lost. Because slow sites kill attention.",
      },
      {
        title: "Built To Convert",
        description:
          "Your site isn’t here to look pretty — it’s here to turn visitors into customers",
      },
    ],
  },
  benefits: {
    title: "What You Get With A Pixlerz Website",
    subtitle: "Custom. Clean. Built to actually work.",
    items: [
      {
        title: "🌟 Custom Everything",
        description:
          "Built fully from scratch — no templates, no shortcuts.",
      },
      {
        title: "🚀 Speed That Slaps",
        description:
          "Fast load times that keep people on your site.",
      },
      {
        title: "🎯 Conversion Focused",
        description:
          "Designed to guide visitors exactly where you want them.",
      },
      {
        title: "📱 Mobile Perfect",
        description:
          "Smooth, responsive design across every screen size.",
      },
      {
        title: "⚡ Fully Optimized Build",
        description:
          "Clean code, smart structure, zero bloat.",
      },
      {
        title: "🔒 Locked & Secure",
        description:
          "Built stable. Built safe. Built to last.",
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
      <AnimatedSection animation="scale-in" zIndex={7}>
        <ServiceHead {...serviceContent.serviceHead} />
      </AnimatedSection>
      <CurvesVideo />
      <AnimatedSection animation="fade-in-up">
        <div className="projects-container web-slider">
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
