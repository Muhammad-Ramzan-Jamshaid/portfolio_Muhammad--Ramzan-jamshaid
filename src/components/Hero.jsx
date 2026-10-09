import React, { useState, useEffect } from 'react';

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
        {/* Left Column: Profile Image & Developer Intro */}
        <div className="hero-intro-col">
          {/* Profile Photo Avatar Frame */}
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-frame">
              <img
                src={personalInfo.avatar || "/profile.jpg"}
                alt={personalInfo.name}
                className="hero-avatar-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
          </div>

          <span className="header-label" style={{ marginTop: '0.8rem' }}>DEVELOPER PORTFOLIO</span>

          <h1 className="hero-name">Muhammad Ramzan Jamshaid</h1>
          <h2 className="hero-subrole">Full Stack Developer <span className="highlight-gold">(Laravel &amp; React)</span></h2>

          <p className="hero-desc">
            Specialized in building high-performance backend REST APIs with <strong>Laravel &amp; SQL</strong>, paired with dynamic, intuitive user interfaces built in <strong>React, JavaScript, HTML &amp; CSS</strong>.
          </p>
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
          align-items: flex-start;
        }

        /* Profile Avatar Frame */
        .hero-avatar-wrapper {
          position: relative;
          display: inline-block;
          margin-bottom: 0.85rem;
        }
        .hero-avatar-frame {
          width: 135px;
          height: 135px;
          border-radius: 50%;
          padding: 4px;
          background: linear-gradient(135deg, var(--accent-gold) 0%, rgba(251, 191, 36, 0.25) 100%);
          box-shadow: 0 10px 30px rgba(251, 191, 36, 0.25);
          overflow: hidden;
        }
        .hero-avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          background: var(--bg-card);
        }
        .hero-avatar-badge {
          position: absolute;
          bottom: 2px;
          right: -15px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0.25rem 0.75rem;
          background: #0d1117;
          border: 1px solid var(--border-color);
          border-radius: 20px;
          font-family: var(--font-code);
          font-size: 0.75rem;
          color: #ffffff;
        }
        .badge-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
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
          margin-bottom: 0;
          max-width: 580px;
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
            gap: 2rem;
          }
          .hero-intro-col {
            align-items: flex-start;
          }
        }
        @media (max-width: 600px) {
          .hero-name {
            font-size: 2rem;
          }
          .hero-subrole {
            font-size: 1.15rem;
          }
          .hero-desc {
            font-size: 0.95rem;
          }
          .editor-body {
            font-size: 0.78rem;
            padding: 0.85rem;
            min-height: 280px;
          }
          .hero-avatar-frame {
            width: 110px;
            height: 110px;
          }
        }
      `}</style>
    </section>
  );
};

