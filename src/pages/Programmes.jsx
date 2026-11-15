import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgrammeCard from '../components/ProgrammeCard';

/**
 * Programmes Page Component
 * Requirements:
 * - At least three academic programmes (includes 8 comprehensive degree programmes)
 * - Programme names, descriptions, and suitable images
 * - Reusable React components (ProgrammeCard)
 * - JavaScript array methods (.map(), .filter()) to display repeated content
 * - Interactive category filters and search bar using React useState
 * - Modal dialog for curriculum details & admission entry requirements
 * - Responsive CSS grid layout
 */
const Programmes = () => {
  // State for active faculty category filter
  const [selectedFaculty, setSelectedFaculty] = useState('All');

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // State for selected programme for detailed modal
  const [activeModalProgramme, setActiveModalProgramme] = useState(null);

  // Database of academic programmes
  const programmesData = [
    {
      id: 'bsc-cs-ai',
      title: 'B.Sc. Computer Science & Artificial Intelligence',
      faculty: 'Computing & IT',
      degree: 'B.Sc. (Honours)',
      duration: '4 Years Full-Time',
      description: 'An advanced computing programme combining core algorithmic theory, machine learning models, cloud engineering, cybersecurity, and modern distributed systems.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Applied Machine Learning & Neural Networks',
        'Full-Stack Web & Mobile Architecture',
        'Cloud Computing & Distributed Systems',
        'Data Structures & Advanced Algorithms',
        'Cybersecurity & Network Defense'
      ],
      careers: ['AI Engineer', 'Software Architect', 'Data Scientist', 'Cloud DevOps Lead'],
      requirements: 'Five (5) credit passes in SSCE/WASSCE/NECO including English Language, Mathematics, Physics, Chemistry and one other science subject in not more than two sittings.',
      tag: 'High Demand'
    },
    {
      id: 'bsc-se',
      title: 'B.Sc. Software Engineering & Cloud Computing',
      faculty: 'Computing & IT',
      degree: 'B.Sc. (Honours)',
      duration: '4 Years Full-Time',
      description: 'Focuses on the engineering methodologies behind large-scale software systems, DevOps CI/CD pipelines, containerisation, microservices, and agile team management.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Microservices & API Architecture',
        'Containerization & Kubernetes DevOps',
        'Agile Software Lifecycle & QA Testing',
        'Database Management & SQL/NoSQL Systems'
      ],
      careers: ['Senior Software Engineer', 'DevOps Specialist', 'Systems Analyst', 'Technical Lead'],
      requirements: 'Five (5) credits in WASSCE/NECO including Mathematics, English, Physics and two relevant sciences.',
      tag: 'Industry Aligned'
    },
    {
      id: 'beng-eee',
      title: 'B.Eng. Electrical & Electronics Engineering',
      faculty: 'Engineering',
      degree: 'B.Eng.',
      duration: '5 Years Full-Time',
      description: 'COREN-accredited engineering programme covering smart grid infrastructure, renewable energy systems, digital signal processing, robotics, and integrated circuits.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Renewable Power & Smart Microgrids',
        'Robotics & Embedded Microcontrollers',
        'VLSI & Circuit Design Laboratories',
        'Telecommunications & High-Frequency RF'
      ],
      careers: ['Electrical Engineer', 'Robotics Systems Developer', 'Power Grid Consultant', 'Telecom Engineer'],
      requirements: 'Five (5) credits in Mathematics, Physics, Chemistry, English Language and Further Mathematics/Technical Drawing.',
      tag: 'COREN Accredited'
    },
    {
      id: 'beng-civil',
      title: 'B.Eng. Civil & Environmental Engineering',
      faculty: 'Engineering',
      degree: 'B.Eng.',
      duration: '5 Years Full-Time',
      description: 'Prepares civil engineers equipped to design climate-resilient bridges, smart city infrastructure, sustainable water resources, and geotechnical developments.',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Structural Analysis & Earthquake Design',
        'Hydraulics & Environmental Sanitation',
        'Geotechnical Surveying & Soil Mechanics',
        'BIM & CAD Construction Project Management'
      ],
      careers: ['Structural Engineer', 'Urban Infrastructure Planner', 'Geotechnical Consultant', 'Project Manager'],
      requirements: 'Five (5) O-Level credits in English, Mathematics, Physics, Chemistry, and any other relevant science.',
      tag: 'Infrastructure Focus'
    },
    {
      id: 'bsc-bus-admin',
      title: 'B.Sc. Business Administration & Strategic Management',
      faculty: 'Business & Management',
      degree: 'B.Sc. (Honours)',
      duration: '4 Years Full-Time',
      description: 'Cultivates dynamic entrepreneurial executives skilled in corporate finance, market analytics, supply chain operations, and leadership in emerging economies.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Strategic Corporate Finance & Valuation',
        'Supply Chain & Global Logistics',
        'Venture Incubation & Angel Financing',
        'Digital Marketing & Consumer Analytics'
      ],
      careers: ['Management Consultant', 'Chief Financial Officer', 'Investment Banker', 'Enterprise Founder'],
      requirements: 'Five (5) credit passes in English, Mathematics, Economics, and any two commercial or social science subjects.',
      tag: 'Top Enrolment'
    },
    {
      id: 'bnsc-nursing',
      title: 'B.N.Sc. Nursing Science & Healthcare Informatics',
      faculty: 'Health Sciences',
      degree: 'B.N.Sc.',
      duration: '5 Years Full-Time',
      description: 'NMCN-accredited comprehensive nursing curriculum blending clinical hospital rotations with medical simulation, health informatics, and community epidemiology.',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Advanced Clinical Surgical Nursing',
        'Maternal & Child Health Care Practice',
        'Healthcare Data & Electronic Records',
        'Epidemiological Field Outreaches'
      ],
      careers: ['Clinical Nurse Specialist', 'Hospital Administrator', 'Nurse Epidemiologist', 'Health Informatics Officer'],
      requirements: 'Five (5) science credits in English, Mathematics, Biology, Chemistry, and Physics in one sitting.',
      tag: 'NMCN Accredited'
    },
    {
      id: 'llb-law',
      title: 'LL.B. Bachelor of Laws & International Jurisprudence',
      faculty: 'Law & Arts',
      degree: 'LL.B.',
      duration: '5 Years Full-Time',
      description: 'Prepares future advocates, corporate counsel, and judges grounded in constitutional law, commercial arbitration, intellectual property, and tech law.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Corporate & Securities Law Regulation',
        'Constitutional & Human Rights Advocacy',
        'Intellectual Property & Cyber Law',
        'Appellate Moot Court & Trial Advocacy'
      ],
      careers: ['Corporate Barrister', 'Arbitration Counsel', 'Legal Tech Advisor', 'Diplomatic Affairs Officer'],
      requirements: 'Five (5) credits in English Language, Literature in English, Mathematics, and two other Arts or Social Science subjects.',
      tag: 'Prestigious'
    },
    {
      id: 'bsc-mass-comm',
      title: 'B.Sc. Mass Communication & Digital Broadcasting',
      faculty: 'Law & Arts',
      degree: 'B.Sc. (Honours)',
      duration: '4 Years Full-Time',
      description: 'Empowers multimedia journalists, broadcast producers, and public relations strategists using television studios, podcast labs, and digital newsrooms.',
      image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Digital Broadcast Journalism & Studio Production',
        'Investigative Reporting & Fact-Checking',
        'Brand Reputation & Public Relations',
        'Social Media Strategy & Data Journalism'
      ],
      careers: ['Broadcast Journalist', 'PR Director', 'Multimedia Content Producer', 'Communications Specialist'],
      requirements: 'Five (5) credits including English Language, Literature in English, Mathematics, and two other relevant arts subjects.',
      tag: 'Studio Equipped'
    }
  ];

  // Faculty categories for interactive filtering
  const categories = ['All', 'Computing & IT', 'Engineering', 'Business & Management', 'Health Sciences', 'Law & Arts'];

  // Filter programmes using JavaScript array methods (.filter())
  const filteredProgrammes = programmesData.filter(programme => {
    // Check faculty filter
    const matchesFaculty = selectedFaculty === 'All' || programme.faculty === selectedFaculty;
    
    // Check keyword search filter
    const matchesSearch = programme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          programme.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          programme.degree.toLowerCase().includes(searchQuery.toLowerCase());
                          
    return matchesFaculty && matchesSearch;
  });

  return (
    <div className="programmes-page">
      {/* 1. PAGE HEADER */}
      <section className="page-header-banner">
        <div className="container">
          <span className="page-header-tag">Academic Excellence</span>
          <h1 className="page-header-title">Academic Programmes &amp; Faculties</h1>
          <p className="page-header-desc">
            Explore our diverse, accredited undergraduate programmes designed to equip 
            you with specialized knowledge, critical problem-solving skills, and global career opportunities.
          </p>
        </div>
      </section>

      {/* 2. PROGRAMMES DIRECTORY WITH INTERACTIVE FILTERS */}
      <section className="section">
        <div className="container">
          {/* Interactive Controls Bar: Search + Category Filters */}
          <div className="programmes-controls-bar">
            {/* Search Input Filter */}
            <div className="search-input-wrapper">
              <svg className="icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input 
                type="text"
                placeholder="Search programmes by name, keyword or degree (e.g. AI, Nursing, Engineering)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="programmes-search-input"
                aria-label="Search academic programmes"
              />
              {searchQuery && (
                <button 
                  type="button" 
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  title="Clear search query"
                >
                  &times;
                </button>
              )}
            </div>

            {/* Category Filter Buttons */}
            <div className="category-filter-pills" role="tablist" aria-label="Filter by faculty">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`filter-pill-btn ${selectedFaculty === cat ? 'active' : ''}`}
                  onClick={() => setSelectedFaculty(cat)}
                  role="tab"
                  aria-selected={selectedFaculty === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count & Active Filter Indicator */}
          <div className="results-summary-row">
            <p className="results-text">
              Showing <strong>{filteredProgrammes.length}</strong> of {programmesData.length} academic programmes
              {selectedFaculty !== 'All' && <span> in <em>{selectedFaculty}</em></span>}
              {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
            </p>
            {(selectedFaculty !== 'All' || searchQuery) && (
              <button 
                type="button" 
                className="reset-filters-btn"
                onClick={() => {
                  setSelectedFaculty('All');
                  setSearchQuery('');
                }}
              >
                Reset All Filters
              </button>
            )}
          </div>

          {/* Programmes Grid Rendered via JavaScript .map() */}
          {filteredProgrammes.length > 0 ? (
            <div className="grid-3 programmes-grid">
              {filteredProgrammes.map((programme) => (
                <ProgrammeCard 
                  key={programme.id} 
                  programme={programme}
                  onSelect={(prog) => setActiveModalProgramme(prog)}
                />
              ))}
            </div>
          ) : (
            <div className="no-programmes-card">
              <div className="no-results-icon">🔍</div>
              <h3>No Programmes Found</h3>
              <p>We could not find any academic programmes matching your current criteria.</p>
              <button 
                type="button" 
                className="btn btn-primary btn-sm"
                onClick={() => {
                  setSelectedFaculty('All');
                  setSearchQuery('');
                }}
              >
                View All Programmes
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. ADMISSION REQUIREMENTS OVERVIEW */}
      <section className="section section-muted admissions-guide-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Enrolment Guide</span>
            <h2 className="section-title">General Admission Requirements</h2>
            <p className="section-description">
              Learn about our straightforward undergraduate entry pathways for the 2026/2027 academic session.
            </p>
          </div>

          <div className="grid-3">
            <div className="admissions-guide-card">
              <div className="guide-step-number">1</div>
              <h4>UTME / JAMB Pathway</h4>
              <p>
                Candidates must sit for the Unified Tertiary Matriculation Examination (UTME) 
                and attain the minimum cutoff score of 180, alongside choosing Ngozi University 
                as their institution of first choice.
              </p>
            </div>

            <div className="admissions-guide-card">
              <div className="guide-step-number">2</div>
              <h4>O'Level Prerequisites</h4>
              <p>
                Minimum of five (5) credit passes in relevant subjects including English Language 
                and Mathematics at SSCE, WASSCE, GCE, NECO or NABTEB in not more than two sittings.
              </p>
            </div>

            <div className="admissions-guide-card">
              <div className="guide-step-number">3</div>
              <h4>Direct Entry Pathway</h4>
              <p>
                Candidates with Cambridge A-Levels, JUPEB, IJMB, or recognized National Diploma (ND) 
                with upper credit are eligible for direct admission into 200-Level.
              </p>
            </div>
          </div>

          <div className="text-center mt-5">
            <Link to="/contact" className="btn btn-gold">
              <span>Have Questions? Inquire With Admissions</span>
              <svg className="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PROGRAMME DETAILS MODAL (Interactive Component Triggered via onSelect) */}
      {activeModalProgramme && (
        <div className="modal-backdrop" onClick={() => setActiveModalProgramme(null)}>
          <div className="modal-content modal-content-lg" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="modal-close-btn"
              onClick={() => setActiveModalProgramme(null)}
              aria-label="Close modal dialog"
            >
              &times;
            </button>

            <div className="modal-header">
              <div className="modal-badges-row">
                <span className="badge badge-gold">{activeModalProgramme.faculty}</span>
                <span className="badge badge-navy">{activeModalProgramme.degree}</span>
                {activeModalProgramme.tag && (
                  <span className="badge badge-gold">{activeModalProgramme.tag}</span>
                )}
              </div>
              <h2 className="modal-title">{activeModalProgramme.title}</h2>
              <p className="modal-subtitle">
                <svg className="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                {activeModalProgramme.duration}
              </p>
            </div>

            <div className="modal-body">
              <div className="modal-banner-img">
                <img 
                  src={activeModalProgramme.image} 
                  alt={activeModalProgramme.title} 
                />
              </div>

              <div className="modal-info-block">
                <h3>Programme Overview</h3>
                <p>{activeModalProgramme.description}</p>
              </div>

              <div className="modal-info-block">
                <h3>Core Curriculum Highlights</h3>
                <ul className="modal-highlights-list">
                  {activeModalProgramme.highlights.map((item, idx) => (
                    <li key={idx}>
                      <svg className="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-info-block">
                <h3>Entry Prerequisites</h3>
                <p className="requirements-box">{activeModalProgramme.requirements}</p>
              </div>

              <div className="modal-info-block">
                <h3>Target Career Paths</h3>
                <div className="career-tags">
                  {activeModalProgramme.careers.map((career, idx) => (
                    <span key={idx} className="career-pill">{career}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <Link 
                to="/contact" 
                className="btn btn-primary"
                onClick={() => setActiveModalProgramme(null)}
              >
                Apply / Inquire Now
              </Link>
              <button 
                type="button" 
                className="btn btn-outline"
                onClick={() => setActiveModalProgramme(null)}
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Programmes;
