import React, { useState, useEffect } from 'react';
import { SectionBackdrop } from './SectionBackdrop';

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
      <SectionBackdrop variant="gold" tokens={['<?php', 'Route::get', 'React.js', 'SQL', '✦', 'Laravel 11', '0101']} />
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
          gap: 2.5rem;
          align-items: center;
        }
        .hero-intro-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }

        /* Profile Avatar Frame */
        .hero-avatar-wrapper {
          position: relative;
          display: inline-block;
          margin-bottom: 1.25rem;
        }
        .hero-avatar-frame {
          width: clamp(175px, 22vw, 215px);
          height: clamp(175px, 22vw, 215px);
          border-radius: 50%;
          padding: 5px;
          background: linear-gradient(135deg, var(--accent-gold) 0%, rgba(251, 191, 36, 0.3) 50%, var(--accent-cyan) 100%);
          box-shadow: 0 12px 35px rgba(251, 191, 36, 0.3), 0 0 25px rgba(251, 191, 36, 0.15);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hero-avatar-frame:hover {
          transform: scale(1.03);
          box-shadow: 0 16px 45px rgba(251, 191, 36, 0.4), 0 0 35px rgba(251, 191, 36, 0.25);
        }
        .hero-avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          object-position: center 18%;
          background: var(--bg-card);
        }

        .hero-name {
          font-size: clamp(1.75rem, 5vw, 2.6rem);
          color: #ffffff;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 0.35rem;
          word-break: break-word;
        }
        .hero-subrole {
          font-size: clamp(1.05rem, 3.5vw, 1.35rem);
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
          word-break: break-word;
        }
        .hero-desc {
          color: var(--text-secondary);
          font-size: clamp(0.92rem, 2.5vw, 1.05rem);
          line-height: 1.65;
          margin-bottom: 0;
          max-width: 580px;
          word-break: break-word;
        }

        .code-editor {
          background: #07090e;
          border: 1px solid var(--border-color);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
          overflow: hidden;
          width: 100%;
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
          padding: 1.1rem;
          font-family: var(--font-code);
          font-size: 0.85rem;
          line-height: 1.6;
          min-height: 290px;
          overflow-x: auto;
        }
        .code-line {
          display: flex;
          align-items: flex-start;
          word-break: break-word;
          white-space: pre-wrap;
        }
        .line-num {
          display: inline-block;
          width: 26px;
          color: #30363d;
          user-select: none;
          font-size: 0.8rem;
          flex-shrink: 0;
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
          .hero-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          .hero-split-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero-avatar-frame {
            width: 105px;
            height: 105px;
          }
          .editor-body {
            font-size: 0.76rem;
            padding: 0.75rem;
            min-height: 250px;
          }
          .line-num {
            width: 20px;
          }
        }
      `}</style>
    </section>
  );
};

