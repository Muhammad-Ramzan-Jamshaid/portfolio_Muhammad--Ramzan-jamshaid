import React, { useState } from 'react';
import { Icons } from './Icons';

export const Contact = ({ personalInfo, showToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      showToast(`Thank you ${formData.name}! Your message has been sent successfully.`);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Asymmetric Split Section Header (Matching Demo Layout) */}
        <div className="section-header-split">
          <div className="header-left">
            <span className="header-label">GET IN TOUCH</span>
            <div className="header-sub">Let's Work Together</div>
            <h2 className="header-main-title">
              Ready to <span className="highlight-gold">start a project</span> or hire?
            </h2>
          </div>

          <div className="header-right">
            <p className="header-desc">
              Whether you need a full-stack Laravel &amp; React developer, custom API engineering, or technical consultation—drop a message below!
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="contact-grid">
          {/* Left Details Box */}
          <div className="clean-card contact-info-box">
            <h3 className="contact-heading">Direct Contact Info</h3>
            <p className="contact-sub">Available for freelance projects and engineering roles.</p>

            <div className="info-rows">
              <div className="info-row">
                <div className="info-icon"><Icons.Mail size={18} /></div>
                <div>
                  <div className="info-title">Email Address</div>
                  <a href={`mailto:${personalInfo.email}`} className="info-link">{personalInfo.email}</a>
                </div>
              </div>

              <div className="info-row">
                <div className="info-icon"><Icons.Globe size={18} /></div>
                <div>
                  <div className="info-title">Location</div>
                  <div className="info-val">{personalInfo.location}</div>
                </div>
              </div>

              <div className="info-row">
                <div className="info-icon"><Icons.Check size={18} /></div>
                <div>
                  <div className="info-title">Availability Status</div>
                  <div className="info-val highlight-gold">{personalInfo.status || "Available"}</div>
                </div>
              </div>
            </div>

            <div className="social-block">
              <span className="social-title">Social Links:</span>
              <div className="social-row">
                <a href={personalInfo.github || "https://github.com"} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                  <Icons.Github size={14} />
                  <span>GitHub</span>
                </a>
                <a href={personalInfo.linkedin || "https://linkedin.com"} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                  <Icons.Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Box */}
          <div className="clean-card contact-form-box">
            <h3 className="contact-heading">Send a Message</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    id="name"
                    type="text"
                    className="form-input"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input
                    id="email"
                    type="email"
                    className="form-input"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  className="form-input"
                  placeholder="Project inquiry / Job opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  rows="4"
                  className="form-textarea"
                  placeholder="Write your project details or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-gold" style={{ width: '100%' }} disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Message ↗'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 2rem;
        }
        .contact-info-box, .contact-form-box {
          padding: 2rem;
          width: 100%;
        }
        .contact-heading {
          font-size: 1.3rem;
          margin-bottom: 0.4rem;
          color: #ffffff;
        }
        .contact-sub {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1.75rem;
        }
        .info-rows {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }
        .info-row {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }
        .info-icon {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background: var(--bg-main);
          border: 1px solid var(--border-color);
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .info-title {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .info-link, .info-val {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-primary);
          text-decoration: none;
          word-break: break-word;
          overflow-wrap: anywhere;
        }
        .info-link:hover { color: var(--accent-gold); }
        .social-block {
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-color);
        }
        .social-title {
          font-size: 0.82rem;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.65rem;
        }
        .social-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
        }

        @media (max-width: 960px) {
          .contact-grid { 
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
        @media (max-width: 768px) {
          .form-row { 
            grid-template-columns: 1fr; 
          }
        }
        @media (max-width: 600px) {
          .contact-info-box, .contact-form-box {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};
