import React from 'react';
import { Icons } from './Icons';
import { SectionBackdrop } from './SectionBackdrop';

export const Experience = ({ experiences }) => {
  const getExpIcon = (exp) => {
    const text = (exp.role + ' ' + exp.company).toLowerCase();
    if (text.includes('laravel')) return <Icons.Laravel size={22} />;
    if (text.includes('marketing') || text.includes('facebook')) return <Icons.Globe size={22} />;
    if (text.includes('aws') || text.includes('organizer')) return <Icons.Server size={22} />;
    return <Icons.Briefcase size={22} />;
  };

  const getExpTag = (exp) => {
    if (exp.period?.toLowerCase().includes('present')) {
      return { label: 'Active Role', isLive: true, color: 'tag-emerald' };
    }
    if (exp.role?.toLowerCase().includes('intern')) {
      return { label: 'Engineering Internship', isLive: false, color: 'tag-gold' };
    }
    return { label: 'Professional Role', isLive: false, color: 'tag-cyan' };
  };

  return (
    <section id="experience" className="section experience-section">
      <SectionBackdrop variant="amber" tokens={['Devnestic', 'Laravel 11', 'REST API', 'GCB SKP', 'AWS Club', '2+ Yrs', '✦', 'MySQL']} />
      <div className="container">
        {/* Asymmetric Split Section Header */}
        <div className="section-header-split">
          <div className="header-left">
            <span className="header-label">CAREER HISTORY</span>
            <div className="header-sub">Professional Experience &amp; Impact</div>
            <h2 className="header-main-title">
              Engineering <span className="highlight-gold">real-world solutions</span>
            </h2>
          </div>


        </div>

        {/* Iconic Futuristic Timeline Architecture */}
        <div className="timeline-container">
          {/* Vertical Glowing Circuit Line */}
          <div className="timeline-spine">
            <div className="spine-glow-stream"></div>
          </div>

          <div className="timeline-cards-list">
            {experiences.map((exp, index) => {
              const tagInfo = getExpTag(exp);

              return (
                <div key={exp.id || index} className="timeline-item group">
                  {/* Glowing Node on Timeline Spine */}
                  <div className={`timeline-node ${tagInfo.isLive ? 'node-live' : ''}`}>
                    <div className="node-icon-wrap">
                      {getExpIcon(exp)}
                    </div>
                    {tagInfo.isLive && <span className="live-radar-ping"></span>}
                  </div>

                  {/* Connected Branch Connector */}
                  <div className="timeline-branch"></div>

                  {/* Iconic Experience Card */}
                  <div className="clean-card timeline-card">
                    {/* Top Ambient Glow Ribbon */}
                    <div className="card-ambient-ribbon"></div>

                    <div className="timeline-card-content">
                      {/* Top Header Row */}
                      <div className="card-top-header">
                        <div className="role-and-company">
                          <div className="role-meta-row">
                            <span className={`exp-type-tag ${tagInfo.color}`}>
                              {tagInfo.isLive && <span className="live-dot-pulse"></span>}
                              {tagInfo.label}
                            </span>
                            <span className="company-badge-pill">
                              <Icons.Briefcase size={12} />
                              {exp.company}
                            </span>
                          </div>

                          <h3 className="role-headline">{exp.role}</h3>
                        </div>

                        {/* Period & Location Badge */}
                        <div className="period-location-badge">
                          <div className="period-time">
                            <Icons.Sparkles size={13} className="sparkle-icon" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="location-time">
                            <Icons.Globe size={12} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Summary Description */}
                      <p className="card-narrative">{exp.description}</p>

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
            rgba(251, 191, 36, 0.6) 0%,
            rgba(56, 189, 248, 0.4) 50%,
            rgba(16, 185, 129, 0.2) 100%
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
          gap: 2.5rem;
        }

        /* Timeline Item Node + Branch */
        .timeline-item {
          position: relative;
        }

        .timeline-node {
          position: absolute;
          top: 26px;
          left: -2.75rem;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: #0d1117;
          border: 2px solid var(--border-color);
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
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
          transform: scale(1.08);
        }

        .node-live {
          border-color: var(--accent-emerald) !important;
          color: var(--accent-emerald) !important;
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.35);
        }

        .live-radar-ping {
          position: absolute;
          inset: -4px;
          border-radius: 14px;
          border: 2px solid var(--accent-emerald);
          animation: radarPing 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          opacity: 0.6;
        }

        @keyframes radarPing {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.45); opacity: 0; }
        }

        .node-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .timeline-branch {
          position: absolute;
          top: 45px;
          left: calc(-2.75rem + 42px);
          width: 1.25rem;
          height: 2px;
          background: linear-gradient(90deg, var(--border-color), rgba(251, 191, 36, 0.4));
          transition: background 0.3s ease;
        }

        .timeline-item:hover .timeline-branch {
          background: linear-gradient(90deg, var(--accent-gold), rgba(251, 191, 36, 0.8));
        }

        /* Timeline Card */
        .timeline-card {
          position: relative;
          background: linear-gradient(135deg, rgba(17, 22, 32, 0.95) 0%, rgba(13, 17, 23, 0.92) 100%);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .timeline-card:hover {
          border-color: rgba(251, 191, 36, 0.5);
          transform: translateY(-4px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6), 0 0 30px rgba(251, 191, 36, 0.12);
        }

        .card-ambient-ribbon {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, var(--accent-gold) 50%, transparent 100%);
          opacity: 0.35;
          transition: opacity 0.3s ease;
        }

        .timeline-card:hover .card-ambient-ribbon {
          opacity: 1;
        }

        .timeline-card-content {
          padding: 2rem 2.25rem;
        }

        /* Top Header Row */
        .card-top-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .role-and-company {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .role-meta-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.65rem;
        }

        .exp-type-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-code);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .tag-gold {
          background: rgba(251, 191, 36, 0.12);
          border: 1px solid rgba(251, 191, 36, 0.3);
          color: var(--accent-gold);
        }

        .tag-emerald {
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: var(--accent-emerald);
        }

        .tag-cyan {
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: var(--accent-cyan);
        }

        .live-dot-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-emerald);
          box-shadow: 0 0 8px var(--accent-emerald);
          animation: dotBlink 1.5s infinite;
        }

        @keyframes dotBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .company-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.82rem;
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-weight: 600;
        }

        .role-headline {
          font-size: 1.45rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }

        .period-location-badge {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.35rem;
        }

        .period-time {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.35rem 0.85rem;
          background: rgba(251, 191, 36, 0.08);
          border: 1px solid rgba(251, 191, 36, 0.25);
          border-radius: var(--radius-sm);
          font-family: var(--font-code);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent-gold);
        }

        .sparkle-icon {
          color: var(--accent-gold);
        }

        .location-time {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        /* Narrative */
        .card-narrative {
          color: var(--text-secondary);
          font-size: 0.98rem;
          line-height: 1.65;
          margin-bottom: 1.35rem;
        }

        /* Highlights */
        .highlights-block {
          background: rgba(7, 9, 14, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-md);
          padding: 1.25rem 1.5rem;
          margin-bottom: 1.5rem;
        }

        .highlights-title {
          font-family: var(--font-code);
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.75px;
          display: block;
          margin-bottom: 0.85rem;
        }

        .highlights-grid {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.92rem;
          color: #e2e8f0;
          line-height: 1.5;
        }

        .highlight-arrow {
          color: var(--accent-gold);
          font-weight: 800;
          font-size: 0.9rem;
          margin-top: 1px;
          flex-shrink: 0;
        }

        /* Tech Footer */
        .card-tech-footer {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-color);
          flex-wrap: wrap;
        }

        .tech-footer-label {
          font-family: var(--font-code);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .tech-pills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-cyber-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.2rem;
          padding: 0.25rem 0.7rem;
          background: rgba(13, 17, 23, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 6px;
          font-family: var(--font-code);
          font-size: 0.78rem;
          color: #f1f5f9;
          transition: all 0.2s ease;
        }

        .tech-cyber-pill:hover {
          border-color: var(--accent-gold);
          color: var(--accent-gold);
          background: rgba(251, 191, 36, 0.08);
          transform: translateY(-1px);
        }

        .hash-sign {
          color: var(--accent-gold);
          font-weight: 700;
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
            top: 20px;
          }
          .timeline-branch {
            display: none;
          }
          .timeline-card-content {
            padding: 1.4rem;
          }
          .role-headline {
            font-size: 1.2rem;
          }
          .card-top-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .period-location-badge {
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};
