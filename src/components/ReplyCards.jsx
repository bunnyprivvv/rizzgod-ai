import React, { useState } from 'react';
import { Copy, Check, Volume2, Sparkles, Flame, ShieldAlert, Zap, Send } from 'lucide-react';

export default function ReplyCards({ options, onSendToPractice }) {
  const [copiedKey, setCopiedKey] = useState(null);
  const [speakingKey, setSpeakingKey] = useState(null);

  if (!options) return null;

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSpeak = (text, key) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // Slightly slower, confident delivery
      utterance.pitch = 0.95;
      setSpeakingKey(key);
      utterance.onend = () => setSpeakingKey(null);
      window.speechSynthesis.speak(utterance);
    }
  };

  const cardItems = [
    {
      key: 'teaser',
      title: '1. THE TEASER',
      subtitle: 'Light banter to hook her or call her bluff',
      badge: 'Banter Hook',
      badgeClass: 'badge-gold',
      icon: <Sparkles size={18} color="var(--accent-gold)" />,
      border: 'rgba(255, 183, 3, 0.4)',
      gradient: 'linear-gradient(135deg, rgba(255,183,3,0.08) 0%, rgba(0,0,0,0.4) 100%)',
      content: options.teaser
    },
    {
      key: 'boldCallOut',
      title: '2. THE BOLD CALL-OUT',
      subtitle: 'For handling tests, "I have a bf", or dry texts directly',
      badge: 'Frame Flip',
      badgeClass: 'badge-crimson',
      icon: <ShieldAlert size={18} color="var(--accent-crimson)" />,
      border: 'rgba(255, 42, 95, 0.4)',
      gradient: 'linear-gradient(135deg, rgba(255,42,95,0.08) 0%, rgba(0,0,0,0.4) 100%)',
      content: options.boldCallOut
    },
    {
      key: 'highTensionDrop',
      title: '3. THE HIGH-TENSION DROP',
      subtitle: 'Heavy, confident escalation with supreme sexual/flirty tension',
      badge: 'Maximum Escalation',
      badgeClass: 'badge-flame',
      icon: <Flame size={18} color="var(--accent-flame)" />,
      border: 'rgba(255, 84, 0, 0.4)',
      gradient: 'linear-gradient(135deg, rgba(255,84,0,0.12) 0%, rgba(138,43,226,0.12) 100%)',
      content: options.highTensionDrop
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} className="animate-fade-in">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
        <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Zap size={20} color="var(--accent-gold)" /> 3-Tier High-Tension Reply Options
        </h3>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Select option to copy or practice</span>
      </div>

      <div className="grid-3" style={{ gap: '1.25rem' }}>
        {cardItems.map((item) => (
          <div 
            key={item.key}
            className="glass-panel"
            style={{
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              background: item.gradient,
              borderColor: item.border,
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              position: 'relative'
            }}
          >
            <div>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {item.icon}
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem' }}>
                    {item.title}
                  </span>
                </div>
                <span className={`badge ${item.badgeClass}`} style={{ fontSize: '0.65rem' }}>
                  {item.badge}
                </span>
              </div>

              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem', height: '28px' }}>
                {item.subtitle}
              </p>

              {/* Reply Box */}
              <div style={{ 
                background: 'rgba(0,0,0,0.5)', 
                padding: '1rem', 
                borderRadius: '12px', 
                border: '1px solid rgba(255,255,255,0.1)',
                minHeight: '80px',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff', margin: 0, lineHeight: 1.4 }}>
                  "{item.content}"
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button 
                onClick={() => handleCopy(item.content, item.key)}
                className="btn-primary"
                style={{ flex: 1, padding: '0.6rem 0.8rem', fontSize: '0.8rem', justifyContent: 'center' }}
              >
                {copiedKey === item.key ? <Check size={14} /> : <Copy size={14} />}
                {copiedKey === item.key ? 'COPIED!' : 'COPY LINE'}
              </button>

              <button 
                onClick={() => handleSpeak(item.content, item.key)}
                className="btn-secondary"
                title="Listen to tone & cadence"
                style={{ padding: '0.6rem', color: speakingKey === item.key ? 'var(--accent-gold)' : 'var(--text-main)' }}
              >
                <Volume2 size={16} />
              </button>

              {onSendToPractice && (
                <button 
                  onClick={() => onSendToPractice(item.content)}
                  className="btn-secondary"
                  title="Test line in Practice Arena"
                  style={{ padding: '0.6rem' }}
                >
                  <Send size={16} />
                </button>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
