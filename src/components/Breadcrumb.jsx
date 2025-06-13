import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = ({ paths }) => {
  const location = useLocation();

  const containerStyle = {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  const currentPageStyle = {
    textDecoration: "underline",
    color: "black",
    fontWeight: "bold",
  };

  const hoverStyle = {
    textDecoration: "underline",
  };

  return (
    <div style={containerStyle}>
      {paths.map((path, index) => {
        const isCurrent = path.link === location.pathname;

        return (
          <span key={index}>
            {index > 0 && " > "}
            {path.link ? (
              <Link
                to={path.link}
                style={isCurrent ? currentPageStyle : linkStyle}
                onMouseOver={(e) => {
                  if (!isCurrent) e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  if (!isCurrent) e.target.style.textDecoration = "none";
                }}
              >
                {path.name}
              </Link>
            ) : (
              <span style={currentPageStyle}>{path.name}</span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
