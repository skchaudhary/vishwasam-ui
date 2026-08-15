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

  const navLink = (to, icon, label, end = false) => (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        isActive ? "Sidebar-link active" : "Sidebar-link"
      }
    >
      <span className="icon">{icon}</span>
      <span className="text">{label}</span>
    </NavLink>
  );

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
        {navLink("/", "🏠", "Home", true)}
        {navLink("/products", "📦", "Products")}
        {navLink("/services", "🛠️", "Services")}
        {navLink("/news", "📰", "News")}
        {navLink("/about-us", "ℹ️", "About Us")}
        {navLink("/contact-us", "✉️", "Contact")}

        <div className="Sidebar-divider" />

        {navLink("/privacy-policy", "🔒", "Privacy Policy")}
        {navLink("/terms", "📄", "Terms of Service")}
      </nav>
    </div>
  );
}

export default Sidebar;
