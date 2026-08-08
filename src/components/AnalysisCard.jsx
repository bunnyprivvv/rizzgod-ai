import React from 'react';
import { Eye, Zap, ShieldAlert, Sparkles, AlertCircle } from 'lucide-react';

export default function AnalysisCard({ analysis }) {
  if (!analysis) return null;

  const getVibeBadge = (category) => {
    switch (category) {
      case 'Shit-Test':
        return <span className="badge badge-crimson"><ShieldAlert size={14} /> SHIT-TEST / DEFENSE</span>;
      case 'Dry Energy':
        return <span className="badge badge-flame"><AlertCircle size={14} /> DRY ENERGY / LOW EFFORT</span>;
      case 'Story Hook':
        return <span className="badge badge-gold"><Sparkles size={14} /> STORY HOOK OPPORTUNITY</span>;
      case 'Playful Banter':
        return <span className="badge badge-violet"><Zap size={14} /> PLAYFUL BANTER</span>;
      default:
        return <span className="badge badge-cyan"><Eye size={14} /> HIGH ATTRACTION WINDOW</span>;
    }
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '1.5rem', marginBottom: '1.5rem', borderLeft: '4px solid var(--accent-gold)' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Eye size={20} color="var(--accent-gold)" />
          <h3 style={{ fontSize: '1.1rem', margin: 0 }}>Vibe & Subtext Analysis</h3>
        </div>
        {getVibeBadge(analysis.vibeCategory)}
      </div>

      {/* Grid for Subtext and Opening */}
      <div className="grid-2" style={{ gap: '1rem' }}>
        
        {/* Subtext Box */}
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem', letterSpacing: '0.05em' }}>
            1. THE VIBE CHECK (Subtext)
          </div>
          <p style={{ fontSize: '0.9rem', color: '#e2e8f0', margin: 0, lineHeight: 1.5 }}>
            {analysis.subtext}
          </p>
        </div>

        {/* Hidden Opening Box */}
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase', marginBottom: '0.4rem', letterSpacing: '0.05em' }}>
            2. THE HIDDEN OPENING
          </div>
          <p style={{ fontSize: '0.9rem', color: '#e2e8f0', margin: 0, lineHeight: 1.5 }}>
            {analysis.opening}
          </p>
        </div>

      </div>

    </div>
  );
}
