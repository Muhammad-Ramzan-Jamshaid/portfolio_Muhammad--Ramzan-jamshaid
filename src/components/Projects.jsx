import React, { useState } from 'react';
import { Icons } from './Icons';
import { SectionBackdrop } from './SectionBackdrop';

export const Projects = ({ projects }) => {
  const [showModal, setShowModal] = useState(false);

  // Show top 3 latest projects on homepage view
  const homeDisplayProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="section">
      <SectionBackdrop variant="purple" tokens={['SmartAuto', 'EventManager', 'BootstrapUI', 'GitPush', 'Production', '✦', 'FullStack']} />
      <div className="container">
        {/* Asymmetric Split Section Header */}
        <div className="section-header-split">
          <div className="header-left">
            <span className="header-label">FEATURED WORKS</span>
            <div className="header-sub">Check My Portfolio</div>
            <h2 className="header-main-title">
              Innovative <span className="highlight-gold">web applications</span> &amp; systems
            </h2>
          </div>

          <div className="header-right" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <button
              onClick={() => setShowModal(true)}
              className="btn btn-gold btn-lg"
            >
              <span>Show All Projects</span>
              <Icons.ExternalLink size={15} />
            </button>
          </div>
        </div>

        {/* Homepage Projects Cards Grid (Top 3 Latest) */}
        <div className="projects-grid">
          {homeDisplayProjects.map((project) => (
            <div key={project.id} className="clean-card project-card">
              {/* Project Image Banner */}
              <div className="project-img-box">
                <img
                  src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"}
                  alt={project.title}
                  className="project-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>

              {/* Body: Project Name & Description */}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Action Links: Live Demo & Source Code */}
                <div className="project-actions">
                  <a
                    href={project.liveUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold btn-sm"
                    title="Live Demo"
                  >
                    <span>Live Demo</span>
                    <Icons.ExternalLink size={13} />
                  </a>

                  <a
                    href={project.githubUrl || "https://github.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    title="Source Code Repository"
                  >
                    <Icons.Github size={13} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULL PROJECTS MODAL PAGE */}
      {showModal && (
        <div className="project-modal-overlay">
          <div className="project-modal-container">
            {/* Modal Header */}
            <div className="project-modal-header">
              <div>
                <span className="header-label">ALL PROJECTS</span>
                <h2 className="project-modal-title">
                  All Web Applications &amp; <span className="highlight-gold">Systems</span>
                </h2>
              </div>
              <button onClick={() => setShowModal(false)} className="btn btn-secondary">
                <Icons.X size={18} />
                <span>Close</span>
              </button>
            </div>

            {/* Modal Projects List (Horizontal Layout matching Certificates page) */}
            <div className="project-modal-list">
              {projects.map((project) => (
                <div key={project.id} className="clean-card project-horizontal-card">
                  {/* Left Content Column */}
                  <div className="project-horiz-left">
                    <h3 className="project-horiz-title">{project.title}</h3>

                    <div className="project-meta-line">
                      <span className="meta-category">{project.category || 'Full Stack'}</span>
                      {project.metrics && (
                        <>
                          <span className="meta-sep">•</span>
                          <span className="meta-metrics">{project.metrics}</span>
                        </>
                      )}
                    </div>

                    <p className="project-horiz-desc">{project.description}</p>
                    
                    {/* Technologies Pills */}
                    {project.technologies && (
                      <div className="project-horiz-techs">
                        {project.technologies.map((t) => (
                          <span key={t} className="project-tech-pill">{t}</span>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="project-actions" style={{ marginTop: 'auto', paddingTop: '1.25rem' }}>
                      <a
                        href={project.liveUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-gold btn-sm"
                      >
                        <span>Live Demo</span>
                        <Icons.ExternalLink size={13} />
                      </a>
                      <a
                        href={project.githubUrl || "https://github.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        <Icons.Github size={13} />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Image Column */}
                  <div className="project-horiz-right">
                    <img
                      src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"}
                      alt={project.title}
                      className="project-horiz-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
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
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.75rem;
        }
        .project-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .project-img-box {
          position: relative;
          height: 185px;
          background: var(--bg-main);
          overflow: hidden;
          border-bottom: 1px solid var(--border-color);
        }
        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .project-card:hover .project-img {
          transform: scale(1.05);
        }
        .project-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .project-title {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }
        .project-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
          flex: 1;
        }
        .project-actions {
          display: flex;
          gap: 0.65rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        /* Modal Overlay & Horizontal Project Layout */
        .project-modal-overlay {
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
        .project-modal-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        .project-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }
        .project-modal-title {
          font-size: 2.2rem;
          color: #ffffff;
          margin-top: 0.2rem;
        }
        .project-modal-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .project-horizontal-card {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr;
          gap: 2rem;
          padding: 2.2rem;
          align-items: center;
        }
        .project-horiz-left {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .project-horiz-title {
          font-size: 1.6rem;
          color: #ffffff;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }
        .project-meta-line {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--accent-gold);
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .meta-sep { color: var(--text-muted); }
        .project-horiz-desc {
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }
        .project-horiz-techs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-bottom: 1rem;
        }
        .project-tech-pill {
          padding: 0.2rem 0.65rem;
          background: var(--bg-main);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          font-size: 0.78rem;
          color: #ffffff;
          font-family: var(--font-code);
        }
        .project-horiz-right {
          height: 260px;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border-color);
        }
        .project-horiz-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .project-horizontal-card:hover .project-horiz-img {
          transform: scale(1.03);
        }

        @media (max-width: 850px) {
          .project-horizontal-card {
            grid-template-columns: 1fr;
            padding: 1.5rem;
          }
          .project-horiz-right {
            height: 200px;
          }
          .project-modal-overlay {
            padding: 1.5rem 1rem;
          }
          .project-modal-title {
            font-size: 1.6rem;
          }
        }
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .project-horiz-title {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  );
};
