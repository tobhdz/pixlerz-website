import React from "react";
import "./Problem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Problem() {
  return (
    <div className="problem-container">
      <h1 className="problem-title">Problem title</h1>
      <div className="problem-boxes">
        <div className="problem-box left">
          <h2>Your frustration</h2>
          <div className="list-container">
            <ul>
              <li>
                <FontAwesomeIcon icon={faXmark} className="icon-wrong" />
                Lorem ipsum dolor sit amet
              </li>
              <li>
                <FontAwesomeIcon icon={faXmark} className="icon-wrong" />
                Consectetur adipiscing elit
              </li>
              <li>
                <FontAwesomeIcon icon={faXmark} className="icon-wrong" />
                Sed do eiusmod tempor incididunt
              </li>
              <li>
                <FontAwesomeIcon icon={faXmark} className="icon-wrong" />
                Ut labore et dolore magna aliqua
              </li>
            </ul>
          </div>
        </div>

        <div className="problem-box right">
          <img src="./img/pixlerztext.png" alt="Pixlerz" className="solution-img" />
          <div className="list-container">
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon-correct" />
                Ut enim ad minim veniam
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon-correct" />
                Quis nostrud exercitation
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon-correct" />
                Ullamco laboris nisi ut aliquip
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon-correct" />
                Ex ea commodo consequat
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
