import React, { useState, useEffect, useRef } from 'react';

export const SectionBackdrop = ({
  variant = 'gold', // 'gold' | 'cyan' | 'emerald' | 'purple' | 'amber'
  tokens = ['</>', '{ }', 'const', '0101', '✦', 'fn()'],
  showGrid = true,
  showOrbs = true
}) => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const el = containerRef.current?.parentElement;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -1000, y: -1000 });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Clean Two-Color Theme (Primary: Gold #fbbf24, Combination: Cyan #38bdf8)
  const colorMap = {
    gold: {
      orb1: 'radial-gradient(circle, rgba(251, 191, 36, 0.28) 0%, rgba(251, 191, 36, 0) 70%)',
      orb2: 'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(56, 189, 248, 0) 70%)',
      spotlight: 'rgba(251, 191, 36, 0.16)'
    },
    cyan: {
      orb1: 'radial-gradient(circle, rgba(56, 189, 248, 0.28) 0%, rgba(56, 189, 248, 0) 70%)',
      orb2: 'radial-gradient(circle, rgba(251, 191, 36, 0.22) 0%, rgba(251, 191, 36, 0) 70%)',
      spotlight: 'rgba(56, 189, 248, 0.16)'
    }
  };

  const currentTheme = colorMap[variant] || colorMap.gold;

  return (
    <div ref={containerRef} className="section-backdrop-root" aria-hidden="true">
      {/* 1. Moving Cyber Grid Background */}
      {showGrid && <div className="backdrop-cyber-grid" />}

      {/* 2. Shimmer Light Beam Sweep */}
      <div className="backdrop-beam-sweep" />

      {/* 3. Floating Radiant Nebula Orbs */}
      {showOrbs && (
        <>
          <div
            className="backdrop-orb orb-primary"
            style={{ background: currentTheme.orb1 }}
          />
          <div
            className="backdrop-orb orb-secondary"
            style={{ background: currentTheme.orb2 }}
          />
        </>
      )}

      {/* 4. Interactive Mouse Follower Spotlight */}
      <div
        className="backdrop-spotlight"
        style={{
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, ${currentTheme.spotlight}, transparent 75%)`,
          opacity: mousePos.x > 0 ? 1 : 0
        }}
      />

      {/* 5. Floating Ambient Code Glyphs */}
      <div className="backdrop-tokens-container">
        {tokens.map((token, index) => (
          <span
            key={index}
            className={`backdrop-floating-token token-${index % 5}`}
            style={{
              left: `${10 + ((index * 22) % 82)}%`,
              animationDelay: `${index * 1.8}s`,
              animationDuration: `${14 + (index % 4) * 4}s`
            }}
          >
            {token}
          </span>
        ))}
      </div>

      <style>{`
        .section-backdrop-root {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
          contain: strict;
        }

        /* 1. Cyber Grid */
        .backdrop-cyber-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(56, 189, 248, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(251, 191, 36, 0.04) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(ellipse 90% 70% at 50% 50%, #000 35%, transparent 88%);
          -webkit-mask-image: radial-gradient(ellipse 90% 70% at 50% 50%, #000 35%, transparent 88%);
          animation: gridDrift 35s linear infinite;
        }

        @keyframes gridDrift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        /* 2. Beam Sweep */
        .backdrop-beam-sweep {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(251, 191, 36, 0.08) 0%,
            rgba(56, 189, 248, 0.06) 35%,
            transparent 68%
          );
          animation: sweepRotate 25s ease-in-out infinite alternate;
          transform-origin: center;
        }

        @keyframes sweepRotate {
          0% { transform: translate(-10%, -10%) rotate(0deg) scale(0.95); }
          50% { transform: translate(8%, 12%) rotate(180deg) scale(1.15); }
          100% { transform: translate(-8%, 5%) rotate(360deg) scale(1); }
        }

        /* 3. Floating Nebula Orbs */
        .backdrop-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(55px);
          opacity: 0.95;
          will-change: transform;
        }

        .orb-primary {
          width: 540px;
          height: 540px;
          top: -10%;
          left: -8%;
          animation: floatOrb1 16s ease-in-out infinite alternate;
        }

        .orb-secondary {
          width: 500px;
          height: 500px;
          bottom: -15%;
          right: -5%;
          animation: floatOrb2 20s ease-in-out infinite alternate;
        }

        @keyframes floatOrb1 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(80px, 60px) scale(1.2); }
          100% { transform: translate(30px, 120px) scale(0.9); }
        }

        @keyframes floatOrb2 {
          0% { transform: translate(0, 0) scale(1.1); }
          50% { transform: translate(-70px, -50px) scale(0.95); }
          100% { transform: translate(-40px, 80px) scale(1.25); }
        }

        /* 4. Mouse Follower Spotlight */
        .backdrop-spotlight {
          position: absolute;
          inset: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        /* 5. Floating Ambient Code Glyphs */
        .backdrop-tokens-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .backdrop-floating-token {
          position: absolute;
          bottom: -40px;
          font-family: var(--font-code, monospace);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 1px;
          user-select: none;
          animation: floatUp linear infinite;
          will-change: transform, opacity;
        }

        .token-0 { color: rgba(251, 191, 36, 0.38); font-size: 0.95rem; text-shadow: 0 0 10px rgba(251, 191, 36, 0.5); }
        .token-1 { color: rgba(56, 189, 248, 0.38); font-size: 0.9rem; text-shadow: 0 0 10px rgba(56, 189, 248, 0.5); }
        .token-2 { color: rgba(251, 191, 36, 0.32); font-size: 0.85rem; text-shadow: 0 0 8px rgba(251, 191, 36, 0.4); }
        .token-3 { color: rgba(56, 189, 248, 0.35); font-size: 0.92rem; text-shadow: 0 0 9px rgba(56, 189, 248, 0.45); }
        .token-4 { color: rgba(251, 191, 36, 0.35); font-size: 0.88rem; text-shadow: 0 0 9px rgba(251, 191, 36, 0.45); }

        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.9;
          }
          85% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(-110vh) rotate(20deg);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .orb-primary, .orb-secondary {
            width: 300px;
            height: 300px;
            filter: blur(45px);
          }
          .backdrop-floating-token {
            font-size: 0.72rem;
          }
        }
      `}</style>
    </div>
  );
};
