import React, { useRef } from 'react';
import { Icons } from './Icons';

export const AdminBar = ({
  isAdmin,
  setIsAdmin,
  onOpenAddModal,
  onExportData,
  onImportData,
  onResetData
}) => {
  const fileInputRef = useRef(null);

  if (!isAdmin) return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        onImportData(data);
      } catch (err) {
        alert("Invalid JSON file format!");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="admin-bar">
      <div className="container admin-bar-container">
        <div className="admin-status">
          <span className="admin-badge">Content Management Active</span>
          <span className="admin-hint">Click "+ Add" or use hover edit/delete controls on any section</span>
        </div>

        <div className="admin-actions">
          <button onClick={() => onOpenAddModal('projects')} className="btn btn-admin btn-sm">
            <Icons.Plus size={14} />
            <span>+ Project</span>
          </button>
          <button onClick={() => onOpenAddModal('skills')} className="btn btn-admin btn-sm">
            <Icons.Plus size={14} />
            <span>+ Skill</span>
          </button>
          <button onClick={() => onOpenAddModal('experiences')} className="btn btn-admin btn-sm">
            <Icons.Plus size={14} />
            <span>+ Experience</span>
          </button>
          <button onClick={() => onOpenAddModal('learning')} className="btn btn-admin btn-sm">
            <Icons.Plus size={14} />
            <span>+ Certification</span>
          </button>

          <button onClick={onExportData} className="btn btn-secondary btn-sm" title="Export current portfolio content as JSON backup">
            <Icons.Download size={14} />
            <span>Export JSON</span>
          </button>

          <button onClick={() => fileInputRef.current?.click()} className="btn btn-secondary btn-sm" title="Import portfolio JSON backup file">
            <Icons.ExternalLink size={14} style={{ transform: 'rotate(180deg)' }} />
            <span>Import JSON</span>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".json"
            style={{ display: 'none' }}
          />

          <button onClick={onResetData} className="btn btn-danger btn-sm" title="Reset portfolio to initial demo state">
            <Icons.RotateCcw size={14} />
            <span>Reset Demo</span>
          </button>

          <button onClick={() => setIsAdmin(false)} className="btn btn-secondary btn-sm" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <Icons.X size={14} />
            <span>Done</span>
          </button>
        </div>
      </div>

      <style>{`
        .admin-bar {
          background: rgba(24, 15, 46, 0.95);
          border-bottom: 2px solid var(--accent-purple);
          padding: 0.6rem 0;
          box-shadow: 0 5px 20px rgba(168, 85, 247, 0.3);
          position: sticky;
          top: 0;
          z-index: 600;
          backdrop-filter: blur(12px);
        }
        .admin-bar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .admin-status {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
        .admin-badge {
          background: var(--gradient-secondary);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.8rem;
          padding: 0.2rem 0.75rem;
          border-radius: 50px;
        }
        .admin-hint {
          font-size: 0.82rem;
          color: #d8b4fe;
        }
        .admin-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
};
