import React from "react";
import PropTypes from "prop-types";
import "./ProjectCard.css";

export default function ProjectCard({ imagen }) {
  return (
    <div className="project-card">
      <div
        className="project-card-image"
        style={{
          backgroundImage: `url(${imagen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}

ProjectCard.propTypes = {
  imagen: PropTypes.string.isRequired,
};
