import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./ProjectCard.css";

export default function ProjectCard({ id, imagen }) {
  return (
    <Link to={`/project/${id}`} className="project-card">
      <div
        className="project-card-image"
        style={{ backgroundImage: `url(${imagen})` }}
      ></div>
    </Link>
  );
}

ProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  imagen: PropTypes.string.isRequired,
};
