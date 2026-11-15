import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer Component
 * Displayed consistently across all pages of the university portal.
 * Features institutional branding, fast navigation links, faculty lists,
 * sample contact info, and academic project disclaimers.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Column 1: Brand & Identity */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <img 
                src="/university-logo.svg" 
                alt="Ngozi University Seal" 
                className="footer-logo"
              />
              <div>
                <h3 className="footer-title">NGOZI UNIVERSITY</h3>
                <p className="footer-motto">Knowledge • Virtue • Truth</p>
              </div>
            </div>
            <p className="footer-bio">
              A premier institution dedicated to academic excellence, innovative technological 
              research, and nurturing leaders of high character and ethical purpose.
            </p>
            <div className="footer-accreditation-badge">
              <span>National Universities Commission (NUC) Approved</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About the University</Link></li>
              <li><Link to="/programmes">Academic Programmes</Link></li>
              <li><Link to="/contact">Contact & Inquiries</Link></li>
              <li><Link to="/about#vision">Mission & Vision</Link></li>
              <li><Link to="/contact#admissions">Admissions Portal</Link></li>
            </ul>
          </div>

          {/* Column 3: Academic Faculties */}
          <div className="footer-col">
            <h4 className="footer-heading">Academic Faculties</h4>
            <ul className="footer-nav-list">
              <li><Link to="/programmes">Computing & Artificial Intelligence</Link></li>
              <li><Link to="/programmes">Engineering & Technology</Link></li>
              <li><Link to="/programmes">Business & Management Studies</Link></li>
              <li><Link to="/programmes">Health Sciences & Nursing</Link></li>
              <li><Link to="/programmes">Law & Legal Jurisprudence</Link></li>
              <li><Link to="/programmes">Arts & Social Sciences</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Information & Hours */}
          <div className="footer-col">
            <h4 className="footer-heading">Campus Contact</h4>
            <div className="footer-contact-details">
              <p className="contact-item">
                <svg className="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>KM 14 University Boulevard, Hilltop Campus, Ngozi City</span>
              </p>
              <p className="contact-item">
                <svg className="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>+234 (0) 803 123 4567 / +234 (0) 800-NGOZI</span>
              </p>
              <p className="contact-item">
                <svg className="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>admissions@ngoziuniversity.edu.ng</span>
              </p>
              <p className="contact-item text-muted">
                <small>Office Hours: Mon - Fri, 8:00 AM - 5:00 PM</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Disclaimer & Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright-text">
            &copy; {currentYear} Ngozi University. All Rights Reserved. Built with React JS.
          </p>
          <p className="academic-disclaimer">
            Academic Demonstration Project | New Horizon React JS Web Development Assignment
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
