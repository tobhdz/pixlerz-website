import React from "react";
import "./WhyUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function WhyUs() {
  return (
    <div className="whyus-container">
      <h3>Why Choose Us?</h3>
      <h4>Lorem ipsum dolor sit amet</h4>
      <div className="whyus-cards">
        <div className="whyus-card">
          <div className="icon icon-1">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <h5>Lorem ipsum</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            porttitor sagittis odio sed viverra. In at volutpat felis, in mollis
            tellus. Nulla fringilla, nunc non porttitor blandit, augue dolor
            efficitur risus, ac sagittis leo augue sed risus. Nam accumsan elit
            ac arcu volutpat, in ornare magna finibus. Nulla laoreet sem
            sagittis tortor.
          </p>
        </div>
        <div className="whyus-card">
          <div className="icon icon-2">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <h5>Lorem ipsum</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            porttitor sagittis odio sed viverra. In at volutpat felis, in mollis
            tellus. Nulla fringilla, nunc non porttitor blandit, augue dolor
            efficitur risus, ac sagittis leo augue sed risus. Nam accumsan elit
            ac arcu volutpat, in ornare magna finibus. Nulla laoreet sem
            sagittis tortor.
          </p>
        </div>
        <div className="whyus-card">
          <div className="icon icon-3">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <h5>Lorem ipsum</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            porttitor sagittis odio sed viverra. In at volutpat felis, in mollis
            tellus. Nulla fringilla, nunc non porttitor blandit, augue dolor
            efficitur risus, ac sagittis leo augue sed risus. Nam accumsan elit
            ac arcu volutpat, in ornare magna finibus. Nulla laoreet sem
            sagittis tortor.
          </p>
        </div>
      </div>
      <div className="whyus-box">
        <div className="whyus-img"></div>
        <div className="whyus-box-content">
          <h4>Innovating digital experiences with Pixlerz</h4>
          <p className="whyus-box-desc">
            Say goodbye to inexperienced teams. Pixlerz offers a refined and
            efficient approach to meet your needs.
          </p>
          <div className="whyus-box-sub">
            <div className="whyus-box-sub-item">
              <h5>Lorem ipsum dolor sit</h5>
              <p>
                Nulla fringilla, nunc non porttitor blandit, augue dolor
                efficitur risus.
              </p>
            </div>
            <div className="whyus-box-sub-item">
              <h5>Lorem ipsum dolor sit</h5>
              <p>
                Nulla fringilla, nunc non porttitor blandit, augue dolor
                efficitur risus.
              </p>
            </div>
            <div className="whyus-box-sub-item">
              <h5>Lorem ipsum dolor sit</h5>
              <p>
                Nulla fringilla, nunc non porttitor blandit, augue dolor
                efficitur risus.
              </p>
            </div>
            <div className="whyus-box-sub-item">
              <h5>Lorem ipsum dolor sit</h5>
              <p>
                Nulla fringilla, nunc non porttitor blandit, augue dolor
                efficitur risus.
              </p>
            </div>
            <div className="whyus-box-sub-item">
              <h5>Lorem ipsum dolor sit</h5>
              <p>
                Nulla fringilla, nunc non porttitor blandit, augue dolor
                efficitur risus.
              </p>
            </div>
            <div className="whyus-box-sub-item">
              <h5>Lorem ipsum dolor sit</h5>
              <p>
                Nulla fringilla, nunc non porttitor blandit, augue dolor
                efficitur risus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
