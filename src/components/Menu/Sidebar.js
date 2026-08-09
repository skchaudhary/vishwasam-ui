import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsMobileMenuOpen((prev) => !prev);
    } else {
      setIsCollapsed((prev) => !prev);
    }
  };

  return (
    <div
      className={`Sidebar ${isCollapsed ? "collapsed" : ""} ${isMobile && isMobileMenuOpen ? "mobile-open" : ""}`}
    >
      <div className="Sidebar-header">
        <div className="Sidebar-brand">
          <img
            src="/images/logo.png"
            alt="Bharwaliya Logo"
            className="logo-image"
          />
        </div>
        <button className="Sidebar-toggle" onClick={toggleSidebar}>
          {isMobile ? (isMobileMenuOpen ? "✕" : "☰") : isCollapsed ? "»" : "«"}
        </button>
      </div>
      <nav className="Sidebar-nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "Sidebar-link active" : "Sidebar-link"
          }
          end
        >
          <span className="icon">🏠</span>
          <span className="text">Home</span>
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "Sidebar-link active" : "Sidebar-link"
          }
        >
          <span className="icon">📦</span>
          <span className="text">Products</span>
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "Sidebar-link active" : "Sidebar-link"
          }
        >
          <span className="icon">🛠️</span>
          <span className="text">Services</span>
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive ? "Sidebar-link active" : "Sidebar-link"
          }
        >
          <span className="icon">📰</span>
          <span className="text">News</span>
        </NavLink>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive ? "Sidebar-link active" : "Sidebar-link"
          }
        >
          <span className="icon">ℹ️</span>
          <span className="text">About Us</span>
        </NavLink>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive ? "Sidebar-link active" : "Sidebar-link"
          }
        >
          <span className="icon">✉️</span>
          <span className="text">Contact</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
