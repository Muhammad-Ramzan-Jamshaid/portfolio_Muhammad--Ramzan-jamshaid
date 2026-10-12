import React from 'react';
import { SectionBackdrop } from './SectionBackdrop';

export const About = ({ personalInfo }) => {
  return (
    <section id="about" className="section">
      <SectionBackdrop variant="cyan" tokens={['FullStack', 'ProblemSolver', 'CleanCode', 'Laravel', '✦', 'Scalable', '0101']} />
      <div className="container">
        {/* Section Header */}
        <div className="about-header-wrapper">
          <h2 className="header-main-title">ABOUT ME</h2>
          <div className="header-sub">Software Development Overview</div>
        </div>

        {/* Bio Text without card border */}
        <div className="about-bio-frameless">
          <h3 className="bio-heading">Developer Profile &amp; Journey</h3>
          <div className="bio-descriptive-text">
            <p>
              I am <strong>{personalInfo.name}</strong>, a dedicated Full Stack Developer with over 3 years of hands-on software development experience building robust, high-performance web systems. My core expertise lies in crafting scalable backend architectures using <strong>Laravel &amp; SQL</strong>, alongside building dynamic, accessible user interfaces with <strong>React, JavaScript (ES6+), HTML5, and CSS3</strong>.
            </p>
            <p>
              Throughout my career, I have focused on writing clean, maintainable code following SOLID and DRY principles. From designing normalized MySQL database schemas to developing secure RESTful APIs with Sanctum authentication, I ensure that backend systems are optimized for sub-second response times and high concurrency.
            </p>
            <p>
              I believe in continuous learning, constantly upgrading my skill set with modern React patterns, microservices architecture, and OWASP web security best practices to build reliable software solutions that deliver exceptional user experiences.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .about-header-wrapper {
          margin-bottom: 2rem;
        }

        .about-bio-frameless {
          background: transparent;
          border: none;
          padding: 0;
          max-width: 100%;
        }
        .bio-heading {
          font-size: 1.35rem;
          margin-bottom: 1.2rem;
          color: #ffffff;
          font-weight: 700;
        }
        .bio-descriptive-text {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .bio-descriptive-text p {
          color: var(--text-secondary);
          font-size: 1.02rem;
          line-height: 1.75;
        }
      `}</style>
    </section>
  );
};


