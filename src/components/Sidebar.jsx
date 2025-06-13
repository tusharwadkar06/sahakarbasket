import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTachometerAlt,
  FaBox,
  FaChartLine,
  FaCalendarAlt,
  FaHistory,
  FaEnvelope,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaAngleDoubleLeft,
  FaUser,
  FaAngleDoubleRight
} from "react-icons/fa";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarStyle = {
    width: collapsed ? (isMobile ? "0" : "55px") : isMobile ? "200px" : "240px",
    backgroundColor: "#ffffff",
    padding: collapsed ? "0" : "2% 1%",
    height: "100vh",
    borderRight: isMobile ? "none" : "1px solid #ccc",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: isMobile ? "fixed" : "relative",
    top: 0,
    left: 0,
    zIndex: 999,
    transition: "width 0.3s ease, transform 0.3s ease",
    transform: collapsed && isMobile ? "translateX(-100%)" : "translateX(0)",
    boxShadow: isMobile && !collapsed ? "2px 0 5px rgba(0,0,0,0.1)" : "none",
  };

  const menuItemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "0.1rem",
    position: "relative",
    borderRadius: "0.5rem",
    padding: "0.5rem",
    justifyContent: collapsed ? "center" : "flex-start"
  };

  const iconStyle = {
    marginRight: collapsed ? "0" : "0.6rem",
    fontSize: "1.1rem"
  };

  const badgeStyle = {
    position: "absolute",
    right: collapsed ? "0.5rem" : 0,
    background: "red",
    borderRadius: "50%",
    color: "#fff",
    fontSize: "0.625rem",
    padding: "0.2rem 0.4rem"
  };

  const activeStyle = {
    background: "#e6f0ff",
    color: "#2979ff"
  };

  return (
    <>
     
      {isMobile && !collapsed && (
        <div
          onClick={() => setCollapsed(true)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.3)",
            zIndex: 998
          }}
        />
      )}

      <div style={sidebarStyle}>
        <div>
          
          <button
            onClick={() => setCollapsed((prev) => !prev)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              marginBottom: "0.1rem",
              fontSize: "1.1rem",
              color: "#2979ff"
            }}
          >
            {collapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
          </button>

          {!collapsed && (
            <h2 style={{ fontSize: "1.25rem", marginBottom: "0.1rem" }}>
              Sahakar Basket
            </h2>
          )}

          {[
            { icon: <FaHome />, label: "Home", to: "/" },
            { icon: <FaTachometerAlt />, label: "Dashboard", to: "/dashboard" },
            { icon: <FaBox />, label: "Products", to: "/products" },
            { icon: <FaUser />, label: "Clusters", to: "/clusters" },
            { icon: <FaChartLine />, label: "Analytics" },
            { icon: <FaCalendarAlt />, label: "Schedules", badge: 2 },
            { icon: <FaHistory />, label: "History" }
          ].map((item, index) =>
            item.to ? (
              <NavLink
                key={index}
                to={item.to}
                style={({ isActive }) =>
                  isActive
                    ? {
                        ...menuItemStyle,
                        ...activeStyle,
                        textDecoration: "none"
                      }
                    : {
                        ...menuItemStyle,
                        textDecoration: "none",
                        color: "inherit"
                      }
                }
              >
                <div style={iconStyle}>{item.icon}</div>
                {!collapsed && <span>{item.label}</span>}
                {item.badge && <span style={badgeStyle}>{item.badge}</span>}
              </NavLink>
            ) : (
              <div key={index} style={menuItemStyle}>
                <div style={iconStyle}>{item.icon}</div>
                {!collapsed && <span>{item.label}</span>}
                {item.badge && <span style={badgeStyle}>{item.badge}</span>}
              </div>
            )
          )}

          <hr style={{ margin: "1% 0" }} />

          {[
            { icon: <FaEnvelope />, label: "Messages", badge: 2 },
            { icon: <FaBell />, label: "Notifications", badge: 2 },
            { icon: <FaCog />, label: "Settings" },
            { icon: <FaSignOutAlt />, label: "Logout" }
          ].map((item, index) => (
            <div key={index} style={menuItemStyle}>
              <div style={iconStyle}>{item.icon}</div>
              {!collapsed && <span>{item.label}</span>}
              {item.badge && <span style={badgeStyle}>{item.badge}</span>}
            </div>
          ))}
        </div>

        {/* profile */}
        <NavLink
          to="/profile"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
            marginBottom: "85px",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            transition: "background 0.2s"
          }}
        >
          <img
            src="https://i.pravatar.cc/30"
            alt="User"
            style={{
              borderRadius: "50%",
              marginRight: collapsed ? 0 : "0.6rem"
            }}
          />
          {!collapsed && (
            <div>
              <div style={{ fontSize: "0.75rem", fontWeight: 600 }}>
                Michael Smith
              </div>
              <div style={{ fontSize: "0.6875rem", color: "#888" }}>
                michaelsmith12@gmail.com
              </div>
            </div>
          )}
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;