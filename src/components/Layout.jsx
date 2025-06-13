import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "../App.css"; 

const layoutStyle = {
  display: "flex",
  height: "100%", 
};

const mainContentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f2f2f2", 
 // height: "100%",
minheight:'100vh',
overflowX:'hidden',

};

const contentWrapperStyle = {
  flex: 1,
  overflowY: "auto", 
  padding: "12px 12px",
   //overflowx: "auto",
   overflowX:'hidden',
};

export default function Layout({ children }) {
  return (
    <div style={layoutStyle}>
      <Sidebar />
      <div style={mainContentStyle}>
        <Topbar />
        <div className="dashboard-content-wrapper" style={contentWrapperStyle}>
          {children}
        </div>
      </div>
    </div>
  );
}


