import React from "react";
import "./Service.css";
import ServiceHead from "../sections/ServiceHead.jsx";
import ObliqueProjects from "../sections/ObliqueProjects.jsx";
import Problem from "../sections/Problem.jsx";
import Solution from "../sections/Solution.jsx";
import Benefits from "../sections/Benefits.jsx";
import FAQs from "../sections/FAQs.jsx";
import ActionCard from "../sections/ActionCard.jsx";

const serviceContent = {
  serviceHead: {
    title: "Logos ipsum dolor sit amet",
    description:
      "Pellentesque nec nisi posuere, hendrerit massa non, pellentesque dolor suspendisse potenti. Donec consectetur tristique quam, eget blandit dui convallis non.",
    buttonText: "Button",
    buttonText2: "Button",
    rating: "+000",
  },
  obliqueProjects: {
    projects: [
      {
        imagen: "./img/logos/ResultsStaffing-logo.webp",
      },
      {
        imagen: "./img/logos/TheSystemEffects-logo.webp",
      },
      {
        imagen: "./img/logos/ResultsStaffing-logo.webp",
      },
      {
        imagen: "./img/logos/TheSystemEffects-logo.webp",
      },
    ],
  },
  problem: {
    title: "Problem title",
    frustration: {
      title: "Your frustration",
      items: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Sed do eiusmod tempor incididunt",
        "Ut labore et dolore magna aliqua",
      ],
    },
    solution: {
      items: [
        "Ut enim ad minim veniam",
        "Quis nostrud exercitation",
        "Ullamco laboris nisi ut aliquip",
        "Ex ea commodo consequat",
      ],
    },
  },
  solution: {
    title: "Solution title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    items: [
      {
        icon: "faEnvelopeOpenText",
        title: "Lorem Ipsum",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        icon: "faBolt",
        title: "Dolor Sit",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      },
      {
        icon: "faThumbsUp",
        title: "Amet Consectetur",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse",
      },
    ],
  },
  benefits: {
    title: "Benefits title",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    items: [
      {
        title: "🌟 Lorem Ipsum",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        title: "🚀 Dolor Sit",
        description:
          "Ut enim ad minim veniam quis nostrud exercitation ullamco",
      },
      {
        title: "🌈 Amet Consectetur",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit",
      },
      {
        title: "🎉 Adipisicing Elit",
        description:
          "Excepteur sint occaecat cupidatat non proident sunt in culpa",
      },
      {
        title: "🚫 Tempor Incididunt",
        description:
          "Qui officia deserunt mollit anim id est laborum consectetur",
      },
      {
        title: "🌱 Magna Aliqua",
        description:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut",
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
    rating: "+000",
  },
};

export default function Service() {
  return (
    <div className="service-container">
      <ServiceHead {...serviceContent.serviceHead} />
      <ObliqueProjects {...serviceContent.obliqueProjects} />
      <Problem {...serviceContent.problem} />
      <Solution {...serviceContent.solution} />
      <Benefits {...serviceContent.benefits} />
      <FAQs {...serviceContent.faqs} />
      <ActionCard {...serviceContent.actionCard} />
    </div>
  );
}
