import React from "react";
import "./WhyUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faEye,
  faMagicWandSparkles,
} from "@fortawesome/free-solid-svg-icons";

export default function WhyUs() {
  return (
    <div className="whyus-container">
      <h3>Why Choose Us?</h3>
      <h4>Work with Professional Creatives</h4>
      <div className="whyus-cards">
        <div className="whyus-card">
          <div className="icon icon-1">
            <FontAwesomeIcon icon={faEye} />
          </div>
          <h5>Design That Demands Attention</h5>
          <p>
            You've got about 1.7 seconds to make someone care. We make sure your
            brand takes every one of those seconds and smacks people right in
            the face (creatively speaking).
          </p>
        </div>
        <div className="whyus-card">
          <div className="icon icon-2">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <h5>Built for Legacy, Not Just Launches</h5>
          <p>
            One-hit-wonders are cute. We're here for the long game; building
            brands that keep working, growing, and turning heads years from now.
          </p>
        </div>
        <div className="whyus-card">
          <div className="icon icon-3">
            <FontAwesomeIcon icon={faMagicWandSparkles} />
          </div>
          <h5>Full-Service Creative, Zero Generic BS</h5>
          <p>
            Web. Brand. Content. Strategy. We bring the full package — because
            your brand deserves better than recycled templates and safe ideas.
          </p>
        </div>
      </div>
      <div className="whyus-box whyus-box-flex animate-fade-in-up visible">
        <div className="whyus-box-text">
          <h4>
            Innovating digital <br /> experiences with Pixlerz
          </h4>
          <p className="whyus-box-desc">
            Say goodbye to inexperienced teams. Pixlerz offers a refined and
            efficient approach to meet your needs.
          </p>
          <div className="whyus-box-sub">
            <div className="whyus-box-sub-item">
              <h5>🔧 Strategy That Doesn't Suck</h5>
              <p>
                Random doesn't scale. We build clear, aggressive strategies that
                make sure your brand moves forward with purpose — not by
                accident.
              </p>
            </div>
            <div className="whyus-box-sub-item">
              <h5>🚀 Built to Scale, Not Stall</h5>
              <p>
                Your business grows? Your brand keeps up. Everything we build is
                designed to flex, evolve, and keep performing while you level
                up.
              </p>
            </div>
            <div className="whyus-box-sub-item">
              <h5>🧠 No B-Team Here</h5>
              <p>
                You get real pros. No interns running your brand. No half-baked
                "creative ideas." Just people who know how to make your business
                look like it belongs on the big stage.
              </p>
            </div>
            <div className="whyus-box-sub-item">
              <h5>🎨 Creative That Punches Through</h5>
              <p>
                We don't do "safe." We deliver bold, original creative that
                makes your brand impossible to ignore.
              </p>
            </div>
            <div className="whyus-box-sub-item">
              <h5>🎯 Custom Everything</h5>
              <p>
                Your brand isn't generic. Neither is our work. Every campaign,
                website, and strategy is built around your goals, your audience,
                your future.
              </p>
            </div>
            <div className="whyus-box-sub-item">
              <h5>🤝 Partners, Not Vendors</h5>
              <p>
                We're in it with you. Transparent, collaborative, and locked-in
                on the long game. No fluff, no ghosting, no disappearing after
                launch.
              </p>
            </div>
          </div>
        </div>
        <img
          src="/img/innovation.webp"
          alt="Innovation"
          className="whyus-box-img"
        />
      </div>
    </div>
  );
}
