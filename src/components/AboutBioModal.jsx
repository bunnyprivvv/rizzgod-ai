import React from 'react';
import { Flame, Sparkles, Eye, ShieldAlert, Zap, X, Check, Target, HeartHandshake, Award } from 'lucide-react';

export default function AboutBioModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.85)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      zIndex: 1000,
      padding: '1rem'
    }}>
      <div className="glass-panel animate-fade-in" style={{ maxWidth: '580px', width: '100%', padding: '1.75rem', position: 'relative', border: '1px solid var(--accent-gold)', maxHeight: '90vh', overflowY: 'auto' }}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
        >
          <X size={20} />
        </button>

        {/* Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div style={{ padding: '0.6rem', borderRadius: '12px', background: 'linear-gradient(135deg, #ff5400 0%, #ff2a5f 100%)' }}>
            <Flame size={24} color="#fff" />
          </div>
          <div>
            <h2 style={{ fontSize: '1.4rem', margin: 0 }} className="gradient-text-gold">
              About RIZZGOD AI
            </h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
              Your Elite AI Texting Strategist & Wingman
            </p>
          </div>
        </div>

        {/* Core Bio Description */}
        <div style={{ background: 'rgba(255,183,3,0.08)', padding: '1rem 1.25rem', borderRadius: '14px', border: '1px solid rgba(255,183,3,0.2)', marginBottom: '1.25rem' }}>
          <p style={{ fontSize: '0.95rem', color: '#ffffff', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
            <strong>RIZZGOD AI</strong> is an elite, hyper-confident texting coach designed to analyze screenshots of DMs, Instagram stories, or text messages. It decodes female subtext, spots hidden openings, handles defense mechanisms (like <em>"I have a boyfriend"</em>), and crafts bold, high-tension replies that push interactions forward to dates.
          </p>
        </div>

        {/* What This App Does - 4 Core Pillars */}
        <h3 style={{ fontSize: '1rem', color: 'var(--accent-gold)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Target size={18} /> How It Works & What It Does:
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
          
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.85rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--accent-gold)', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Eye size={16} /> 1. The Vibe Check & Subtext Detector
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
              Scans screenshots or text to classify energy (Shit-Test, Dry Energy, Playful Banter, Story Hook) and explains what she <em>actually</em> means behind her words.
            </p>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.85rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--accent-flame)', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Zap size={16} /> 2. 3-Tiered High-Tension Reply Generator
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
              Generates 3 battle-tested options: <strong>The Teaser</strong> (light banter), <strong>The Bold Call-Out</strong> (handling tests directly without apologizing), and <strong>The High-Tension Drop</strong> (heavy confident escalation).
            </p>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.85rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--accent-crimson)', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Sparkles size={16} /> 3. Dedicated Story Reply Studio
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
              Custom flirty hooks for IG & Snap stories (Gym, Mirror Selfies, Beach, Nightlife, 1 AM Moody music) with zero generic emojis.
            </p>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.85rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#c084fc', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Award size={16} /> 4. Practice Arena & Emergency Playbook
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
              Test your lines in a live AI chat simulator with real-time Tension Gauges, or search 35+ battle-tested cheatsheet responses.
            </p>
          </div>

        </div>

        {/* Wingman Rule Footer */}
        <div style={{ textAlign: 'center' }}>
          <button onClick={onClose} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            <Check size={16} /> Got It! Start Decoding
          </button>
        </div>

      </div>
    </div>
  );
}
