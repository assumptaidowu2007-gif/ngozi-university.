import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programmes from './pages/Programmes';
import Contact from './pages/Contact';
import './App.css';

/**
 * ScrollToTop helper component
 * Ensures that when the user navigates between routes,
 * the window scrolls smoothly back to the top of the new page.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * 404 Not Found Fallback Component
 */
function NotFound() {
  return (
    <div className="not-found-page section text-center">
      <div className="container">
        <div className="not-found-box">
          <span className="not-found-code">404</span>
          <h1 className="not-found-title">Page Not Found</h1>
          <p className="not-found-desc">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>
          <div className="mt-4">
            <Link to="/" className="btn btn-primary">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Main App Component
 * Integrates:
 * - Persistent Navbar across all routes
 * - Persistent Footer across all routes
 * - React Router Routes configuration
 * - Client-side page transitions without full-page reloading
 */
function App() {
  return (
    <div className="app-layout">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Global University Navigation Header */}
      <Navbar />

      {/* Main Dynamic View Content */}
      <main className="main-content" id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Global University Footer */}
      <Footer />
    </div>
  );
}

export default App;
