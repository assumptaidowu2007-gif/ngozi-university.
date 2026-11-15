import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgrammeCard from '../components/ProgrammeCard';

/**
 * Home Page Component
 * Demonstrates:
 * - Clear university branding & welcome message
 * - Brief institutional overview
 * - High-resolution campus and academic images
 * - Navigation links to other pages
 * - Interactive elements:
 *   1. Interactive "Pillars of Excellence" tabbed switcher updating content via useState
 *   2. Interactive "Live Campus Statistics & Impact Counter"
 *   3. Interactive "Campus Virtual Tour Spotlight"
 * - Prominent CTA buttons leading to /programmes and /contact
 */
const Home = () => {
  // State for Interactive Feature 1: Academic Pillars Tab Switcher
  const [activePillar, setActivePillar] = useState('research');

  // State for Interactive Feature 2: Campus Spotlight Tour Spot
  const [activeSpot, setActiveSpot] = useState(0);

  // State for Interactive Feature 3: Quick Facts Counter increment / view
  const [activeStatCategory, setActiveStatCategory] = useState('overall');

  // Selected programme modal state (shared with featured preview)
  const [selectedProgramme, setSelectedProgramme] = useState(null);

  // Data for Academic Pillars
  const pillars = {
    research: {
      title: 'Pioneering Research & Innovation',
      subtitle: 'Solving Real-World Challenges with High-Impact Discoveries',
      description: 'At Ngozi University, our research institutes focus on artificial intelligence, renewable energy, tropical health epidemiology, and sustainable agriculture. Our undergraduate and postgraduate scholars collaborate directly with world-class faculty on peer-reviewed international breakthroughs.',
      stats: '180+ Published Papers in 2025/2026',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="pillar-icon">
          <path d="M10 2v7.31M14 9.3V2M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0"/>
          <path d="M5.52 16h12.96"/>
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80'
    },
    technology: {
      title: 'Next-Generation Digital Infrastructure',
      subtitle: 'Smart Classrooms, Robotics Labs & Cloud Learning Systems',
      description: 'We believe education must reflect modern industry. Our 250-acre digital campus boasts gigabit fiber connectivity, specialized robotics and IoT fabrication labs, state-of-the-art fintech simulations, and high-performance computing centers for data science.',
      stats: '100% Smart-Enabled Lecture Auditoriums',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="pillar-icon">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80'
    },
    leadership: {
      title: 'Ethical Leadership & Character Formation',
      subtitle: 'Cultivating Visionary Minds for Global Transformation',
      description: 'Academics without character is incomplete. Ngozi University embeds ethical leadership, public speaking, entrepreneurship incubation, and community volunteerism into every degree programme, producing graduates trusted by global employers.',
      stats: '94.2% Graduate Employment & Startup Rate',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="pillar-icon">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
    },
    community: {
      title: 'Inclusive Global Community',
      subtitle: 'A Vibrant Diverse Campus of Scholars from 18 Nations',
      description: 'Experience a supportive, enriching university community. From 40+ student societies, sports leagues, cultural galas, to peer-mentorship programmes, your journey at Ngozi University will build lifelong friendships and global professional networks.',
      stats: '40+ Student Clubs & Sporting Societies',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="pillar-icon">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80'
    }
  };

  // Campus Virtual Tour Spotlight spots
  const campusSpots = [
    {
      name: 'The Central Digital Library & Learning Commons',
      tag: 'Knowledge Hub',
      desc: 'A five-storey architectural marvel housing over 250,000 physical volumes, 3 million electronic journals, private research carrels, and 24/7 quiet study spaces.',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Advanced Science & Engineering Complex',
      tag: 'Innovation Hub',
      desc: 'Equipped with robotics prototyping workshops, embedded systems suites, civil materials testing bays, and renewable energy simulation labs.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Health Sciences Simulation Hospital & Clinic',
      tag: 'Clinical Training',
      desc: 'Our state-of-the-art clinical skills center features high-fidelity simulation manikins, intensive care mock wards, and community health training centers.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Moot Court & Legal Research Amphitheater',
      tag: 'Faculty of Law',
      desc: 'Replicating international appellate courts, giving law students hands-on advocacy training for regional and international moot court competitions.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Featured flagship programmes
  const featuredProgrammes = [
    {
      id: 'cs-ai',
      title: 'B.Sc. Computer Science & Artificial Intelligence',
      degree: 'B.Sc.',
      faculty: 'Faculty of Computing',
      duration: '4 Years Full-Time',
      description: 'Master algorithms, neural networks, machine learning, cloud architectures, and full-stack software development with hands-on industrial projects.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      highlights: ['Machine Learning & Deep Neural Nets', 'Full-Stack Software Architecture', 'Cloud & Cyber Defense Systems'],
      careers: ['AI Research Engineer', 'Full-Stack Developer', 'Data Scientist'],
      tag: 'Top Rated'
    },
    {
      id: 'eng-elec',
      title: 'B.Eng. Electrical & Electronics Engineering',
      degree: 'B.Eng.',
      faculty: 'Faculty of Engineering',
      duration: '5 Years Full-Time',
      description: 'Design tomorrow’s power grids, IoT hardware, telecommunication networks, and automated robotics systems in accredited laboratories.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      highlights: ['Renewable Energy Microgrids', 'Embedded Systems & Robotics', 'Signal Processing & Telecom'],
      careers: ['Robotics Engineer', 'Power Systems Engineer', 'IoT Specialist'],
      tag: 'STEM Accredited'
    },
    {
      id: 'bus-admin',
      title: 'B.Sc. Business Administration & Strategic Entrepreneurship',
      degree: 'B.Sc.',
      faculty: 'Faculty of Management',
      duration: '4 Years Full-Time',
      description: 'Develop executive acumen in financial strategy, venture capital, digital marketing analytics, and international corporate leadership.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      highlights: ['Venture Capital & Corporate Finance', 'Global Supply Chain Management', 'Digital Marketing Analytics'],
      careers: ['Management Consultant', 'Startup Founder', 'Financial Analyst'],
      tag: 'High Demand'
    }
  ];

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-backdrop"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-tag-badge">
              <span className="pulse-indicator"></span>
              2026/2027 Academic Admissions Now Open
            </div>
            <h1 className="hero-title">
              Welcome to <span className="text-gold">Ngozi University</span>
            </h1>
            <p className="hero-subtitle">
              Empowering Tomorrow's Leaders Through Academic Rigor, 
              Cutting-Edge Innovation, and Uncompromising Character.
            </p>
            <p className="hero-intro">
              Founded on the pillars of scholarship, integrity, and societal transformation, 
              Ngozi University provides world-class undergraduate and postgraduate education. 
              Our 250-acre digital campus unites world-renowned faculty and forward-thinking scholars 
              prepared to excel in a rapidly evolving global economy.
            </p>
            
            {/* Prominent Action Buttons */}
            <div className="hero-cta-group">
              <Link to="/programmes" className="btn btn-gold hero-btn">
                <span>Explore Academic Programmes</span>
                <svg className="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
              <Link to="/contact" className="btn btn-outline-white hero-btn">
                <span>Schedule Campus Visit</span>
                <svg className="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </Link>
            </div>

            {/* Quick Accreditation Badges */}
            <div className="hero-badges">
              <div className="hero-badge-item">
                <span className="badge-check">✓</span> Fully Accredited by NUC
              </div>
              <div className="hero-badge-item">
                <span className="badge-check">✓</span> 100% Industry Placement Support
              </div>
              <div className="hero-badge-item">
                <span className="badge-check">✓</span> Merit &amp; Need Scholarships
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-stack">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80" 
                alt="Ngozi University Students Celebrating Academic Excellence" 
                className="hero-main-image"
              />
              <div className="hero-floating-card">
                <div className="floating-card-icon">🎓</div>
                <div>
                  <h4 className="floating-title">#1 Emerging University</h4>
                  <p className="floating-desc">Recognized for STEM Innovation &amp; Research</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. UNIVERSITY AT A GLANCE (KEY METRICS) */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-interactive-header">
            <span className="section-tag">Vital Statistics</span>
            <h2 className="section-title">Ngozi University by the Numbers</h2>
            <div className="stats-tabs">
              <button 
                type="button" 
                className={`stats-tab-btn ${activeStatCategory === 'overall' ? 'active' : ''}`}
                onClick={() => setActiveStatCategory('overall')}
              >
                Institutional Impact
              </button>
              <button 
                type="button" 
                className={`stats-tab-btn ${activeStatCategory === 'academics' ? 'active' : ''}`}
                onClick={() => setActiveStatCategory('academics')}
              >
                Academic Distinction
              </button>
            </div>
          </div>

          {activeStatCategory === 'overall' ? (
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">14,500+</span>
                <span className="stat-label">Full-Time Enrolled Scholars</span>
                <p className="stat-sub">Across 8 specialized faculties</p>
              </div>
              <div className="stat-card">
                <span className="stat-number">48+</span>
                <span className="stat-label">Accredited Programmes</span>
                <p className="stat-sub">Undergraduate &amp; postgraduate degrees</p>
              </div>
              <div className="stat-card">
                <span className="stat-number">94.2%</span>
                <span className="stat-label">Graduate Employment Rate</span>
                <p className="stat-sub">Within six months of graduation</p>
              </div>
              <div className="stat-card">
                <span className="stat-number">180+</span>
                <span className="stat-label">International Partners</span>
                <p className="stat-sub">Active research &amp; exchange institutions</p>
              </div>
            </div>
          ) : (
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">12:1</span>
                <span className="stat-label">Student-Faculty Ratio</span>
                <p className="stat-sub">Personalized mentorship &amp; instruction</p>
              </div>
              <div className="stat-card">
                <span className="stat-number">92%</span>
                <span className="stat-label">Faculty with Doctorate Degrees</span>
                <p className="stat-sub">Trained in leading world institutions</p>
              </div>
              <div className="stat-card">
                <span className="stat-number">₦450M+</span>
                <span className="stat-label">Annual Research Grants</span>
                <p className="stat-sub">Funding student &amp; faculty breakthroughs</p>
              </div>
              <div className="stat-card">
                <span className="stat-number">3,200+</span>
                <span className="stat-label">Annual Scholarship Beneficiaries</span>
                <p className="stat-sub">Ensuring no gifted mind is left behind</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. INTERACTIVE ELEMENT: PILLARS OF EXCELLENCE */}
      <section className="section section-muted pillars-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Interactive Campus Feature</span>
            <h2 className="section-title">The Four Pillars of Ngozi University</h2>
            <p className="section-description">
              Click through the strategic pillars below to explore how our academic philosophy 
              shapes every lecture, research laboratory, and campus experience.
            </p>
          </div>

          <div className="pillar-tabs-nav">
            <button 
              type="button" 
              className={`pillar-nav-btn ${activePillar === 'research' ? 'active' : ''}`}
              onClick={() => setActivePillar('research')}
            >
              Research &amp; Discovery
            </button>
            <button 
              type="button" 
              className={`pillar-nav-btn ${activePillar === 'technology' ? 'active' : ''}`}
              onClick={() => setActivePillar('technology')}
            >
              Technology &amp; Labs
            </button>
            <button 
              type="button" 
              className={`pillar-nav-btn ${activePillar === 'leadership' ? 'active' : ''}`}
              onClick={() => setActivePillar('leadership')}
            >
              Leadership &amp; Character
            </button>
            <button 
              type="button" 
              className={`pillar-nav-btn ${activePillar === 'community' ? 'active' : ''}`}
              onClick={() => setActivePillar('community')}
            >
              Global Community
            </button>
          </div>

          {/* Active Pillar Card (React State Driven) */}
          <div className="pillar-card-display">
            <div className="pillar-info">
              <div className="pillar-header-group">
                {pillars[activePillar].icon}
                <div>
                  <span className="pillar-stat-pill">{pillars[activePillar].stats}</span>
                  <h3 className="pillar-title">{pillars[activePillar].title}</h3>
                  <h4 className="pillar-subtitle">{pillars[activePillar].subtitle}</h4>
                </div>
              </div>
              <p className="pillar-description">{pillars[activePillar].description}</p>
              <div className="pillar-action">
                <Link to="/about" className="btn btn-primary btn-sm">
                  <span>Learn More in About Us</span>
                  <svg className="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="pillar-media">
              <img 
                src={pillars[activePillar].image} 
                alt={pillars[activePillar].title} 
                className="pillar-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROGRAMMES PREVIEW */}
      <section className="section featured-programmes-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Academic Offerings</span>
            <h2 className="section-title">Flagship Degree Programmes</h2>
            <p className="section-description">
              Our multidisciplinary curriculum blends theoretical rigor with real-world industry problem-solving.
            </p>
          </div>

          <div className="grid-3">
            {featuredProgrammes.map(prog => (
              <ProgrammeCard 
                key={prog.id} 
                programme={prog} 
                onSelect={(selected) => setSelectedProgramme(selected)} 
              />
            ))}
          </div>

          <div className="programmes-cta-box">
            <div className="cta-box-text">
              <h3>Looking for More Degrees &amp; Specialisations?</h3>
              <p>Explore over 48 accredited undergraduate and postgraduate programmes across all faculties.</p>
            </div>
            <Link to="/programmes" className="btn btn-gold">
              <span>View All Academic Programmes</span>
              <svg className="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE ELEMENT: VIRTUAL CAMPUS TOUR SPOTLIGHT */}
      <section className="section section-muted virtual-tour-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Campus Experience</span>
            <h2 className="section-title">Interactive Campus Landmark Tour</h2>
            <p className="section-description">
              Click any campus location below to preview our world-class learning facilities and infrastructure.
            </p>
          </div>

          <div className="tour-layout">
            {/* List of Spots */}
            <div className="tour-spots-list">
              {campusSpots.map((spot, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`tour-spot-item ${activeSpot === idx ? 'active' : ''}`}
                  onClick={() => setActiveSpot(idx)}
                >
                  <div className="spot-bullet">{idx + 1}</div>
                  <div className="spot-text">
                    <span className="spot-tag">{spot.tag}</span>
                    <h4 className="spot-name">{spot.name}</h4>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Spotlight Viewer */}
            <div className="tour-spotlight-card">
              <div className="spotlight-image-box">
                <img 
                  src={campusSpots[activeSpot].image} 
                  alt={campusSpots[activeSpot].name} 
                  className="spotlight-img"
                />
                <span className="spotlight-badge">{campusSpots[activeSpot].tag}</span>
              </div>
              <div className="spotlight-content">
                <h3 className="spotlight-title">{campusSpots[activeSpot].name}</h3>
                <p className="spotlight-desc">{campusSpots[activeSpot].desc}</p>
                <div className="spotlight-footer">
                  <span className="spotlight-guide">Location {activeSpot + 1} of {campusSpots.length}</span>
                  <Link to="/contact" className="btn btn-outline btn-sm">
                    Book Campus Walkthrough
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="cta-banner-section">
        <div className="container cta-banner-container">
          <div className="cta-banner-content">
            <h2 className="cta-banner-title">Ready to Begin Your Journey at Ngozi University?</h2>
            <p className="cta-banner-sub">
              Applications for the 2026/2027 academic session are currently in progress. 
              Join a distinguished community of passionate scholars, inventors, and innovators.
            </p>
            <div className="cta-banner-buttons">
              <Link to="/programmes" className="btn btn-gold">
                View Academic Requirements
              </Link>
              <Link to="/contact" className="btn btn-outline-white">
                Contact Admissions Office
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Details Modal if user clicked programme card on home page */}
      {selectedProgramme && (
        <div className="modal-backdrop" onClick={() => setSelectedProgramme(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              type="button" 
              className="modal-close-btn"
              onClick={() => setSelectedProgramme(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="modal-header">
              <span className="badge badge-gold">{selectedProgramme.degree}</span>
              <h3 className="modal-title">{selectedProgramme.title}</h3>
              <p className="modal-subtitle">{selectedProgramme.faculty} • {selectedProgramme.duration}</p>
            </div>
            <div className="modal-body">
              <img 
                src={selectedProgramme.image} 
                alt={selectedProgramme.title} 
                className="modal-image"
              />
              <p className="modal-description">{selectedProgramme.description}</p>
              <div className="modal-section">
                <h4>Core Curriculum Highlights</h4>
                <ul>
                  {selectedProgramme.highlights?.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-section">
                <h4>Career Opportunities</h4>
                <div className="career-tags">
                  {selectedProgramme.careers?.map((c, i) => (
                    <span key={i} className="career-pill">{c}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <Link 
                to="/contact" 
                className="btn btn-primary btn-sm"
                onClick={() => setSelectedProgramme(null)}
              >
                Inquire About Admission
              </Link>
              <button 
                type="button" 
                className="btn btn-outline btn-sm"
                onClick={() => setSelectedProgramme(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
