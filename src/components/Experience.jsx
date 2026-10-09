import React from 'react';
import { Icons } from './Icons';

export const Experience = ({ experiences }) => {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Asymmetric Split Section Header */}
        <div className="section-header-split">
          <div className="header-left">
            <span className="header-label">CAREER HISTORY</span>
            <div className="header-sub">Professional Experience</div>
            <h2 className="header-main-title">
              Proven track record <span className="highlight-gold">building systems</span>
            </h2>
          </div>

          <div className="header-right">
            {/* Top-right text removed */}
          </div>
        </div>

        {/* Experience Cards Timeline List */}
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="clean-card exp-card-upgraded">
              {/* Left Accent Indicator */}
              <div className="exp-card-left-bar"></div>

              <div className="exp-card-inner">
                {/* Header Row: Role & Company + Period Tag */}
                <div className="exp-header-row">
                  <div className="exp-role-info">
                    <h3 className="exp-role-title">{exp.role}</h3>
                    <div className="exp-company-details">
                      <span className="exp-company-name">{exp.company}</span>
                      <span className="exp-dot-sep">•</span>
                      <span className="exp-location-tag">{exp.location}</span>
                    </div>
                  </div>

                  <div className="exp-period-badge">
                    <Icons.Briefcase size={13} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="exp-description">{exp.description}</p>

                {/* Bullet Highlights */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="exp-highlights-list">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>
                        <Icons.Check size={14} className="highlight-icon" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack Pills */}
                {exp.technologies && (
                  <div className="exp-tech-footer">
                    <span className="tech-label">Stack Used:</span>
                    <div className="tech-badges-wrap">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="exp-tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-timeline {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .exp-card-upgraded {
          position: relative;
          padding: 0;
          overflow: hidden;
          display: flex;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          transition: all 0.3s ease;
        }
        .exp-card-upgraded:hover {
          border-color: var(--accent-gold);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .exp-card-left-bar {
          width: 5px;
          background: linear-gradient(180deg, var(--accent-gold) 0%, rgba(251, 191, 36, 0.2) 100%);
          flex-shrink: 0;
        }
        .exp-card-inner {
          padding: 1.75rem 2rem;
          flex: 1;
        }
        .exp-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.1rem;
        }
        .exp-role-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }
        .exp-company-details {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.92rem;
        }
        .exp-company-name {
          color: var(--accent-gold);
          font-weight: 600;
        }
        .exp-dot-sep {
          color: var(--text-muted);
        }
        .exp-location-tag {
          color: var(--text-secondary);
        }
        .exp-period-badge {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.35rem 0.85rem;
          background: rgba(251, 191, 36, 0.08);
          border: 1px solid rgba(251, 191, 36, 0.25);
          border-radius: var(--radius-sm);
          font-family: var(--font-code);
          font-size: 0.82rem;
          color: var(--accent-gold);
          font-weight: 600;
        }
        .exp-description {
          color: var(--text-secondary);
          font-size: 0.96rem;
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }
        .exp-highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          margin-bottom: 1.5rem;
        }
        .exp-highlights-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .highlight-icon {
          color: var(--accent-gold);
          margin-top: 3px;
          flex-shrink: 0;
        }
        .exp-tech-footer {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-top: 1.1rem;
          border-top: 1px solid var(--border-color);
          flex-wrap: wrap;
        }
        .tech-label {
          font-size: 0.8rem;
          font-family: var(--font-code);
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .tech-badges-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .exp-tech-pill {
          padding: 0.2rem 0.65rem;
          background: var(--bg-main);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          font-size: 0.78rem;
          color: #ffffff;
          font-family: var(--font-code);
        }

        @media (max-width: 650px) {
          .exp-card-inner {
            padding: 1.25rem 1.25rem;
          }
          .exp-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};
