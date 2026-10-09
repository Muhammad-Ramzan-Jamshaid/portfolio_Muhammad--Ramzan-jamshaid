import React from 'react';
import { Icons } from './Icons';

export const Learning = ({ learning }) => {
  return (
    <section id="learning" className="section">
      <div className="container">
        {/* Asymmetric Split Section Header */}
        <div className="section-header-split">
          <div className="header-left">
            <span className="header-label">CONTINUOUS GROWTH</span>
            <div className="header-sub">Learning &amp; Certifications</div>
            <h2 className="header-main-title">
              Upgrading skills &amp; <span className="highlight-gold">modern practices</span>
            </h2>
          </div>

          <div className="header-right">
            <p className="header-desc">
              Dedicated to continuous professional growth through certifications, advanced architecture studies, and staying updated with ecosystem changes in Laravel and React.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="learning-grid">
          {learning.map((item) => {
            const isCompleted = item.status && item.status.toLowerCase().includes('completed');
            return (
              <div key={item.id} className="clean-card learning-card">
                <div className="learn-top-row">
                  <span className="type-tag">{item.type || 'Certification'}</span>
                  <span className={`status-badge ${isCompleted ? 'comp' : 'prog'}`}>
                    {item.status || 'Completed'}
                  </span>
                </div>

                <h3 className="learn-title">{item.title}</h3>

                <div className="learn-issuer">
                  <span>{item.issuer}</span>
                  <span className="sep">•</span>
                  <span>{item.date}</span>
                </div>

                <p className="learn-desc">{item.description}</p>

                {item.tags && (
                  <div className="learn-tags">
                    {item.tags.map((t) => (
                      <span key={t} className="badge">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .learning-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }
        .learning-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .learn-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .type-tag {
          font-size: 0.78rem;
          color: var(--accent-gold);
          font-weight: 600;
        }
        .status-badge {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.15rem 0.55rem;
          border-radius: 4px;
        }
        .status-badge.comp {
          background: rgba(16, 185, 129, 0.1);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.25);
        }
        .status-badge.prog {
          background: rgba(245, 158, 11, 0.1);
          color: #fbbf24;
          border: 1px solid rgba(245, 158, 11, 0.25);
        }
        .learn-title {
          font-size: 1.1rem;
          margin-bottom: 0.4rem;
          color: #ffffff;
        }
        .learn-issuer {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.85rem;
        }
        .sep { color: var(--text-muted); }
        .learn-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.25rem;
          flex: 1;
        }
        .learn-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          padding-top: 0.85rem;
          border-top: 1px solid var(--border-color);
        }
      `}</style>
    </section>
  );
};
