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

  // Variant color definitions
  const colorMap = {
    gold: {
      orb1: 'radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, rgba(251, 191, 36, 0) 70%)',
      orb2: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(56, 189, 248, 0) 70%)',
      spotlight: 'rgba(251, 191, 36, 0.08)'
    },
    cyan: {
      orb1: 'radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, rgba(56, 189, 248, 0) 70%)',
      orb2: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0) 70%)',
      spotlight: 'rgba(56, 189, 248, 0.08)'
    },
    emerald: {
      orb1: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0) 70%)',
      orb2: 'radial-gradient(circle, rgba(251, 191, 36, 0.12) 0%, rgba(251, 191, 36, 0) 70%)',
      spotlight: 'rgba(16, 185, 129, 0.08)'
    },
    purple: {
      orb1: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0) 70%)',
      orb2: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(56, 189, 248, 0) 70%)',
      spotlight: 'rgba(168, 85, 247, 0.08)'
    },
    amber: {
      orb1: 'radial-gradient(circle, rgba(245, 158, 11, 0.16) 0%, rgba(245, 158, 11, 0) 70%)',
      orb2: 'radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0) 70%)',
      spotlight: 'rgba(245, 158, 11, 0.08)'
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
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(ellipse 90% 70% at 50% 50%, #000 30%, transparent 85%);
          -webkit-mask-image: radial-gradient(ellipse 90% 70% at 50% 50%, #000 30%, transparent 85%);
          animation: gridDrift 40s linear infinite;
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
            rgba(251, 191, 36, 0.035) 0%,
            rgba(56, 189, 248, 0.02) 30%,
            transparent 65%
          );
          animation: sweepRotate 28s ease-in-out infinite alternate;
          transform-origin: center;
        }

        @keyframes sweepRotate {
          0% { transform: translate(-10%, -10%) rotate(0deg) scale(0.9); }
          50% { transform: translate(8%, 12%) rotate(180deg) scale(1.15); }
          100% { transform: translate(-8%, 5%) rotate(360deg) scale(1); }
        }

        /* 3. Floating Nebula Orbs */
        .backdrop-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(65px);
          opacity: 0.85;
          will-change: transform;
        }

        .orb-primary {
          width: 520px;
          height: 520px;
          top: -10%;
          left: -8%;
          animation: floatOrb1 18s ease-in-out infinite alternate;
        }

        .orb-secondary {
          width: 480px;
          height: 480px;
          bottom: -15%;
          right: -5%;
          animation: floatOrb2 22s ease-in-out infinite alternate;
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
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.12);
          user-select: none;
          animation: floatUp linear infinite;
          will-change: transform, opacity;
          text-shadow: 0 0 8px rgba(251, 191, 36, 0.2);
        }

        .token-0 { color: rgba(251, 191, 36, 0.18); font-size: 0.9rem; }
        .token-1 { color: rgba(56, 189, 248, 0.18); font-size: 0.85rem; }
        .token-2 { color: rgba(16, 185, 129, 0.16); font-size: 0.8rem; }
        .token-3 { color: rgba(168, 85, 247, 0.16); font-size: 0.88rem; }
        .token-4 { color: rgba(245, 158, 11, 0.16); font-size: 0.82rem; }

        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.8;
          }
          85% {
            opacity: 0.8;
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
