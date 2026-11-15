import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * About Page Component
 * Requirements:
 * - University background and historical evolution
 * - Detailed explanation of what the university does (academics, research, community)
 * - Mission statement
 * - Vision statement
 * - Strategic Objectives
 * - Interactive Milestones Timeline (using useState)
 * - Well-organised component structure
 */
const About = () => {
  // State for interactive milestone timeline
  const [selectedMilestone, setSelectedMilestone] = useState(1998);

  const milestones = [
    {
      year: 1998,
      title: 'Foundation & Visionary Charter',
      desc: 'Ngozi University was established by an act of visionary philanthropists and academicians seeking to build a beacon of academic rigor and moral excellence in Africa. Initial operations commenced with 3 faculties and 120 pioneer scholars.'
    },
    {
      year: 2005,
      title: 'Full NUC Accreditation & Campus Expansion',
      desc: 'Received full institutional accreditation from the National Universities Commission (NUC). Expanded to the permanent 250-acre Hilltop Campus with dedicated faculties of Engineering, Computing, and Management.'
    },
    {
      year: 2012,
      title: 'Launch of Postgraduate College & Research Centers',
      desc: 'Inaugurated the School of Postgraduate Studies, alongside the Center for Renewable Energy and Tropical Disease Research, attracting international grants and doctoral candidates.'
    },
    {
      year: 2018,
      title: 'Digital Campus & Global Partnerships',
      desc: 'Completed full gigabit fiber infrastructure and established academic exchange pacts with 45+ premier institutions in Europe, North America, and Asia.'
    },
    {
      year: 2024,
      title: 'AI, Robotics & Medical Sciences Complex',
      desc: 'Commissioned the state-of-the-art Innovation Complex featuring artificial intelligence labs, clinical simulation hospital suites, and fintech incubation hubs.'
    },
    {
      year: 2026,
      title: 'Global Ranking & Sustainable Future',
      desc: 'Recognized among top emerging African universities with over 14,500 students, 48 accredited programmes, and groundbreaking sustainability initiatives.'
    }
  ];

  // Core institutional objectives
  const objectives = [
    {
      number: '01',
      title: 'Academic Excellence & Global Rigor',
      text: 'To deliver internationally accredited curricula that cultivate critical reasoning, technical competence, and lifelong intellectual curiosity.'
    },
    {
      number: '02',
      title: 'High-Impact Research & Discovery',
      text: 'To conduct pioneering research that addresses urgent African and global problems in health, technology, agriculture, and sustainable development.'
    },
    {
      number: '03',
      title: 'Ethical Character & Leadership Formation',
      text: 'To instill integrity, social conscience, empathy, and professional ethics into every scholar, nurturing leaders who serve society selflessly.'
    },
    {
      number: '04',
      title: 'Technological & Digital Innovation',
      text: 'To leverage modern learning tools, digital laboratories, and artificial intelligence to prepare students for the 4th Industrial Revolution.'
    },
    {
      number: '05',
      title: 'Industry Partnerships & Employability',
      text: 'To maintain strategic alliances with global industries, providing students with internships, real-world capstone projects, and entrepreneurial incubation.'
    },
    {
      number: '06',
      title: 'Community Empowerment & Inclusivity',
      text: 'To actively engage in grassroots community development, scholarship endowments, and outreach programmes that uplift society.'
    }
  ];

  return (
    <div className="about-page">
      {/* 1. PAGE HEADER BANNER */}
      <section className="page-header-banner">
        <div className="container">
          <span className="page-header-tag">Heritage &amp; Excellence</span>
          <h1 className="page-header-title">About Ngozi University</h1>
          <p className="page-header-desc">
            Discover our rich heritage, foundational ideals, and unwavering commitment 
            to transforming lives through world-class scholarship, research, and character.
          </p>
        </div>
      </section>

      {/* 2. UNIVERSITY BACKGROUND & HISTORY */}
      <section className="section about-history-section">
        <div className="container grid-2 align-center">
          <div className="about-history-content">
            <span className="section-tag">Institutional Background</span>
            <h2 className="section-title">A Legacy of Distinction Since 1998</h2>
            <p className="about-lead">
              Ngozi University was founded with a transformative objective: to create a citadel 
              of higher learning where academic brilliance and ethical integrity walk hand-in-hand.
            </p>
            <p className="about-text">
              From our modest beginnings in 1998 with three foundational departments, Ngozi University 
              has grown into one of Africa’s most respected modern universities. Situated on an expansive 
              250-acre master-planned campus, we are home to more than 14,500 undergraduate and 
              postgraduate scholars across eight distinguished faculties.
            </p>
            <p className="about-text">
              Over nearly three decades, our alumni have become leaders in software engineering, 
              medical surgery, public policy, civil infrastructure, international corporate law, 
              and innovative entrepreneurship.
            </p>
            <div className="about-quote">
              <blockquote>
                "Our sacred trust is to mold minds that do not merely conform to the world, but 
                actively reconstruct it for the greater good of humanity."
              </blockquote>
              <cite>— Prof. Chinedu Okafor, Ph.D., FAS, Vice-Chancellor</cite>
            </div>
          </div>

          <div className="about-history-visual">
            <div className="image-frame-stacked">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80" 
                alt="Ngozi University Historic Central Hall" 
                className="main-about-img"
              />
              <div className="experience-badge">
                <span className="years">28+</span>
                <span className="label">Years of Educational Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT THE UNIVERSITY DOES */}
      <section className="section section-muted what-we-do-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Core Mandate</span>
            <h2 className="section-title">What Ngozi University Does</h2>
            <p className="section-description">
              We operate at the nexus of education, research, and community transformation.
            </p>
          </div>

          <div className="grid-3">
            <div className="function-card">
              <div className="function-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
              <h3 className="function-title">1. Transformative Teaching</h3>
              <p className="function-text">
                Delivering learner-centered pedagogy across 48 accredited undergraduate and 
                postgraduate degree programmes, taught by distinguished professors and active industry fellows.
              </p>
            </div>

            <div className="function-card">
              <div className="function-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              <h3 className="function-title">2. Groundbreaking Research</h3>
              <p className="function-text">
                Spearheading peer-reviewed discoveries in artificial intelligence, clinical epidemiology, 
                clean water technology, renewable microgrids, and emerging market economic policy.
              </p>
            </div>

            <div className="function-card">
              <div className="function-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="function-title">3. Societal Empowerment</h3>
              <p className="function-text">
                Fostering student entrepreneurship incubators, legal aid clinics, mobile health outreaches, 
                and technology literacy programmes across regional host communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION STATEMENTS */}
      <section className="section mission-vision-section" id="vision">
        <div className="container">
          <div className="mission-vision-grid">
            {/* Mission Statement */}
            <div className="statement-card mission-card">
              <div className="statement-header">
                <div className="statement-icon-badge">🎯</div>
                <div>
                  <span className="statement-tag">Our Foundational Mandate</span>
                  <h3 className="statement-title">Our Mission</h3>
                </div>
              </div>
              <p className="statement-body">
                "To provide an intellectually stimulating, digitally enabled learning environment 
                that produces visionary graduates of impeccable moral character, grounded in technical 
                mastery, creative problem-solving, and committed to advancing the socio-economic 
                wellbeing of our nation and the global society."
              </p>
              <div className="statement-highlights">
                <span>✓ Academic Rigor</span>
                <span>✓ Moral Integrity</span>
                <span>✓ Technological Fluency</span>
              </div>
            </div>

            {/* Vision Statement */}
            <div className="statement-card vision-card">
              <div className="statement-header">
                <div className="statement-icon-badge">🔭</div>
                <div>
                  <span className="statement-tag">Our Ultimate Aspiration</span>
                  <h3 className="statement-title">Our Vision</h3>
                </div>
              </div>
              <p className="statement-body">
                "To be globally recognized as a premier center of academic distinction, technological 
                innovation, and ethical leadership development in Africa, continually producing 
                breakthrough research and scholars who redefine frontiers across industry, science, and governance."
              </p>
              <div className="statement-highlights">
                <span>✓ Global Distinction</span>
                <span>✓ Innovation Ecosystem</span>
                <span>✓ Transformative Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC OBJECTIVES */}
      <section className="section section-muted objectives-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Institutional Blueprint</span>
            <h2 className="section-title">Our Strategic Objectives</h2>
            <p className="section-description">
              The institutional pillars guiding our academic curricula, faculty recruitment, 
              capital investments, and student development frameworks.
            </p>
          </div>

          <div className="grid-3">
            {objectives.map((obj, i) => (
              <div key={i} className="objective-card">
                <span className="objective-num">{obj.number}</span>
                <h4 className="objective-title">{obj.title}</h4>
                <p className="objective-text">{obj.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE HISTORICAL TIMELINE (STATE DRIVEN) */}
      <section className="section history-timeline-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Interactive Milestones</span>
            <h2 className="section-title">The Journey of Ngozi University</h2>
            <p className="section-description">
              Click on each landmark year to explore key milestones that defined our growth.
            </p>
          </div>

          <div className="timeline-interactive-wrapper">
            {/* Year Selector Pills */}
            <div className="timeline-years-bar">
              {milestones.map(m => (
                <button
                  key={m.year}
                  type="button"
                  className={`timeline-year-btn ${selectedMilestone === m.year ? 'active' : ''}`}
                  onClick={() => setSelectedMilestone(m.year)}
                >
                  <span className="year-val">{m.year}</span>
                  <span className="timeline-dot"></span>
                </button>
              ))}
            </div>

            {/* Selected Milestone Details Display */}
            {(() => {
              const current = milestones.find(m => m.year === selectedMilestone);
              return (
                <div className="milestone-display-card">
                  <div className="milestone-year-large">{current.year}</div>
                  <div className="milestone-info">
                    <h3 className="milestone-title">{current.title}</h3>
                    <p className="milestone-text">{current.desc}</p>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* 7. CTA LINKING TO PROGRAMMES */}
      <section className="section-cta-simple">
        <div className="container text-center">
          <h2 className="section-title">Join Our Community of Academic Achievers</h2>
          <p className="section-description mb-4">
            Explore our accredited programmes and discover how Ngozi University can help you 
            realize your academic and professional ambitions.
          </p>
          <div className="cta-buttons-center">
            <Link to="/programmes" className="btn btn-primary">
              Explore Academic Programmes
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
