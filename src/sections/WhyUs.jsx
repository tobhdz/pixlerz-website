import React from "react";
import "./WhyUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function WhyUs() {
  return (
    <div className="whyus-container">
      <h3>Why Choose Us?</h3>
      <h4>Work with Professional Developers</h4>
      <p className="whyus-desc">
        Collaborate with experienced and skilled developers who ensure
        precision, innovation, and high-quality outcomes for your website.
      </p>
      <div className="whyus-cards">
        <div className="whyus-card">
          <div className="icon icon-1">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <h5>Pixlerz Expertise</h5>
          <p>
            Backed by a proven track record, Pixlerz delivers cutting-edge
            design and development solutions tailored to elevate your brand. Our
            team combines creativity and technical expertise to create websites
            that stand out and convert.
          </p>
        </div>
        <div className="whyus-card">
          <div className="icon icon-2">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <h5>Engaging, Powerful Websites</h5>
          <p>
            We design websites that captivate your audience, keep them engaged,
            and drive meaningful interactions with your brand.
          </p>
        </div>
        <div className="whyus-card">
          <div className="icon icon-3">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <h5>Custom-Tailored Solutions:</h5>
          <p>
            Every project is unique. We craft websites specifically tailored to
            your business needs and goals, ensuring a perfect fit for your
            vision.
          </p>
        </div>
      </div>
      <div className="whyus-box">
        <div className="whyus-box-content">
          <h4>Innovating digital experiences with Pixlerz</h4>
          <p className="whyus-box-desc">
            Say goodbye to inexperienced teams. Pixlerz offers a refined and
            efficient approach to meet your needs.
          </p>
          <div className="whyus-box-sub">
            <div className="whyus-box-sub-item">
              <h5>📈 Comprehensive Strategy Development</h5>
              <p>
                We develop a holistic approach to align your online presence
                with your business goals.
              </p>
            </div>
            <div className="whyus-box-sub-item">
              <h5>🔗 Scalable Solutions</h5>
              <p>
                Our websites are designed to evolve with your business, ensuring
                seamless growth and adaptability.
              </p>
            </div>
            <div className="whyus-box-sub-item">
              <h5>👨‍💻 Expert Team</h5>
              <p>
                Work with carefully selected professionals who bring specialized
                expertise to every project.
              </p>
            </div>
            <div className="whyus-box-sub-item">
              <h5>🎨 Creative Excellence</h5>
              <p>
                Bold and innovative ideas tailored to elevate your brand’s
                digital presence.
              </p>
            </div>
            <div className="whyus-box-sub-item">
              <h5>🔍 Strategic Customization</h5>
              <p>
                Fully customized campaigns and strategies that align with your
                business objectives.
              </p>
            </div>
            <div className="whyus-box-sub-item">
              <h5>🤝 Reliable Partnership</h5>
              <p>
                A dependable team that values transparency, collaboration, and
                long-term relationships.
              </p>
            </div>
          </div>
        </div>
        <div className="whyus-img"></div>
      </div>
    </div>
  );
}
