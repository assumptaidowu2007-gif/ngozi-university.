import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

/**
 * Navbar Component
 * Features:
 * - Brand logo and university heraldry
 * - React Router NavLink for seamless client-side navigation
 * - Responsive mobile toggle using React useState hook
 * - Active route indicators and accessible markup
 */
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile navigation drawer
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  // Close menu when a navigation link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      {/* Top University Announcement Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-info">
            <span className="top-bar-item">
              <svg className="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Admissions Hotline: +234 (0) 800-NGOZI-UNI
            </span>
            <span className="top-bar-item hide-mobile">
              <svg className="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              info@ngoziuniversity.edu.ng
            </span>
          </div>
          <div className="top-bar-actions">
            <span className="accreditation-pill">NUC Accredited Institution</span>
            <Link to="/contact" className="top-bar-link">Campus Tour</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="main-navbar" aria-label="Main Navigation">
        <div className="container nav-container">
          {/* University Brand Logo & Crest */}
          <Link to="/" className="brand" onClick={closeMobileMenu}>
            <img 
              src="/university-logo.svg" 
              alt="Ngozi University Official Crest" 
              className="brand-logo"
            />
            <div className="brand-text">
              <span className="brand-name">NGOZI UNIVERSITY</span>
              <span className="brand-motto">Scientia • Virtus • Veritas</span>
            </div>
          </Link>

          {/* Desktop & Tablet Navigation Links */}
          <div className={`nav-menu-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/programmes" 
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMobileMenu}
                >
                  Programmes
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="nav-cta-wrapper">
              <Link 
                to="/programmes" 
                className="btn btn-gold btn-sm nav-cta-btn"
                onClick={closeMobileMenu}
              >
                Apply for 2026/2027
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            type="button" 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="icon-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg className="icon-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
