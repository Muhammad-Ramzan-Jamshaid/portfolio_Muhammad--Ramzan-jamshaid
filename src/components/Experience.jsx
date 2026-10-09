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
            <p className="header-desc">
              Over 3 years of hands-on software development experience creating scalable backend web services and dynamic React applications.
            </p>
          </div>
        </div>

        {/* Experience Cards List */}
        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="clean-card exp-card">
              <div className="exp-top-row">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company-row">
                    <span className="exp-company">{exp.company}</span>
                    <span className="exp-sep">•</span>
                    <span className="exp-loc">{exp.location}</span>
                  </div>
                </div>
                <div className="exp-period">{exp.period}</div>
              </div>

              <p className="exp-desc">{exp.description}</p>

              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="exp-bullets">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>
                      <Icons.Check size={14} className="bullet-icon" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              {exp.technologies && (
                <div className="exp-tags">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .exp-card {
          padding: 1.75rem;
          position: relative;
        }
        .exp-top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .exp-role {
          font-size: 1.2rem;
          color: #ffffff;
        }
        .exp-company-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.9rem;
          color: var(--accent-gold);
          margin-top: 0.15rem;
        }
        .exp-sep { color: var(--text-muted); }
        .exp-loc { color: var(--text-secondary); }
        .exp-period {
          padding: 0.25rem 0.75rem;
          background: var(--bg-main);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .exp-desc {
          color: var(--text-secondary);
          font-size: 0.94rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        .exp-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 1.2rem;
        }
        .exp-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }
        .bullet-icon {
          color: var(--accent-gold);
          margin-top: 3px;
          flex-shrink: 0;
        }
        .exp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }
      `}</style>
    </section>
  );
};
