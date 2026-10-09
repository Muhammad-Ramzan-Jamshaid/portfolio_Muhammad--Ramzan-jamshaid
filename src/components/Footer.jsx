import React from 'react';
import { Icons } from './Icons';

export const Footer = ({ personalInfo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Left Column: 4-5 lines developer intro */}
          <div className="footer-col footer-intro-col">
            <h3 className="footer-brand">Muhammad Ramzan Jamshaid</h3>
            <p className="footer-bio">
              Full Stack Developer specializing in crafting scalable backend REST APIs using <strong>Laravel &amp; SQL</strong> databases. Dedicated to building responsive, intuitive, and dynamic frontend user interfaces with <strong>React, JavaScript, HTML5 &amp; CSS3</strong>. Focused on clean architecture, performance, and modern web solutions.
            </p>
          </div>

          {/* Middle Column: Services */}
          <div className="footer-col">
            <h4 className="footer-title">Services &amp; Stack</h4>
            <ul className="footer-list">
              <li><a href="#expertise">Laravel Backend API Development</a></li>
              <li><a href="#expertise">React Single Page Applications</a></li>
              <li><a href="#expertise">SQL Database Architecture &amp; Tuning</a></li>
              <li><a href="#expertise">RESTful API Design &amp; Authentication</a></li>
              <li><a href="#expertise">Full Stack Web Engineering</a></li>
            </ul>
          </div>

          {/* Right Column: Contact Details */}
          <div className="footer-col">
            <h4 className="footer-title">Contact Info</h4>
            <div className="footer-contact-details">
              <p className="contact-detail-line">
                <span className="detail-label">Email:</span>
                <a href={`mailto:${personalInfo.email}`} className="detail-link">{personalInfo.email}</a>
              </p>
              <p className="contact-detail-line">
                <span className="detail-label">Location:</span>
                <span className="detail-val">{personalInfo.location}</span>
              </p>
              <p className="contact-detail-line">
                <span className="detail-label">Status:</span>
                <span className="detail-val highlight-gold">{personalInfo.status || 'Available for Freelance & Roles'}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Row: GitHub & LinkedIn Buttons + Copyright + Scroll Top */}
        <div className="footer-bottom">
          <div className="footer-social-logos">
            <a
              href={personalInfo.github || "https://github.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="social-logo-btn"
              title="GitHub Profile"
            >
              <Icons.Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin || "https://linkedin.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="social-logo-btn"
              title="LinkedIn Profile"
            >
              <Icons.Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>

          <p className="footer-copyright">
            © {new Date().getFullYear()} <strong>{personalInfo.name}</strong>. All rights reserved.
          </p>

          <button onClick={scrollToTop} className="top-btn" title="Back to top">
            <span>Back to top</span>
            <Icons.Plus size={13} style={{ transform: 'rotate(45deg)' }} />
          </button>
        </div>
      </div>

      <style>{`
        .footer {
          background: #05070b;
          border-top: 1px solid var(--border-color);
          padding: 4rem 0 2rem 0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.8fr 1.1fr 1.1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        .footer-brand {
          font-size: 1.3rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        .footer-bio {
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.7;
          max-width: 520px;
        }
        .footer-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.2rem;
        }
        .footer-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .footer-list a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.88rem;
          transition: color 0.2s ease;
        }
        .footer-list a:hover {
          color: var(--accent-gold);
        }
        .footer-contact-details {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .contact-detail-line {
          font-size: 0.88rem;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .detail-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .detail-link, .detail-val {
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
        }
        .detail-link:hover {
          color: var(--accent-gold);
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .footer-social-logos {
          display: flex;
          gap: 0.85rem;
        }
        .social-logo-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 1rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .social-logo-btn:hover {
          border-color: var(--accent-gold);
          color: var(--accent-gold);
          background: var(--bg-card-hover);
        }
        .footer-copyright {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .top-btn {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.45rem 1rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          font-size: 0.82rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        .top-btn:hover {
          border-color: var(--accent-gold);
          color: var(--accent-gold);
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
};
