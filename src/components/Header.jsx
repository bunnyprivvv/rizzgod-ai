import React from 'react';
import { Flame, Sparkles, Key, MessageSquare, Camera, Award, Smartphone, Download, HelpCircle } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, onOpenApiKey, onOpenInstall, onOpenAbout, hasApiKey, isInstallable }) {
  return (
    <>
      {/* Desktop & Mobile Header */}
      <header className="glass-panel" style={{ borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none', padding: '0.85rem 1.25rem', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          
          {/* Brand Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{ 
              width: '38px', 
              height: '38px', 
              borderRadius: '12px', 
              background: 'linear-gradient(135deg, #ff5400 0%, #ff2a5f 100%)',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              boxShadow: '0 0 15px rgba(255, 84, 0, 0.5)'
            }}>
              <Flame size={22} color="#ffffff" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <h1 style={{ fontSize: '1.25rem', margin: 0 }} className="gradient-text-gold">RIZZGOD AI</h1>
                <span className="badge badge-gold" style={{ fontSize: '0.6rem' }}>MOBILE PWA</span>
              </div>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', margin: 0 }}>Elite Texting Coach & Wingman</p>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="desktop-nav" style={{ alignItems: 'center', gap: '0.4rem', background: 'rgba(0,0,0,0.3)', padding: '0.3rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <button 
              onClick={() => setActiveTab('analyzer')}
              className={activeTab === 'analyzer' ? 'btn-primary' : 'btn-secondary'}
              style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem', border: 'none' }}
            >
              <Camera size={15} /> Scanner
            </button>
            
            <button 
              onClick={() => setActiveTab('story')}
              className={activeTab === 'story' ? 'btn-intense' : 'btn-secondary'}
              style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem', border: 'none' }}
            >
              <Sparkles size={15} /> Story Hooks
            </button>

            <button 
              onClick={() => setActiveTab('practice')}
              className={activeTab === 'practice' ? 'btn-primary' : 'btn-secondary'}
              style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem', border: 'none' }}
            >
              <MessageSquare size={15} /> Practice
            </button>

            <button 
              onClick={() => setActiveTab('playbook')}
              className={activeTab === 'playbook' ? 'btn-primary' : 'btn-secondary'}
              style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem', border: 'none' }}
            >
              <Award size={15} /> Playbook
            </button>
          </nav>

          {/* Quick Tools */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <button 
              onClick={onOpenAbout}
              className="btn-secondary"
              style={{ fontSize: '0.75rem', padding: '0.45rem 0.75rem' }}
              title="About RIZZGOD AI & What This App Does"
            >
              <HelpCircle size={14} color="var(--accent-gold)" />
              About App
            </button>

            <button 
              onClick={onOpenInstall}
              className={isInstallable ? "btn-primary" : "btn-secondary"}
              style={{ fontSize: '0.75rem', padding: '0.45rem 0.75rem', borderColor: 'var(--accent-gold)' }}
            >
              {isInstallable ? <Download size={14} /> : <Smartphone size={14} color="var(--accent-gold)" />}
              {isInstallable ? 'Install App' : 'Install Guide'}
            </button>

            <button 
              onClick={onOpenApiKey}
              className="btn-secondary"
              style={{ fontSize: '0.75rem', padding: '0.45rem 0.75rem' }}
            >
              <Key size={14} color={hasApiKey ? 'var(--accent-gold)' : 'var(--text-muted)'} />
              {hasApiKey ? 'API Active' : 'API Key'}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Native Bottom Navigation Bar */}
      <div className="mobile-bottom-bar">
        <button 
          onClick={() => setActiveTab('analyzer')} 
          className={`mobile-tab-btn ${activeTab === 'analyzer' ? 'active' : ''}`}
        >
          <Camera size={20} />
          <span>Scanner</span>
        </button>

        <button 
          onClick={() => setActiveTab('story')} 
          className={`mobile-tab-btn ${activeTab === 'story' ? 'active-intense' : ''}`}
        >
          <Sparkles size={20} />
          <span>Story Hooks</span>
        </button>

        <button 
          onClick={() => setActiveTab('practice')} 
          className={`mobile-tab-btn ${activeTab === 'practice' ? 'active' : ''}`}
        >
          <MessageSquare size={20} />
          <span>Practice</span>
        </button>

        <button 
          onClick={() => setActiveTab('playbook')} 
          className={`mobile-tab-btn ${activeTab === 'playbook' ? 'active' : ''}`}
        >
          <Award size={20} />
          <span>Playbook</span>
        </button>
      </div>
    </>
  );
}
