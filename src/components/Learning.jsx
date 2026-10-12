import React, { useState } from 'react';
import { Icons } from './Icons';
import { SectionBackdrop } from './SectionBackdrop';

export const Learning = ({ learning }) => {
  const [showModal, setShowModal] = useState(false);

  // Show only latest 3 on homepage default
  const homeDisplayLearning = learning.slice(0, 3);

  return (
    <section id="learning" className="section learning-section-view">
      <SectionBackdrop variant="cyan" tokens={['AWS Builder', 'Laravel Dev', 'DevOps', 'Cloud', 'Certified', '✦', 'ContinuousGrowth']} />
      <div className="container">
        {/* Section Header */}
        <div className="section-header-split" style={{ marginBottom: '1.75rem' }}>
          <div className="header-left">
            <h2 className="header-main-title">CONTINUOUS GROWTH</h2>
            <div className="header-sub">Certifications &amp; Courses</div>
          </div>

          <div className="header-right" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <button
              onClick={() => setShowModal(true)}
              className="btn btn-gold btn-lg"
            >
              <span>Show All Certificates</span>
              <Icons.ExternalLink size={16} />
            </button>
          </div>
        </div>

        {/* Homepage Display Grid (Fits 100% in Screen View) */}
        <div className="learning-grid">
          {homeDisplayLearning.map((item) => (
            <div key={item.id} className="clean-card learning-card">
              {/* Certificate Image Banner */}
              <div className="cert-img-box">
                <img
                  src={item.image || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"}
                  alt={item.title}
                  className="cert-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>

              {/* Card Body */}
              <div className="cert-card-body">
                <div className="cert-meta-line">
                  <span className="meta-date">Issue Date: {item.date}</span>
                  <span className="meta-sep">•</span>
                  <span className="meta-duration">Duration: {item.duration || '3 Months'}</span>
                </div>

                <h3 className="cert-title">{item.title}</h3>
                <div className="cert-issuer">{item.issuer}</div>
                <p className="cert-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULL CERTIFICATES MODAL PAGE */}
      {showModal && (
        <div className="cert-modal-overlay">
          <div className="cert-modal-container">
            {/* Modal Header */}
            <div className="cert-modal-header">
              <div>
                <span className="header-label">ALL CERTIFICATIONS</span>
                <h2 className="cert-modal-title">
                  All Professional <span className="highlight-gold">Certificates &amp; Courses</span>
                </h2>
              </div>
              <button onClick={() => setShowModal(false)} className="btn btn-secondary">
                <Icons.X size={18} />
                <span>Close</span>
              </button>
            </div>

            {/* Modal Certificate Cards List (Horizontal Layout Matching Screenshot) */}
            <div className="cert-modal-list">
              {learning.map((item) => (
                <div key={item.id} className="clean-card cert-horizontal-card">
                  {/* Left Content Column */}
                  <div className="cert-horiz-left">
                    <h3 className="cert-horiz-title">{item.title}</h3>

                    <div className="cert-meta-line" style={{ marginBottom: '1rem' }}>
                      <span>Issue Date: {item.date}</span>
                      <span className="meta-sep">•</span>
                      <span>Duration: {item.duration || '3 Months'}</span>
                      <span className="meta-sep">•</span>
                      <span style={{ color: 'var(--text-muted)' }}>{item.issuer}</span>
                    </div>

                    <p className="cert-horiz-desc">{item.description}</p>
                    <p className="cert-horiz-subdesc">
                      Verified professional qualification covering domain best practices, clean architecture, and technical implementation.
                    </p>

                    {/* Small Issuer Avatar / Icon at bottom-left */}
                    <div className="cert-issuer-badge">
                      <div className="issuer-avatar">MRJ</div>
                      <span className="issuer-label">{item.issuer}</span>
                    </div>
                  </div>

                  {/* Right Image Column */}
                  <div className="cert-horiz-right">
                    <img
                      src={item.image || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"}
                      alt={item.title}
                      className="cert-horiz-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .learning-section-view {
          padding-top: 3.5rem;
          padding-bottom: 3.5rem;
        }
        .learning-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .learning-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .cert-img-box {
          position: relative;
          height: 145px;
          background: var(--bg-main);
          overflow: hidden;
          border-bottom: 1px solid var(--border-color);
        }
        .cert-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .learning-card:hover .cert-img {
          transform: scale(1.05);
        }
        .cert-card-body {
          padding: 1.1rem 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .cert-meta-line {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          color: var(--accent-gold);
          margin-bottom: 0.4rem;
          font-weight: 600;
          flex-wrap: wrap;
        }
        .meta-sep { color: var(--text-muted); }
        .cert-title {
          font-size: 1.05rem;
          color: #ffffff;
          margin-bottom: 0.2rem;
          line-height: 1.3;
        }
        .cert-issuer {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.6rem;
        }
        .cert-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Modal Overlay & Horizontal Layout */
        .cert-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(7, 9, 14, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          overflow-y: auto;
          padding: 2.5rem 1.5rem;
        }
        .cert-modal-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        .cert-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-center;
          margin-bottom: 2.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }
        .cert-modal-title {
          font-size: 2.2rem;
          color: #ffffff;
          margin-top: 0.2rem;
        }
        .cert-modal-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .cert-horizontal-card {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr;
          gap: 2rem;
          padding: 2.2rem;
          align-items: center;
        }
        .cert-horiz-left {
          display: flex;
          flex-direction: column;
        }
        .cert-horiz-title {
          font-size: 1.6rem;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        .cert-horiz-desc {
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1rem;
        }
        .cert-horiz-subdesc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.8rem;
        }
        .cert-issuer-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .issuer-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--accent-gold);
          color: #07090e;
          font-weight: 800;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .issuer-label {
          font-size: 0.95rem;
          font-weight: 600;
          color: #ffffff;
        }
        .cert-horiz-right {
          height: 250px;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border-color);
        }
        .cert-horiz-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 850px) {
          .cert-horizontal-card {
            grid-template-columns: 1fr;
          }
          .cert-horiz-right {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};
