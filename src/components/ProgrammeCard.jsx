import React from 'react';

/**
 * Reusable ProgrammeCard Component
 * Demonstrates:
 * - Functional React component
 * - Receiving and destructuring props (programme object, onSelect callback)
 * - Conditional CSS classes and badges
 * - Handling onClick events to trigger parent callbacks
 * - Array rendering inside JSX for highlights
 */
const ProgrammeCard = ({ programme, onSelect }) => {
  const {
    id,
    title,
    degree,
    faculty,
    duration,
    description,
    image,
    highlights = [],
    careers = [],
    tag
  } = programme;

  return (
    <article className="programme-card" data-id={id}>
      {/* Programme Thumbnail with Badges */}
      <div className="programme-image-wrapper">
        <img 
          src={image} 
          alt={`${title} at Ngozi University`} 
          className="programme-image"
          loading="lazy"
        />
        <div className="programme-overlay-badge">
          {tag && <span className="badge badge-gold">{tag}</span>}
          <span className="badge badge-navy">{degree}</span>
        </div>
      </div>

      {/* Programme Card Content */}
      <div className="programme-card-body">
        <div className="programme-meta">
          <span className="programme-faculty">{faculty}</span>
          <span className="programme-duration">
            <svg className="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            {duration}
          </span>
        </div>

        <h3 className="programme-title">{title}</h3>
        <p className="programme-desc">{description}</p>

        {/* Key Curriculum Highlights (Array map in component) */}
        {highlights.length > 0 && (
          <div className="programme-highlights">
            <span className="highlights-label">Key Focus Areas:</span>
            <ul className="highlights-list">
              {highlights.slice(0, 3).map((item, index) => (
                <li key={index} className="highlight-item">
                  <svg className="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Career Opportunities Tags */}
        {careers.length > 0 && (
          <div className="programme-careers">
            <span className="careers-label">Career Paths:</span>
            <div className="career-tags">
              {careers.slice(0, 2).map((career, idx) => (
                <span key={idx} className="career-pill">{career}</span>
              ))}
              {careers.length > 2 && (
                <span className="career-pill-more">+{careers.length - 2} more</span>
              )}
            </div>
          </div>
        )}

        {/* Interactive Action Button */}
        <div className="programme-card-footer">
          <button 
            type="button" 
            className="btn btn-outline btn-sm btn-full"
            onClick={() => onSelect(programme)}
            aria-label={`View details and curriculum for ${title}`}
          >
            <span>View Curriculum &amp; Requirements</span>
            <svg className="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProgrammeCard;
