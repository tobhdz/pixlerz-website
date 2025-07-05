import React from "react";
import { useLocation } from "react-router-dom";
import legalData from "../data/legal.json";
import "./LegalPage.css";

const LegalPageContent = () => {
  const location = useLocation();
  const pageKey = location.pathname.substring(1);
  const pageData = legalData[pageKey];

  if (!pageData) {
    return (
      <div className="legal-content">
        <h1>404 - Page Not Found</h1>
      </div>
    );
  }

  const renderContent = (item, index) => {
    switch (item.type) {
      case "heading":
        return <h2 key={index}>{item.text}</h2>;
      case "paragraph":
        return <p key={index}>{item.text}</p>;
      case "list":
        return (
          <ul key={index}>
            {item.items.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="legal-content">
      <h1>{pageData.title}</h1>
      {pageData.content.map(renderContent)}
      <p className="last-updated">Last updated: {pageData.lastUpdated}</p>
    </div>
  );
};

export default function LegalPage() {
  return (
    <div className="legal-page-container">
      <LegalPageContent />
    </div>
  );
}
