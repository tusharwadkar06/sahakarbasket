import React from "react";

const Breadcrumb = ({ paths }) => {
 
    const containerStyle = {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px"
  };

  const highlightStyle = {
    fontWeight: "bold",
    color: "#1a73e8"
  };

  return (
    <div style={containerStyle}>
      {paths.map((path, index) => (
        <span key={index}>
          {index > 0 && " > "}
          <span style={path.highlight ? highlightStyle : {}}>
            {path.name}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
