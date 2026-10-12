import React, { useState } from 'react';
import { Icons } from './Icons';
import { SectionBackdrop } from './SectionBackdrop';

export const Experience = ({ experiences }) => {
  const [expandedIds, setExpandedIds] = useState({});

  const toggleExpand = (id) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Sort experiences: latest on top (Present / latest year first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const getScore = (exp) => {
      const p = (exp.period || '').toLowerCase();
      if (p.includes('present')) return 202612;
      if (p.includes('continue')) return 202601;
      const years = p.match(/\d{4}/g);
      if (years && years.length > 0) {
        return Math.max(...years.map(Number));
      }
      return 0;
    };
    return getScore(b) - getScore(a);
  });

  const getExpIcon = (exp) => {
    const text = (exp.role + ' ' + exp.company).toLowerCase();
    if (text.includes('laravel')) return <Icons.Laravel size={20} />;
    if (text.includes('marketing') || text.includes('facebook')) return <Icons.Globe size={20} />;
    if (text.includes('aws') || text.includes('organizer')) return <Icons.Server size={20} />;
    return <Icons.Briefcase size={20} />;
  };

  return (
    <section id="experience" className="section experience-section">
      <SectionBackdrop variant="gold" tokens={['Devnestic', 'Laravel 11', 'REST API', 'GCB SKP', 'AWS Club', '2+ Yrs', '✦', 'MySQL']} />
      <div className="container">
        {/* Section Header */}
        <div className="section-header-split">
          <div className="header-left">
            <h2 className="header-main-title">CAREER HISTORY</h2>
            <div className="header-sub">Professional Experience &amp; Impact</div>
          </div>
        </div>

        {/* Futuristic Timeline Architecture */}
        <div className="timeline-container">
          {/* Vertical Glowing Circuit Line (Two Colors: Gold & Cyan) */}
          <div className="timeline-spine">
            <div className="spine-glow-stream"></div>
          </div>

          <div className="timeline-cards-list">
            {sortedExperiences.map((exp, index) => {
              const cardId = exp.id || `exp-${index}`;
              const isExpanded = !!expandedIds[cardId];

              return (
                <div key={cardId} className="timeline-item group">
                  {/* Node on Timeline Spine */}
                  <div className="timeline-node">
                    <div className="node-icon-wrap">
                      {getExpIcon(exp)}
                    </div>
                  </div>

                  {/* Connected Branch Connector */}
                  <div className="timeline-branch"></div>

                  {/* Clean Experience Card (No Cluttered Badges) */}
                  <div className={`clean-card timeline-card ${isExpanded ? 'card-is-expanded' : ''}`}>
                    {/* Top Ambient Glow Ribbon */}
                    <div className="card-ambient-ribbon"></div>

                    <div className="timeline-card-content">
                      {/* Clean Header: Main Heading, Company & Duration */}
                      <div className="card-main-header">
                        <div className="role-company-group">
                          <h3 className="role-headline">{exp.role}</h3>
                          <div className="company-and-meta">
                            <span className="company-name">{exp.company}</span>
                            {exp.location && (
                              <>
                                <span className="meta-sep">•</span>
                                <span className="location-name">{exp.location}</span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Clean Duration (No Badge Box) */}
                        <div className="duration-wrapper">
                          <span className="duration-date">{exp.period}</span>
                        </div>
                      </div>

                      {/* Read More / Toggle Details Action */}
                      <div className="card-toggle-row">
                        <button
                          type="button"
                          onClick={() => toggleExpand(cardId)}
                          className="btn btn-secondary btn-sm"
                          aria-expanded={isExpanded}
                        >
                          <span>{isExpanded ? 'Hide Details' : 'Read More Details'}</span>
                          {isExpanded ? (
                            <Icons.ChevronUp size={14} />
                          ) : (
                            <Icons.ChevronDown size={14} />
                          )}
                        </button>
                      </div>

                      {/* Expandable Details Container */}
                      {isExpanded && (
                        <div className="expanded-details-container">
                          {/* Summary Description */}
                          {exp.description && (
                            <p className="card-narrative">{exp.description}</p>
                          )}

                          {/* Key Milestones / Highlights */}
                          {exp.highlights && exp.highlights.length > 0 && (
                            <div className="highlights-block">
                              <span className="highlights-title">Key Responsibilities &amp; Impact:</span>
                              <ul className="highlights-grid">
                                {exp.highlights.map((h, i) => (
                                  <li key={i} className="highlight-item">
                                    <span className="highlight-arrow">❯</span>
                                    <span className="highlight-text">{h}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .experience-section {
          position: relative;
        }

        /* Timeline Container & Spine */
        .timeline-container {
          position: relative;
          margin-top: 1.5rem;
          padding-left: 2.75rem;
        }

        .timeline-spine {
          position: absolute;
          top: 15px;
          bottom: 25px;
          left: 19px;
          width: 3px;
          background: linear-gradient(
            180deg,
            rgba(251, 191, 36, 0.7) 0%,
            rgba(56, 189, 248, 0.6) 100%
          );
          border-radius: 4px;
        }

        .spine-glow-stream {
          position: absolute;
          top: 0;
          left: -1px;
          width: 5px;
          height: 120px;
          background: linear-gradient(180deg, transparent, #fbbf24, #38bdf8, transparent);
          border-radius: 4px;
          filter: blur(1px);
          animation: laserStream 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes laserStream {
          0% { top: 0%; opacity: 0; }
          25% { opacity: 1; }
          75% { opacity: 1; }
          100% { top: 85%; opacity: 0; }
        }

        .timeline-cards-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Timeline Item Node + Branch */
        .timeline-item {
          position: relative;
        }

        .timeline-node {
          position: absolute;
          top: 22px;
          left: -2.75rem;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #0d1117;
          border: 1.5px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-gold);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
          transition: all 0.3s ease;
          z-index: 3;
        }

        .timeline-item:hover .timeline-node {
          border-color: var(--accent-gold);
          color: #ffffff;
          background: var(--bg-card);
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.4);
          transform: scale(1.06);
        }

        .node-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .timeline-branch {
          position: absolute;
          top: 41px;
          left: calc(-2.75rem + 40px);
          width: 1.25rem;
          height: 2px;
          background: linear-gradient(90deg, var(--border-color), rgba(251, 191, 36, 0.3));
          transition: background 0.3s ease;
        }

        .timeline-item:hover .timeline-branch {
          background: linear-gradient(90deg, var(--accent-gold), rgba(251, 191, 36, 0.7));
        }

        /* Clean Timeline Card */
        .timeline-card {
          position: relative;
          background: linear-gradient(135deg, rgba(17, 22, 32, 0.95) 0%, rgba(13, 17, 23, 0.92) 100%);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        }

        .timeline-card:hover {
          border-color: rgba(251, 191, 36, 0.45);
          transform: translateY(-2px);
          box-shadow: 0 14px 35px rgba(0, 0, 0, 0.5), 0 0 25px rgba(251, 191, 36, 0.1);
        }

        .card-ambient-ribbon {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, var(--accent-gold) 50%, var(--accent-cyan) 80%, transparent 100%);
          opacity: 0.35;
          transition: opacity 0.3s ease;
        }

        .timeline-card:hover .card-ambient-ribbon {
          opacity: 0.9;
        }

        .timeline-card-content {
          padding: 1.35rem 1.6rem;
        }

        /* Clean Header Layout (No Badges) */
        .card-main-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .role-company-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          flex: 1;
          min-width: 250px;
        }

        .role-headline {
          font-size: 1.28rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
        }

        .company-and-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          font-size: 0.92rem;
        }

        .company-name {
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .meta-sep {
          color: var(--text-muted);
        }

        .location-name {
          color: var(--text-secondary);
          font-size: 0.86rem;
        }

        .duration-wrapper {
          display: flex;
          align-items: center;
        }

        .duration-date {
          font-family: var(--font-code);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--accent-gold);
          letter-spacing: 0.3px;
        }

        /* Read More Button Action */
        .card-toggle-row {
          margin-top: 0.9rem;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }


        /* Expanded Details Area */
        .expanded-details-container {
          margin-top: 1.15rem;
          padding-top: 1.1rem;
          border-top: 1px dashed rgba(255, 255, 255, 0.08);
          animation: fadeInSlide 0.25s ease-out;
        }

        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Narrative */
        .card-narrative {
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 1.1rem;
        }

        /* Highlights */
        .highlights-block {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
          margin-bottom: 0.5rem;
        }

        .highlights-title {
          font-family: var(--font-code);
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.6px;
          display: block;
          margin-bottom: 0.7rem;
        }

        .highlights-grid {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          font-size: 0.88rem;
          color: #e2e8f0;
          line-height: 1.5;
        }

        .highlight-arrow {
          color: var(--accent-gold);
          font-weight: 800;
          font-size: 0.85rem;
          margin-top: 1px;
          flex-shrink: 0;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .timeline-container {
            padding-left: 2rem;
          }
          .timeline-spine {
            left: 11px;
          }
          .timeline-node {
            left: -2rem;
            width: 32px;
            height: 32px;
            border-radius: 8px;
            top: 18px;
          }
          .timeline-branch {
            display: none;
          }
          .timeline-card-content {
            padding: 1.15rem 1.15rem;
          }
          .role-headline {
            font-size: 1.1rem;
          }
          .card-main-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};
