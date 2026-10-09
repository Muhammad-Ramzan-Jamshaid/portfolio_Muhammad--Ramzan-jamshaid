import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

export const Hero = ({ personalInfo }) => {
  const codeLines = [
    { text: "<?php", cls: "c-kw" },
    { text: "", cls: "" },
    { text: "namespace App\\Http\\Controllers;", cls: "c-kw" },
    { text: "", cls: "" },
    { text: "class DeveloperProfile {", cls: "c-cls" },
    { text: "  public function getStack(): array {", cls: "c-fn" },
    { text: "    return [", cls: "c-kw" },
    { text: "      'developer' => 'Muhammad Ramzan Jamshaid',", cls: "c-str" },
    { text: "      'backend'   => 'Laravel 11 / PHP 8.3',", cls: "c-str" },
    { text: "      'frontend'  => 'React 19 / JS / HTML / CSS',", cls: "c-str" },
    { text: "      'database'  => 'SQL / MySQL',", cls: "c-str" },
    { text: "      'focus'     => 'Scalable Web Applications'", cls: "c-str" },
    { text: "    ];", cls: "c-kw" },
    { text: "  }", cls: "c-plain" },
    { text: "}", cls: "c-plain" }
  ];

  const [lineIndex, setLineIndex] = useState(1);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex > codeLines.length) return;

    const currentLine = codeLines[lineIndex - 1];
    if (!currentLine) return;

    if (charIndex < currentLine.text.length) {
      const charTimer = setTimeout(() => {
        setCharIndex(prev => prev + 1);
      }, 25);
      return () => clearTimeout(charTimer);
    } else {
      if (lineIndex < codeLines.length) {
        const lineTimer = setTimeout(() => {
          setLineIndex(prev => prev + 1);
          setCharIndex(0);
        }, 70);
        return () => clearTimeout(lineTimer);
      }
    }
  }, [lineIndex, charIndex, codeLines.length]);

  return (
    <section id="hero" className="hero-section section">
      <div className="container hero-split-grid">
        {/* Left Column: Developer Intro */}
        <div className="hero-intro-col">
          <span className="header-label">DEVELOPER PORTFOLIO</span>
          
          <h1 className="hero-name">Muhammad Ramzan Jamshaid</h1>
          <h2 className="hero-subrole">Full Stack Developer <span className="highlight-gold">(Laravel &amp; React)</span></h2>

          <p className="hero-desc">
            Specialized in building high-performance backend REST APIs with <strong>Laravel &amp; SQL</strong>, paired with dynamic, intuitive user interfaces built in <strong>React, JavaScript, HTML &amp; CSS</strong>.
          </p>

          <div className="hero-cta-buttons">
            <a href="#projects" className="btn btn-gold">
              <span>View Projects</span>
              <Icons.ExternalLink size={16} />
            </a>

            <a href="#contact" className="btn btn-secondary">
              <Icons.Mail size={16} />
              <span>Contact Me</span>
            </a>

            <a 
              href="/resume.pdf" 
              download="Muhammad_Ramzan_Jamshaid_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              title="Download PDF Resume"
            >
              <Icons.Download size={16} />
              <span>Resume / CV</span>
            </a>
          </div>
        </div>

        {/* Right Column: Animated Code Editor */}
        <div className="hero-code-col">
          <div className="code-editor clean-card">
            <div className="editor-top">
              <div className="editor-dots">
                <span className="dot-r"></span>
                <span className="dot-y"></span>
                <span className="dot-g"></span>
              </div>
              <span className="editor-filename">DeveloperProfile.php</span>
              <div className="editor-status">
                <span className="status-live-dot"></span> Live Code
              </div>
            </div>

            <div className="editor-body">
              <pre>
                <code>
                  {codeLines.slice(0, lineIndex).map((lineObj, idx) => {
                    const isCurrentLine = idx === lineIndex - 1;
                    const textContent = isCurrentLine ? lineObj.text.slice(0, charIndex) : lineObj.text;
                    return (
                      <div key={idx} className="code-line">
                        <span className="line-num">{idx + 1}</span>
                        <span className={lineObj.cls}>{textContent}</span>
                        {isCurrentLine && <span className="typing-cursor">|</span>}
                      </div>
                    );
                  })}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 4.5rem;
          padding-bottom: 4.5rem;
        }
        .hero-split-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          align-items: center;
        }
        .hero-intro-col {
          display: flex;
          flex-direction: column;
        }
        .hero-name {
          font-size: 2.6rem;
          color: #ffffff;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 0.35rem;
        }
        .hero-subrole {
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }
        .hero-desc {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.65;
          margin-bottom: 2rem;
          max-width: 580px;
        }
        .hero-cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
        }
        .code-editor {
          background: #07090e;
          border: 1px solid var(--border-color);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
          overflow: hidden;
        }
        .editor-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.65rem 1rem;
          background: #0d1117;
          border-bottom: 1px solid var(--border-color);
        }
        .editor-dots {
          display: flex;
          gap: 6px;
        }
        .editor-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot-r { background: #ef4444; }
        .dot-y { background: #f59e0b; }
        .dot-g { background: #10b981; }
        .editor-filename {
          font-family: var(--font-code);
          font-size: 0.82rem;
          color: var(--text-muted);
        }
        .editor-status {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-code);
          font-size: 0.78rem;
          color: var(--accent-gold);
        }
        .status-live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-gold);
        }
        .editor-body {
          padding: 1.25rem;
          font-family: var(--font-code);
          font-size: 0.88rem;
          line-height: 1.65;
          min-height: 330px;
          overflow-x: auto;
        }
        .code-line {
          display: flex;
          align-items: center;
        }
        .line-num {
          display: inline-block;
          width: 28px;
          color: #30363d;
          user-select: none;
          font-size: 0.8rem;
        }
        .c-kw { color: #ff7b72; }
        .c-cls { color: #79c0ff; }
        .c-fn { color: #d2a8ff; }
        .c-str { color: #a5d6ff; }
        .c-plain { color: #f0f6fc; }

        .typing-cursor {
          display: inline-block;
          color: var(--accent-gold);
          font-weight: 700;
          animation: blink 0.8s infinite;
          margin-left: 2px;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @media (max-width: 960px) {
          .hero-split-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
