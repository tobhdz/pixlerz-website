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
    title: "Logos that you can be *proud* of",
    description:
      "Your logo isn't a decoration — it's the face of your brand. We make sure yours actually says something.",
    rating: "200+ Projects completed",
  },
  obliqueProjects: {
    projects: [
      {
        imagen: "./img/logos/QLQEstaComida3-logo.webp",
      },
      {
        imagen: "./img/logos/SupremeElectricSolutions-logo.webp",
      },
      {
        imagen: "./img/logos/ResultsStaffing-logo.webp",
      },
      {
        imagen: "./img/logos/TheSystemEffects-logo.webp",
      },
      {
        imagen: "./img/logos/LaFabrica1-logo.webp",
      },
      {
        imagen: "./img/logos/LaFabrica2-logo.webp",
      },
      {
        imagen: "./img/logos/LaFabrica3-logo.webp",
      },
    ],
  },
  problem: {
    title: "Why logos can suck",
    frustration: {
      title: "Your frustration",
      items: [
        "Generic designs that look like clipart",
        "Logos that don't work across platforms",
        "Designs that feel trendy for 6 months, then outdated",
        "Endless revisions because no one knows what you want",
      ],
    },
    solution: {
      items: [
        "Custom, fully original designs",
        "Built to work on web, print, merch — everywhere",
        "Timeless design that ages with your brand",
        "We listen → we design → you get exactly what you need",
      ],
    },
  },
  solution: {
    title: "How we build logos that last",
    description: "",
    items: [
      {
        title: "Original Concepts",
        description: "Built from scratch, designed for your identity.",
        image: "./img/solution/logo-concept.webp",
      },
      {
        title: "Built to Scale",
        description:
          "Works perfectly at every size, from business cards to billboards.",
        image: "./img/solution/logo-scale.webp",
      },
      {
        title: "Timeless Design",
        description: "Not trendy. Not dated. Built to age well.",
        image: "./img/solution/logo-timeless.webp",
      },
    ],
  },
  benefits: {
    title: "What you get with a Pixlerz logo",
    subtitle: "Clean. Custom. Timeless.",
    items: [
      {
        title: "🌟 Custom Design",
        description: "Every pixel built specifically for you.",
      },
      {
        title: "🚀 High Versatility",
        description: "Your logo works across every platform and format.",
      },
      {
        title: "🎯 Instant Recognition",
        description: "We design logos people remember after they scroll.",
      },
      {
        title: "📱 Perfect For Digital & Print",
        description:
          "Looks clean online, offline, and everywhere your brand lives.",
      },
      {
        title: "⚡ Delivered in Every Format You Need",
        description: "Full brand files, ready for whatever you need next.",
      },
      {
        title: "🔒 Ownership Is Yours",
        description: "No weird licenses — you fully own your logo.",
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
};

export default function Service() {
  return (
    <div className="service-container" id="logodesign">
      <CurvesVideo />
      <AnimatedSection animation="scale-in" zIndex={7}>
        <ServiceHead {...serviceContent.serviceHead} />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-up">
        <div className="projects-container logo-slider">
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
        <FAQs />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-right">
        <ActionCard />
      </AnimatedSection>
    </div>
  );
}
