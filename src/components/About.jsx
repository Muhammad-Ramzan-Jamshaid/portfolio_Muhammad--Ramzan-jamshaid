import React from 'react';
import { Icons } from './Icons';

export const About = ({ personalInfo }) => {
  const coreCompetencies = [
    {
      icon: "Server",
      title: "Backend Architecture",
      desc: "Architecting enterprise RESTful APIs, MVC structure, Sanctum authentication, migrations, and background queues with Laravel."
    },
    {
      icon: "React",
      title: "Frontend Engineering",
      desc: "Creating modular React components, state management, modern ES6+ JavaScript, and responsive CSS UI layouts."
    },
    {
      icon: "Database",
      title: "SQL & Database Design",
      desc: "Designing relational schemas in MySQL & PostgreSQL, query indexing, stored procedures, and data integrity."
    },
    {
      icon: "Code",
      title: "Clean Code & Security",
      desc: "Enforcing SOLID principles, DRY standards, input sanitization, CSRF/XSS protection, and Git versioning."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Asymmetric Split Section Header (Matching Demo Layout) */}
        <div className="section-header-split">
          <div className="header-left">
            <span className="header-label">ABOUT ME</span>
            <div className="header-sub">Software Development Overview</div>
            <h2 className="header-main-title">
              Engineering <span className="highlight-gold">clean code</span> &amp; architecture
            </h2>
          </div>

          <div className="header-right">
            <p className="header-desc">
              I bring a disciplined engineering approach to every project—balancing robust backend API architecture with fluid, pixel-perfect frontend experiences.
            </p>
            <a href="#contact" className="btn btn-gold btn-sm">
              <span>Get In Touch</span>
              <Icons.ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Left Column: Bio Details */}
          <div className="clean-card about-bio-box">
            <h3 className="bio-heading">Developer Profile</h3>
            <p className="bio-text">{personalInfo.bio}</p>

            <div className="bio-details-grid">
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-val">{personalInfo.location}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Primary Stack</span>
                <span className="detail-val highlight-gold">Laravel, React, SQL</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Experience</span>
                <span className="detail-val">{personalInfo.yearsExperience}+ Years</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-val">{personalInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Core Competencies Grid */}
          <div className="competencies-grid">
            {coreCompetencies.map((comp, idx) => {
              const IconComponent = Icons[comp.icon] || Icons.Code;
              return (
                <div key={idx} className="clean-card comp-card">
                  <div className="comp-icon">
                    <IconComponent size={20} />
                  </div>
                  <h4 className="comp-title">{comp.title}</h4>
                  <p className="comp-desc">{comp.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 2.5rem;
        }
        .about-bio-box {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .bio-heading {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }
        .bio-text {
          color: var(--text-secondary);
          font-size: 0.98rem;
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        .bio-details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
        }
        .detail-item {
          display: flex;
          flex-direction: column;
        }
        .detail-label {
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .detail-val {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .competencies-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        .comp-card {
          padding: 1.5rem;
        }
        .comp-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: rgba(251, 191, 36, 0.08);
          border: 1px solid rgba(251, 191, 36, 0.2);
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .comp-title {
          font-size: 1.05rem;
          margin-bottom: 0.4rem;
        }
        .comp-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .competencies-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};
