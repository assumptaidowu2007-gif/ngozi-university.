import React, { useState } from 'react';

/**
 * Contact Page Component
 * Requirements:
 * - Official university email address and telephone numbers (clearly identified as sample details)
 * - Complete contact form:
 *   - Full name
 *   - Email address
 *   - Subject
 *   - Message
 *   - Submit button
 * - Controlled inputs powered by React useState
 * - Form validation (required fields + RFC-compliant email regex)
 * - Error feedback states and success confirmation banner
 * - Sample details notice
 * - Interactive FAQ accordion (useState)
 */
const Contact = () => {
  // Controlled form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  // Validation error state
  const [errors, setErrors] = useState({});

  // Submission status state ('idle' | 'submitting' | 'success')
  const [submitStatus, setSubmitStatus] = useState('idle');

  // Stored submitted payload to render personalized success feedback
  const [submittedData, setSubmittedData] = useState(null);

  // State for interactive FAQ accordion
  const [activeFaq, setActiveFaq] = useState(0);

  // Email validation regex (standard RFC-compliant pattern)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Handle controlled input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    // Validate Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Full Name must be at least 3 characters long.';
    }

    // Validate Email Address
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g. name@domain.com).';
    }

    // Validate Subject
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please choose or enter an inquiry subject.';
    }

    // Validate Message
    if (!formData.message.trim()) {
      newErrors.message = 'Inquiry Message cannot be empty.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    return newErrors;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus('idle');
      return;
    }

    // Form is valid: simulate processing
    setErrors({});
    setSubmitStatus('submitting');

    setTimeout(() => {
      // Generate a simulated reference number
      const refNumber = 'NU-INQ-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedData({
        ...formData,
        refNumber,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      setSubmitStatus('success');

      // Reset form fields
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 600);
  };

  // Reset form to send another inquiry
  const handleReset = () => {
    setSubmitStatus('idle');
    setSubmittedData(null);
  };

  // FAQ Accordion items
  const faqs = [
    {
      question: 'When does admission application close for the 2026/2027 session?',
      answer: 'Undergraduate admissions remain open until 30th November 2026. However, early applications are strongly encouraged for competitive programmes such as Computer Science, Engineering, and Nursing.'
    },
    {
      question: 'Are scholarship schemes available for new students?',
      answer: 'Yes. Ngozi University offers both Academic Merit Scholarships (covering 50% to 100% tuition for high UTME achievers) and Need-Based Financial Grants for qualifying candidates.'
    },
    {
      question: 'Can prospective students book an in-person campus tour?',
      answer: 'Campus tours are conducted every Tuesday and Thursday between 10:00 AM and 2:00 PM. You can indicate your desired date using the contact form above.'
    },
    {
      question: 'Is accommodation provided on campus for all freshmen?',
      answer: 'Yes. Ngozi University operates modern, secure student halls of residence with 24/7 power, broadband Wi-Fi, and cafeteria dining plans guaranteed for all first-year students.'
    }
  ];

  return (
    <div className="contact-page">
      {/* 1. PAGE HEADER BANNER */}
      <section className="page-header-banner">
        <div className="container">
          <span className="page-header-tag">Connect With Us</span>
          <h1 className="page-header-title">Contact Ngozi University</h1>
          <p className="page-header-desc">
            We are here to assist you with inquiries regarding undergraduate admissions, 
            faculty research, academic transcripts, and campus visits.
          </p>
        </div>
      </section>

      {/* SAMPLE DETAILS NOTICE BANNER */}
      <div className="sample-notice-banner">
        <div className="container">
          <div className="notice-inner">
            <svg className="icon-notice" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <span>
              <strong>Academic Project Notice:</strong> The contact details, telephone numbers, and inquiry forms 
              presented on this portal are sample demonstration data developed for the New Horizon React JS assignment.
            </span>
          </div>
        </div>
      </div>

      {/* 2. CONTACT INFORMATION & FORM SECTION */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Official Contact Channels */}
            <div className="contact-info-panel">
              <span className="section-tag">Campus Information</span>
              <h2 className="panel-title">Get in Touch Directly</h2>
              <p className="panel-desc">
                Our admissions counselors and administrative officers are available during 
                official university hours to guide prospective students and parents.
              </p>

              <div className="contact-cards-stack">
                {/* Email Box */}
                <div className="contact-info-card">
                  <div className="card-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Official Email Inquiries</h4>
                    <p className="contact-value">
                      <a href="mailto:info@ngoziuniversity.edu.ng">info@ngoziuniversity.edu.ng</a>
                    </p>
                    <p className="contact-value">
                      <a href="mailto:admissions@ngoziuniversity.edu.ng">admissions@ngoziuniversity.edu.ng</a>
                    </p>
                    <small className="contact-note">Response time: Within 24-48 business hours</small>
                  </div>
                </div>

                {/* Telephone Box */}
                <div className="contact-info-card">
                  <div className="card-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Admissions &amp; General Lines</h4>
                    <p className="contact-value">+234 (0) 803 123 4567</p>
                    <p className="contact-value">+234 (0) 800-NGOZI-UNI (Toll-Free)</p>
                    <small className="contact-note">Monday – Friday: 8:00 AM – 5:00 PM WAT</small>
                  </div>
                </div>

                {/* Physical Location */}
                <div className="contact-info-card">
                  <div className="card-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h4>University Physical Address</h4>
                    <p className="contact-value">
                      Ngozi University Main Campus, KM 14 University Boulevard, 
                      Hilltop Academic District, Ngozi City.
                    </p>
                    <small className="contact-note">Visitors must check in at Security Gate 1</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Controlled React Contact Form */}
            <div className="contact-form-panel">
              <div className="form-card">
                <div className="form-header">
                  <h3 className="form-title">Send an Academic Inquiry</h3>
                  <p className="form-subtitle">
                    Fill out the form below. All fields marked with (*) are required.
                  </p>
                </div>

                {/* Success Message Feedback Banner */}
                {submitStatus === 'success' && submittedData && (
                  <div className="alert-box alert-success" role="alert">
                    <div className="alert-icon">✓</div>
                    <div className="alert-content">
                      <h4 className="alert-heading">Inquiry Successfully Submitted!</h4>
                      <p className="alert-text">
                        Thank you, <strong>{submittedData.fullName}</strong>. Your inquiry regarding{' '}
                        <strong>"{submittedData.subject}"</strong> has been received with tracking reference{' '}
                        <code className="ref-code">{submittedData.refNumber}</code>.
                      </p>
                      <p className="alert-subtext">
                        A confirmation notification has been dispatched to <strong>{submittedData.email}</strong>. 
                        Our Admissions Counselor will contact you shortly.
                      </p>
                      <button 
                        type="button" 
                        className="btn btn-outline btn-sm mt-3"
                        onClick={handleReset}
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                )}

                {/* The Controlled React Form */}
                {submitStatus !== 'success' && (
                  <form onSubmit={handleSubmit} noValidate className="university-contact-form">
                    {/* Error Summary Banner */}
                    {Object.keys(errors).length > 0 && (
                      <div className="alert-box alert-error" role="alert">
                        <svg className="icon-error" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="12" y1="8" x2="12" y2="12"/>
                          <line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                        <span>Please correct the errors indicated below before submitting.</span>
                      </div>
                    )}

                    {/* Full Name Input */}
                    <div className={`form-group ${errors.fullName ? 'has-error' : ''}`}>
                      <label htmlFor="fullName" className="form-label">
                        Full Name <span className="req">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="fullName" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Chinelo Nwachukwu"
                        className="form-control"
                        autoComplete="name"
                      />
                      {errors.fullName && (
                        <p className="error-message" role="alert">
                          <span className="error-dot">●</span> {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email Address Input */}
                    <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                      <label htmlFor="email" className="form-label">
                        Email Address <span className="req">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. chinelo@example.com"
                        className="form-control"
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p className="error-message" role="alert">
                          <span className="error-dot">●</span> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Subject Input / Dropdown */}
                    <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
                      <label htmlFor="subject" className="form-label">
                        Inquiry Subject <span className="req">*</span>
                      </label>
                      <select 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-control select-control"
                      >
                        <option value="">-- Select Subject Category --</option>
                        <option value="Undergraduate Admissions 2026/2027">Undergraduate Admissions 2026/2027</option>
                        <option value="Postgraduate & Masters Degree Inquiries">Postgraduate &amp; Masters Degree Inquiries</option>
                        <option value="Tuition, Scholarships & Financial Aid">Tuition, Scholarships &amp; Financial Aid</option>
                        <option value="Campus Tour & Facility Booking">Campus Tour &amp; Facility Booking</option>
                        <option value="Academic Transcripts & Verification">Academic Transcripts &amp; Verification</option>
                        <option value="General Information Inquiry">General Information Inquiry</option>
                      </select>
                      {errors.subject && (
                        <p className="error-message" role="alert">
                          <span className="error-dot">●</span> {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message Textarea */}
                    <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                      <label htmlFor="message" className="form-label">
                        Your Message <span className="req">*</span>
                      </label>
                      <textarea 
                        id="message" 
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Provide details about your inquiry, academic background, or preferred programme..."
                        className="form-control textarea-control"
                      ></textarea>
                      <div className="char-count">
                        {formData.message.length} characters (minimum 10 required)
                      </div>
                      {errors.message && (
                        <p className="error-message" role="alert">
                          <span className="error-dot">●</span> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      className="btn btn-primary btn-full submit-btn"
                      disabled={submitStatus === 'submitting'}
                    >
                      {submitStatus === 'submitting' ? (
                        <>
                          <span className="btn-spinner"></span>
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Inquiry Message</span>
                          <svg className="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="22" y1="2" x2="11" y2="13"/>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE FAQ ACCORDION SECTION */}
      <section className="section section-muted faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2 className="section-title">Answers to Common Inquiries</h2>
            <p className="section-description">
              Find fast answers to frequently asked questions regarding admissions, scholarships, and campus life.
            </p>
          </div>

          <div className="faq-accordion-wrapper">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  aria-expanded={activeFaq === index}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-toggle-icon">
                    {activeFaq === index ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === index && (
                  <div className="faq-answer-pane">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
