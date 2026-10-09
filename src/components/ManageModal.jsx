import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

export const ManageModal = ({ modalConfig, onClose, onSave }) => {
  const { type, item } = modalConfig;
  const isEdit = Boolean(item && item.id);

  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (isEdit) {
      // Clone item and join array fields to strings for simple text input
      const cloned = { ...item };
      if (Array.isArray(cloned.highlights)) cloned.highlights = cloned.highlights.join('\n');
      if (Array.isArray(cloned.technologies)) cloned.technologies = cloned.technologies.join(', ');
      if (Array.isArray(cloned.tags)) cloned.tags = cloned.tags.join(', ');
      setFormData(cloned);
    } else {
      // Default blank values
      if (type === 'skills') {
        setFormData({ name: '', category: 'Backend', level: 85, icon: 'Code', years: '2 yrs' });
      } else if (type === 'experiences') {
        setFormData({ role: '', company: '', location: 'Remote', period: '2024 - Present', description: '', highlights: '', technologies: 'Laravel, React, SQL' });
      } else if (type === 'projects') {
        setFormData({ title: '', category: 'Laravel', description: '', image: '', technologies: 'Laravel, React, SQL', liveUrl: '', githubUrl: '', featured: false, metrics: '' });
      } else if (type === 'learning') {
        setFormData({ title: '', issuer: '', date: '2024', status: 'Completed', type: 'Certification', description: '', tags: 'Laravel, React' });
      }
    }
  }, [type, item, isEdit]);

  const handleChange = (e) => {
    const { name, value, type: inputType, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: inputType === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const processed = { ...formData };
    
    // Process comma/newline separated arrays
    if (typeof processed.highlights === 'string') {
      processed.highlights = processed.highlights.split('\n').map(s => s.trim()).filter(Boolean);
    }
    if (typeof processed.technologies === 'string') {
      processed.technologies = processed.technologies.split(',').map(s => s.trim()).filter(Boolean);
    }
    if (typeof processed.tags === 'string') {
      processed.tags = processed.tags.split(',').map(s => s.trim()).filter(Boolean);
    }
    if (processed.level) {
      processed.level = Number(processed.level);
    }

    onSave(type, processed, isEdit);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-glass)', paddingBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.4rem', color: '#ffffff' }}>
            {isEdit ? `Edit ${type.slice(0, -1)}` : `Add New ${type.slice(0, -1)}`}
          </h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <Icons.X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* SKILLS FORM */}
          {type === 'skills' && (
            <>
              <div className="form-group">
                <label>Skill Name *</label>
                <input name="name" type="text" className="form-input" value={formData.name || ''} onChange={handleChange} required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Category *</label>
                  <select name="category" className="form-select" value={formData.category || 'Backend'} onChange={handleChange}>
                    <option value="Backend">Backend</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Database">Database</option>
                    <option value="Tools">Tools</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Icon Name *</label>
                  <select name="icon" className="form-select" value={formData.icon || 'Code'} onChange={handleChange}>
                    <option value="Laravel">Laravel</option>
                    <option value="React">React</option>
                    <option value="Sql">SQL / MySQL</option>
                    <option value="Code">Code</option>
                    <option value="Server">Server</option>
                    <option value="Database">Database</option>
                    <option value="Globe">Globe</option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Proficiency Level (%) *</label>
                  <input name="level" type="number" min="10" max="100" className="form-input" value={formData.level || 80} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Experience Years *</label>
                  <input name="years" type="text" className="form-input" value={formData.years || ''} onChange={handleChange} placeholder="e.g. 3 yrs" required />
                </div>
              </div>
            </>
          )}

          {/* EXPERIENCES FORM */}
          {type === 'experiences' && (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Role / Position Title *</label>
                  <input name="role" type="text" className="form-input" value={formData.role || ''} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Company Name *</label>
                  <input name="company" type="text" className="form-input" value={formData.company || ''} onChange={handleChange} required />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Location *</label>
                  <input name="location" type="text" className="form-input" value={formData.location || ''} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Period / Duration *</label>
                  <input name="period" type="text" className="form-input" value={formData.period || ''} onChange={handleChange} placeholder="e.g. 2023 - Present" required />
                </div>
              </div>
              <div className="form-group">
                <label>Description *</label>
                <textarea name="description" rows="3" className="form-textarea" value={formData.description || ''} onChange={handleChange} required></textarea>
              </div>
              <div className="form-group">
                <label>Key Highlights / Achievements (one per line)</label>
                <textarea name="highlights" rows="3" className="form-textarea" value={formData.highlights || ''} onChange={handleChange} placeholder="Architected RESTful APIs...&#10;Optimized SQL database..."></textarea>
              </div>
              <div className="form-group">
                <label>Technologies Used (comma separated)</label>
                <input name="technologies" type="text" className="form-input" value={formData.technologies || ''} onChange={handleChange} placeholder="Laravel, React, SQL" />
              </div>
            </>
          )}

          {/* PROJECTS FORM */}
          {type === 'projects' && (
            <>
              <div className="form-group">
                <label>Project Title *</label>
                <input name="title" type="text" className="form-input" value={formData.title || ''} onChange={handleChange} required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Primary Category *</label>
                  <select name="category" className="form-select" value={formData.category || 'Laravel'} onChange={handleChange}>
                    <option value="Laravel">Laravel</option>
                    <option value="React">React</option>
                    <option value="SQL">SQL</option>
                    <option value="Full Stack">Full Stack</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Metrics / Highlight Pill</label>
                  <input name="metrics" type="text" className="form-input" value={formData.metrics || ''} onChange={handleChange} placeholder="e.g. 50k+ Daily Users" />
                </div>
              </div>
              <div className="form-group">
                <label>Description *</label>
                <textarea name="description" rows="3" className="form-textarea" value={formData.description || ''} onChange={handleChange} required></textarea>
              </div>
              <div className="form-group">
                <label>Project Image URL</label>
                <input name="image" type="text" className="form-input" value={formData.image || ''} onChange={handleChange} placeholder="https://images.unsplash.com/..." />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Live Demo URL</label>
                  <input name="liveUrl" type="text" className="form-input" value={formData.liveUrl || ''} onChange={handleChange} placeholder="https://demo.example.com" />
                </div>
                <div className="form-group">
                  <label>GitHub Repository URL</label>
                  <input name="githubUrl" type="text" className="form-input" value={formData.githubUrl || ''} onChange={handleChange} placeholder="https://github.com/..." />
                </div>
              </div>
              <div className="form-group">
                <label>Technologies Used (comma separated) *</label>
                <input name="technologies" type="text" className="form-input" value={formData.technologies || ''} onChange={handleChange} placeholder="Laravel, React, SQL, JavaScript" required />
              </div>
              <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input name="featured" type="checkbox" id="featuredCheck" checked={Boolean(formData.featured)} onChange={handleChange} />
                <label htmlFor="featuredCheck" style={{ margin: 0, cursor: 'pointer' }}>Mark as Featured Project</label>
              </div>
            </>
          )}

          {/* LEARNING & CERTIFICATIONS FORM */}
          {type === 'learning' && (
            <>
              <div className="form-group">
                <label>Title / Course Name *</label>
                <input name="title" type="text" className="form-input" value={formData.title || ''} onChange={handleChange} required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Issuer / Platform *</label>
                  <input name="issuer" type="text" className="form-input" value={formData.issuer || ''} onChange={handleChange} placeholder="e.g. Meta / Udemy" required />
                </div>
                <div className="form-group">
                  <label>Date / Period *</label>
                  <input name="date" type="text" className="form-input" value={formData.date || ''} onChange={handleChange} placeholder="e.g. 2024" required />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Type *</label>
                  <select name="type" className="form-select" value={formData.type || 'Certification'} onChange={handleChange}>
                    <option value="Certification">Certification</option>
                    <option value="Continuous Learning">Continuous Learning</option>
                    <option value="Course">Course</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Status *</label>
                  <select name="status" className="form-select" value={formData.status || 'Completed'} onChange={handleChange}>
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Planned">Planned</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Description *</label>
                <textarea name="description" rows="3" className="form-textarea" value={formData.description || ''} onChange={handleChange} required></textarea>
              </div>
              <div className="form-group">
                <label>Tech Tags (comma separated)</label>
                <input name="tags" type="text" className="form-input" value={formData.tags || ''} onChange={handleChange} placeholder="Laravel 11, React 19, SQL" />
              </div>
            </>
          )}

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--border-glass)' }}>
            <button type="button" onClick={onClose} className="btn btn-secondary">Cancel</button>
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};
