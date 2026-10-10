import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

export const EditModal = ({ isOpen, onClose, section, data, onSave }) => {
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    setFormData(data);
  }, [data, section]);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  // Helper for updating nested personalInfo
  const handlePersonalInfoChange = (field, val) => {
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: val,
      },
    }));
  };

  // Helper array edits
  const handleArrayItemChange = (arrayKey, index, field, val) => {
    setFormData((prev) => {
      const updatedArray = [...(prev[arrayKey] || [])];
      updatedArray[index] = {
        ...updatedArray[index],
        [field]: val,
      };
      return { ...prev, [arrayKey]: updatedArray };
    });
  };

  const handleAddItem = (arrayKey, defaultItem) => {
    setFormData((prev) => ({
      ...prev,
      [arrayKey]: [...(prev[arrayKey] || []), { ...defaultItem, id: Date.now().toString() }],
    }));
  };

  const handleDeleteItem = (arrayKey, index) => {
    setFormData((prev) => ({
      ...prev,
      [arrayKey]: (prev[arrayKey] || []).filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="admin-modal-overlay">
      <div className="admin-modal-container">
        {/* Header */}
        <div className="admin-modal-header">
          <div className="admin-header-title-wrap">
            <span className="header-label">ADMIN CONTENT EDITOR</span>
            <h2 className="admin-modal-title">
              Edit <span className="highlight-gold">{section.toUpperCase()}</span> Section
            </h2>
          </div>
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            <Icons.X size={18} />
            <span>Cancel</span>
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSave} className="admin-modal-form">
          {/* HERO SECTION */}
          {section === 'hero' && (
            <div className="form-fields-group">
              <div className="form-field">
                <label>Profile Image / Avatar URL (Hero Photo)</label>
                <input
                  type="text"
                  value={formData.personalInfo.avatar || ''}
                  onChange={(e) => handlePersonalInfoChange('avatar', e.target.value)}
                  placeholder="/profile.jpg or https://..."
                />
                <span className="field-hint">Apni photo ka link daalein (ya `/profile.jpg` rakhein agar public folder me photo rakhi hai).</span>
              </div>

              <div className="form-field">
                <label>Full Name</label>
                <input
                  type="text"
                  value={formData.personalInfo.name || ''}
                  onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
                />
              </div>

              <div className="form-field">
                <label>Professional Title</label>
                <input
                  type="text"
                  value={formData.personalInfo.title || ''}
                  onChange={(e) => handlePersonalInfoChange('title', e.target.value)}
                />
              </div>

              <div className="form-field">
                <label>Tagline</label>
                <input
                  type="text"
                  value={formData.personalInfo.tagline || ''}
                  onChange={(e) => handlePersonalInfoChange('tagline', e.target.value)}
                />
              </div>

              <div className="form-field">
                <label>Status / Availability</label>
                <input
                  type="text"
                  value={formData.personalInfo.status || ''}
                  onChange={(e) => handlePersonalInfoChange('status', e.target.value)}
                />
              </div>

              <div className="form-field">
                <label>Bio Summary</label>
                <textarea
                  rows={4}
                  value={formData.personalInfo.bio || ''}
                  onChange={(e) => handlePersonalInfoChange('bio', e.target.value)}
                />
              </div>
            </div>
          )}

          {/* ABOUT SECTION */}
          {section === 'about' && (
            <div className="form-fields-group">
              <div className="form-field">
                <label>Developer Profile Bio Description</label>
                <textarea
                  rows={8}
                  value={formData.personalInfo.bio || ''}
                  onChange={(e) => handlePersonalInfoChange('bio', e.target.value)}
                />
                <span className="field-hint">Edit your core overview paragraph.</span>
              </div>
            </div>
          )}

          {/* SKILLS SECTION */}
          {section === 'skills' && (
            <div className="form-fields-group">
              <div className="items-list-header">
                <h3>Technical Skills List</h3>
                <button
                  type="button"
                  onClick={() =>
                    handleAddItem('skills', {
                      name: 'New Skill',
                      category: 'Backend',
                      level: 85,
                      years: '2 yrs',
                      icon: 'Code',
                    })
                  }
                  className="btn btn-gold btn-sm"
                >
                  + Add New Skill
                </button>
              </div>

              {(formData.skills || []).map((skill, idx) => (
                <div key={skill.id || idx} className="item-editor-card">
                  <div className="item-editor-top">
                    <span className="item-num">Skill #{idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => handleDeleteItem('skills', idx)}
                      className="btn-delete-item"
                      title="Delete Skill"
                    >
                      <Icons.Trash size={16} />
                    </button>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-field">
                      <label>Skill Name</label>
                      <input
                        type="text"
                        value={skill.name || ''}
                        onChange={(e) => handleArrayItemChange('skills', idx, 'name', e.target.value)}
                      />
                    </div>
                    <div className="form-field">
                      <label>Category (Backend, Frontend, Database, Tools)</label>
                      <input
                        type="text"
                        value={skill.category || ''}
                        onChange={(e) => handleArrayItemChange('skills', idx, 'category', e.target.value)}
                      />
                    </div>
                    <div className="form-field">
                      <label>Proficiency (%)</label>
                      <input
                        type="number"
                        min={0}
                        max={100}
                        value={skill.level || 80}
                        onChange={(e) => handleArrayItemChange('skills', idx, 'level', parseInt(e.target.value) || 0)}
                      />
                    </div>
                    <div className="form-field">
                      <label>Years of Experience</label>
                      <input
                        type="text"
                        value={skill.years || ''}
                        onChange={(e) => handleArrayItemChange('skills', idx, 'years', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* EXPERIENCE SECTION */}
          {section === 'experience' && (
            <div className="form-fields-group">
              <div className="items-list-header">
                <h3>Work Experience Entries</h3>
                <button
                  type="button"
                  onClick={() =>
                    handleAddItem('experiences', {
                      role: 'Software Developer',
                      company: 'Company Name',
                      location: 'Remote',
                      period: '2023 - Present',
                      description: 'Developed scalable web applications.',
                      highlights: ['Built RESTful APIs', 'Optimized SQL queries'],
                      technologies: ['Laravel', 'React', 'SQL'],
                    })
                  }
                  className="btn btn-gold btn-sm"
                >
                  + Add Experience
                </button>
              </div>

              {(formData.experiences || []).map((exp, idx) => (
                <div key={exp.id || idx} className="item-editor-card">
                  <div className="item-editor-top">
                    <span className="item-num">Experience #{idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => handleDeleteItem('experiences', idx)}
                      className="btn-delete-item"
                      title="Delete Experience"
                    >
                      <Icons.Trash size={16} />
                    </button>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-field">
                      <label>Job Role Title</label>
                      <input
                        type="text"
                        value={exp.role || ''}
                        onChange={(e) => handleArrayItemChange('experiences', idx, 'role', e.target.value)}
                      />
                    </div>
                    <div className="form-field">
                      <label>Company Name</label>
                      <input
                        type="text"
                        value={exp.company || ''}
                        onChange={(e) => handleArrayItemChange('experiences', idx, 'company', e.target.value)}
                      />
                    </div>
                    <div className="form-field">
                      <label>Period (e.g. 2023 - Present)</label>
                      <input
                        type="text"
                        value={exp.period || ''}
                        onChange={(e) => handleArrayItemChange('experiences', idx, 'period', e.target.value)}
                      />
                    </div>
                    <div className="form-field">
                      <label>Location</label>
                      <input
                        type="text"
                        value={exp.location || ''}
                        onChange={(e) => handleArrayItemChange('experiences', idx, 'location', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-field" style={{ marginTop: '0.75rem' }}>
                    <label>Description</label>
                    <textarea
                      rows={3}
                      value={exp.description || ''}
                      onChange={(e) => handleArrayItemChange('experiences', idx, 'description', e.target.value)}
                    />
                  </div>

                  <div className="form-field">
                    <label>Highlights (One per line)</label>
                    <textarea
                      rows={3}
                      value={Array.isArray(exp.highlights) ? exp.highlights.join('\n') : exp.highlights || ''}
                      onChange={(e) =>
                        handleArrayItemChange(
                          'experiences',
                          idx,
                          'highlights',
                          e.target.value.split('\n').filter((l) => l.trim() !== '')
                        )
                      }
                    />
                  </div>

                  <div className="form-field">
                    <label>Technologies Used (Comma separated)</label>
                    <input
                      type="text"
                      value={Array.isArray(exp.technologies) ? exp.technologies.join(', ') : exp.technologies || ''}
                      onChange={(e) =>
                        handleArrayItemChange(
                          'experiences',
                          idx,
                          'technologies',
                          e.target.value.split(',').map((t) => t.trim()).filter(Boolean)
                        )
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* PROJECTS SECTION */}
          {section === 'projects' && (
            <div className="form-fields-group">
              <div className="items-list-header">
                <h3>Projects List</h3>
                <button
                  type="button"
                  onClick={() =>
                    handleAddItem('projects', {
                      title: 'New Web Application',
                      category: 'Laravel',
                      description: 'High performance web system built with modern tools.',
                      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
                      liveUrl: 'https://example.com',
                      githubUrl: 'https://github.com',
                      technologies: ['Laravel', 'React', 'SQL'],
                    })
                  }
                  className="btn btn-gold btn-sm"
                >
                  + Add Project
                </button>
              </div>

              {(formData.projects || []).map((project, idx) => (
                <div key={project.id || idx} className="item-editor-card">
                  <div className="item-editor-top">
                    <span className="item-num">Project #{idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => handleDeleteItem('projects', idx)}
                      className="btn-delete-item"
                      title="Delete Project"
                    >
                      <Icons.Trash size={16} />
                    </button>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-field">
                      <label>Project Title</label>
                      <input
                        type="text"
                        value={project.title || ''}
                        onChange={(e) => handleArrayItemChange('projects', idx, 'title', e.target.value)}
                      />
                    </div>
                    <div className="form-field">
                      <label>Category (Laravel, React, Full Stack, SQL)</label>
                      <input
                        type="text"
                        value={project.category || ''}
                        onChange={(e) => handleArrayItemChange('projects', idx, 'category', e.target.value)}
                      />
                    </div>
                    <div className="form-field">
                      <label>Live Demo URL</label>
                      <input
                        type="text"
                        value={project.liveUrl || ''}
                        onChange={(e) => handleArrayItemChange('projects', idx, 'liveUrl', e.target.value)}
                      />
                    </div>
                    <div className="form-field">
                      <label>GitHub Repository URL</label>
                      <input
                        type="text"
                        value={project.githubUrl || ''}
                        onChange={(e) => handleArrayItemChange('projects', idx, 'githubUrl', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-field" style={{ marginTop: '0.75rem' }}>
                    <label>Image URL</label>
                    <input
                      type="text"
                      value={project.image || ''}
                      onChange={(e) => handleArrayItemChange('projects', idx, 'image', e.target.value)}
                    />
                  </div>

                  <div className="form-field">
                    <label>Description</label>
                    <textarea
                      rows={3}
                      value={project.description || ''}
                      onChange={(e) => handleArrayItemChange('projects', idx, 'description', e.target.value)}
                    />
                  </div>

                  <div className="form-field">
                    <label>Technologies Used (Comma separated)</label>
                    <input
                      type="text"
                      value={Array.isArray(project.technologies) ? project.technologies.join(', ') : project.technologies || ''}
                      onChange={(e) =>
                        handleArrayItemChange(
                          'projects',
                          idx,
                          'technologies',
                          e.target.value.split(',').map((t) => t.trim()).filter(Boolean)
                        )
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* LEARNING / CERTIFICATES SECTION */}
          {section === 'learning' && (
            <div className="form-fields-group">
              <div className="items-list-header">
                <h3>Certifications &amp; Courses</h3>
                <button
                  type="button"
                  onClick={() =>
                    handleAddItem('learning', {
                      title: 'New Professional Certification',
                      issuer: 'Udemy / Coursera',
                      date: '10 January 2024',
                      duration: '3 Months',
                      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
                      description: 'Advanced course covering modern architecture and best practices.',
                    })
                  }
                  className="btn btn-gold btn-sm"
                >
                  + Add Certificate
                </button>
              </div>

              {(formData.learning || []).map((cert, idx) => (
                <div key={cert.id || idx} className="item-editor-card">
                  <div className="item-editor-top">
                    <span className="item-num">Certificate #{idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => handleDeleteItem('learning', idx)}
                      className="btn-delete-item"
                      title="Delete Certificate"
                    >
                      <Icons.Trash size={16} />
                    </button>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-field">
                      <label>Certificate Title</label>
                      <input
                        type="text"
                        value={cert.title || ''}
                        onChange={(e) => handleArrayItemChange('learning', idx, 'title', e.target.value)}
                      />
                    </div>
                    <div className="form-field">
                      <label>Issuer / Academy</label>
                      <input
                        type="text"
                        value={cert.issuer || ''}
                        onChange={(e) => handleArrayItemChange('learning', idx, 'issuer', e.target.value)}
                      />
                    </div>
                    <div className="form-field">
                      <label>Issue Date</label>
                      <input
                        type="text"
                        value={cert.date || ''}
                        onChange={(e) => handleArrayItemChange('learning', idx, 'date', e.target.value)}
                      />
                    </div>
                    <div className="form-field">
                      <label>Duration</label>
                      <input
                        type="text"
                        value={cert.duration || ''}
                        onChange={(e) => handleArrayItemChange('learning', idx, 'duration', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-field" style={{ marginTop: '0.75rem' }}>
                    <label>Image URL</label>
                    <input
                      type="text"
                      value={cert.image || ''}
                      onChange={(e) => handleArrayItemChange('learning', idx, 'image', e.target.value)}
                    />
                  </div>

                  <div className="form-field">
                    <label>Description</label>
                    <textarea
                      rows={3}
                      value={cert.description || ''}
                      onChange={(e) => handleArrayItemChange('learning', idx, 'description', e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CONTACT & SOCIAL SECTION */}
          {section === 'contact' && (
            <div className="form-fields-group">
              <div className="form-grid-2">
                <div className="form-field">
                  <label>Email Address</label>
                  <input
                    type="text"
                    value={formData.personalInfo.email || ''}
                    onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    value={formData.personalInfo.phone || ''}
                    onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label>Location</label>
                  <input
                    type="text"
                    value={formData.personalInfo.location || ''}
                    onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label>GitHub Profile Link</label>
                  <input
                    type="text"
                    value={formData.personalInfo.github || ''}
                    onChange={(e) => handlePersonalInfoChange('github', e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label>LinkedIn Profile Link</label>
                  <input
                    type="text"
                    value={formData.personalInfo.linkedin || ''}
                    onChange={(e) => handlePersonalInfoChange('linkedin', e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Footer Submit Bar */}
          <div className="admin-modal-footer">
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-gold">
              <Icons.Check size={16} />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .admin-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(7, 9, 14, 0.95);
          backdrop-filter: blur(12px);
          z-index: 1000;
          overflow-y: auto;
          padding: 2.5rem 1.5rem;
        }
        .admin-modal-container {
          max-width: 900px;
          margin: 0 auto;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
        }
        .admin-modal-header {
          padding: 1.75rem 2rem;
          background: #0d1117;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .admin-modal-title {
          font-size: 1.8rem;
          color: #ffffff;
          margin-top: 0.15rem;
        }
        .admin-modal-form {
          padding: 2rem;
        }
        .form-fields-group {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .form-field label {
          font-size: 0.85rem;
          font-family: var(--font-code);
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .form-field input, .form-field textarea {
          padding: 0.75rem 1rem;
          background: var(--bg-main);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: #ffffff;
          font-family: inherit;
          font-size: 0.95rem;
          transition: border-color 0.2s ease;
        }
        .form-field input:focus, .form-field textarea:focus {
          border-color: var(--accent-gold);
          outline: none;
        }
        .field-hint {
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .form-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        .items-list-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .items-list-header h3 {
          font-size: 1.2rem;
          color: #ffffff;
        }
        .item-editor-card {
          padding: 1.5rem;
          background: var(--bg-main);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
        }
        .item-editor-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-color);
        }
        .item-num {
          font-family: var(--font-code);
          font-size: 0.85rem;
          color: var(--accent-gold);
          font-weight: 700;
        }
        .btn-delete-item {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #ef4444;
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-delete-item:hover {
          background: #ef4444;
          color: #ffffff;
        }
        .admin-modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
        }

        @media (max-width: 650px) {
          .form-grid-2 { grid-template-columns: 1fr; }
          .admin-modal-form { padding: 1.25rem; }
        }
      `}</style>
    </div>
  );
};
