import React, { useState } from 'react';
import { Icons } from './Icons';
import { SectionBackdrop } from './SectionBackdrop';

export const Skills = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Backend', 'Frontend', 'Database', 'Tools'];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="expertise" className="section">
      <SectionBackdrop variant="cyan" tokens={['PHP', 'React', 'MySQL', 'Docker', 'Git', 'Bootstrap', 'AWS', '✦']} />
      <div className="container">
        {/* Section Header */}
        <div className="section-header-split">
          <div className="header-left">
            <h2 className="header-main-title">TECHNICAL EXPERTISE</h2>
            <div className="header-sub">Frameworks &amp; Languages</div>
          </div>
        </div>

        {/* Filter Category Row */}
        <div className="filter-row">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => {
            const IconComponent = Icons[skill.icon] || Icons.Code;
            return (
              <div key={skill.id} className="clean-card skill-card">
                <div className="skill-card-top">
                  <div className="skill-icon">
                    <IconComponent size={20} />
                  </div>
                  <div className="skill-meta">
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-sub">{skill.category} • {skill.years}</span>
                  </div>
                  <div className="skill-percent">{skill.level}%</div>
                </div>

                {/* Progress Bar */}
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .filter-row {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          padding: 0.45rem 1.1rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          font-family: inherit;
          font-size: 0.88rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .filter-btn:hover, .filter-btn.active {
          border-color: var(--accent-gold);
          color: var(--accent-gold);
          background: var(--bg-card-hover);
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.25rem;
        }
        .skill-card {
          padding: 1.25rem;
          position: relative;
        }
        .skill-card-top {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1rem;
        }
        .skill-icon {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background: var(--bg-main);
          border: 1px solid var(--border-color);
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .skill-meta { flex: 1; }
        .skill-name { font-size: 0.98rem; margin-bottom: 0.1rem; }
        .skill-sub { font-size: 0.75rem; color: var(--text-muted); }
        .skill-percent {
          font-family: var(--font-code);
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--accent-gold);
        }
        .progress-track {
          width: 100%;
          height: 5px;
          background: var(--bg-main);
          border-radius: 3px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: var(--accent-gold);
          border-radius: 3px;
        }
      `}</style>
    </section>
  );
};
