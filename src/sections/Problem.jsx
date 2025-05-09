import React from "react";
import "./Problem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Problem({ title, frustration, solution }) {
  return (
    <div className="problem-container">
      <h1 className="problem-title">{title}</h1>
      <div className="problem-boxes">
        <div className="problem-box left">
          <h2>{frustration.title}</h2>
          <div className="list-container">
            <ul>
              {frustration.items.map((item, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon={faXmark} className="icon-wrong" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="problem-box right">
          <img
            src="./img/pixlerztext.png"
            alt="Pixlerz"
            className="solution-img"
          />
          <div className="list-container">
            <ul>
              {solution.items.map((item, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon={faCheck} className="icon-correct" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
