import React, { useState } from 'react';
import { Icons } from './Icons';

export const Projects = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Laravel', 'React', 'SQL', 'Full Stack'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => {
        if (p.category && p.category.toLowerCase() === activeFilter.toLowerCase()) return true;
        if (p.technologies && p.technologies.some(t => t.toLowerCase() === activeFilter.toLowerCase())) return true;
        return false;
      });

  return (
    <section id="projects" className="section">
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

          <div className="header-right">
            <p className="header-desc">
              Explore real-world software applications built with Laravel 11 backend REST APIs, React dynamic UIs, MySQL database schemas, and modern JavaScript.
            </p>
          </div>
        </div>

        {/* Filter Row */}
        <div className="filter-row">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="clean-card project-card">
              {/* Screenshot Box */}
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
                {project.featured && (
                  <span className="featured-pill">Featured</span>
                )}
              </div>

              {/* Body */}
              <div className="project-body">
                {project.metrics && (
                  <div className="metric-badge">{project.metrics}</div>
                )}

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Tech Pills */}
                <div className="project-tech-row">
                  {project.technologies && project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
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
                    href={project.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <Icons.Github size={13} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }
        .project-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
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
        }
        .featured-pill {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 0.2rem 0.6rem;
          background: var(--accent-gold);
          color: #07090e;
          font-weight: 700;
          font-size: 0.72rem;
          border-radius: 4px;
        }
        .project-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .metric-badge {
          font-size: 0.75rem;
          color: var(--accent-gold);
          background: rgba(251, 191, 36, 0.08);
          border: 1px solid rgba(251, 191, 36, 0.2);
          padding: 0.15rem 0.55rem;
          border-radius: 4px;
          margin-bottom: 0.75rem;
          align-self: flex-start;
        }
        .project-title {
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }
        .project-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
          line-height: 1.55;
          flex: 1;
        }
        .project-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.25rem;
        }
        .tech-badge {
          font-size: 0.75rem;
          padding: 0.15rem 0.5rem;
          background: var(--bg-main);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          color: var(--text-secondary);
        }
        .project-actions {
          display: flex;
          gap: 0.65rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }
      `}</style>
    </section>
  );
};
