import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/initialData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Learning } from './components/Learning';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Icons } from './components/Icons';

export default function App() {
  const [data] = useState(initialPortfolioData);
  const [activeSection, setActiveSection] = useState('hero');
  const [toast, setToast] = useState({ open: false, message: '', type: 'success' });

  // Handle active section on scroll
  useEffect(() => {
    const sections = ['hero', 'about', 'expertise', 'experience', 'projects', 'learning', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ open: true, message, type });
    setTimeout(() => setToast({ open: false, message: '', type: 'success' }), 4000);
  };

  return (
    <div className="app-main-wrapper">
      {/* Main Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Hero Section */}
      <Hero personalInfo={data.personalInfo} />

      {/* About Section */}
      <About personalInfo={data.personalInfo} />

      {/* Skills & Expertise Section */}
      <Skills skills={data.skills || []} />

      {/* Work Experience Section */}
      <Experience experiences={data.experiences || []} />

      {/* Featured Projects Section */}
      <Projects projects={data.projects || []} personalInfo={data.personalInfo} />

      {/* Continuous Learning & Certifications Section */}
      <Learning learning={data.learning || []} />

      {/* Contact Section */}
      <Contact personalInfo={data.personalInfo} showToast={showToast} />

      {/* Footer Section */}
      <Footer personalInfo={data.personalInfo} />

      {/* Toast Notification */}
      {toast.open && (
        <div className={`toast ${toast.type === 'error' ? 'toast-error' : ''}`}>
          <Icons.Check size={20} />
          <span>{toast.message}</span>
        </div>
      )}

      <style>{`
        .toast-error {
          border-color: #ef4444 !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(239, 68, 68, 0.4) !important;
        }
      `}</style>
    </div>
  );
}


