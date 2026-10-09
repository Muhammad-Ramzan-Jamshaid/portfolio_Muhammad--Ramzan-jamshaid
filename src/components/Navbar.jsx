import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

export const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#expertise' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Learning', href: '#learning' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#hero" className="navbar-brand">
          <span className="brand-name">MRJDeveloper</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions Bar */}
        <div className="navbar-actions">
          <a href="#contact" className="btn btn-gold btn-sm" style={{ fontSize: '0.95rem', padding: '0.5rem 1.2rem' }}>
            <span>Hire Me</span>
          </a>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay">
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 500;
          padding: 1.2rem 0;
          background: #07090e;
          border-bottom: 1px solid var(--border-color);
          transition: all 0.2s ease;
        }
        .navbar-scrolled {
          padding: 0.85rem 0;
          background: #0d1117;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }
        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-brand {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .brand-name {
          font-weight: 800;
          font-size: 1.4rem;
          color: #ffffff;
          letter-spacing: -0.02em;
        }
        .brand-tag {
          font-family: var(--font-code);
          font-size: 0.9rem;
          color: var(--accent-gold);
          font-weight: 600;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2.2rem;
        }
        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 1.05rem;
          font-weight: 600;
          transition: color 0.2s ease;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--accent-gold);
        }
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }
        .mobile-nav-overlay {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: #0d1117;
          border-bottom: 1px solid var(--border-color);
          padding: 1.25rem 1.5rem;
        }
        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .mobile-nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 1.1rem;
          padding: 0.4rem 0;
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none; }
          .mobile-menu-toggle { display: block; }
        }
      `}</style>
    </header>
  );
};
