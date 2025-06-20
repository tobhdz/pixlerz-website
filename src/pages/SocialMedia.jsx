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
    title: "Content that gets *noticed*",
    description:
      "We don't just post — we build presence. Social media isn't about checking boxes. It's about building attention, loyalty, and momentum. That's what we do.",
    rating: "200+ Projects completed",
  },
  obliqueProjects: {
    projects: [
      {
        imagen: "./img/socials/ResultsStaffing-socials.webp",
      },
      {
        imagen: "./img/socials/TheSystemsEffect-socials.webp",
      },
      {
        imagen: "./img/socials/ResultsStaffing-socials.webp",
      },
      {
        imagen: "./img/socials/TheSystemsEffect-socials.webp",
      },
    ],
  },
  problem: {
    title: "While most social media flops, ours doesn't",
    frustration: {
      title: "Your frustration",
      items: [
        "Posting random content that nobody sees",
        "Inconsistent brand voice and visuals",
        "Zero strategy, zero growth",
        "Stuck chasing trends that don't fit your brand",
      ],
    },
    solution: {
      items: [
        "Content built to match your brand voice & style",
        "Consistent, professional visual identity across platforms",
        "Clear strategy tied to actual business goals",
        "Social that grows your audience — not just fills your feed",
      ],
    },
  },
  solution: {
    title: "How we make your brand show up online",
    description: "Not just content. Not just posts. Actual brand presence.",
    items: [
      {
        title: "Brand-Aligned Content",
        description: "Every post looks, sounds, and feels like your brand.",
        image: "/img/solutions/socialmedia1.png",
      },
      {
        title: "Growth-Driven Strategy",
        description: "Built to attract, engage, and build audience momentum.",
        image: "/img/solutions/socialmedia2.png",
      },
      {
        title: "Platform-Perfect Execution",
        description:
          "Content optimized for where your audience actually lives.",
        image: "/img/solutions/socialmedia3.png",
      },
      {
        title: "Scroll-Stopping Design",
        description:
          "Creative that makes people stop mid-scroll and pay attention.",
        image: "/img/solutions/socialmedia4.png",
      },
    ],
  },
  benefits: {
    title: "What you get with Pixlerz social media",
    subtitle: "Built to get seen. Built to build your brand.",
    items: [
      {
        title: "🌟 Custom Content",
        description:
          "Original graphics, video, reels, carousels — fully designed for your brand.",
      },
      {
        title: "🚀 Consistency",
        description:
          "Your brand shows up sharp, polished, and on point every time.",
      },
      {
        title: "🎯 Audience Growth",
        description: "Content built to grow followers who actually care.",
      },
      {
        title: "📱 Platform Optimization",
        description:
          "Tailored for Instagram, TikTok, LinkedIn, YouTube & more.",
      },
      {
        title: "⚡ Engagement Boosters",
        description:
          "Designed to drive likes, shares, comments, and conversations.",
      },
      {
        title: "🔒 Done-For-You Execution",
        description:
          "You focus on your business — we handle the content machine.",
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
    <div className="service-container" id="socialmedia">
      <CurvesVideo />
      <AnimatedSection animation="scale-in" zIndex={7}>
        <ServiceHead {...serviceContent.serviceHead} />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-up">
        <div className="projects-container social-slider">
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
