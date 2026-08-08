import React, { useState } from 'react';
import { Award, Copy, Check, Flame, Volume2, Search, Zap, Send, ShieldAlert, Sparkles } from 'lucide-react';
import { EXPANDED_PLAYBOOK_CATEGORIES } from '../services/playbookData';

export default function PlaybookVault({ onSendToPractice }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [copiedKey, setCopiedKey] = useState(null);
  const [speakingKey, setSpeakingKey] = useState(null);

  const categories = ['ALL', 'Boyfriend Tests', 'Story Hooks', 'Dry Energy', 'Date Escalation', 'Shit-Test', 'Ghost Revival', 'Flake Recovery'];

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSpeak = (text, key) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.88;
      utterance.pitch = 0.92;
      setSpeakingKey(key);
      utterance.onend = () => setSpeakingKey(null);
      window.speechSynthesis.speak(utterance);
    }
  };

  // Filter sections by selected category and search input
  const filteredSections = EXPANDED_PLAYBOOK_CATEGORIES.filter((section) => {
    const matchesCategory = selectedCategory === 'ALL' || section.categoryTag === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.lines.some(l => l.line.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '1.75rem' }}>
      
      {/* Title Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ padding: '0.6rem', borderRadius: '12px', background: 'rgba(255,183,3,0.15)', border: '1px solid rgba(255,183,3,0.3)' }}>
            <Award size={26} color="var(--accent-gold)" />
          </div>
          <div>
            <h2 style={{ fontSize: '1.4rem', margin: 0 }} className="gradient-text-gold">
              Master Playbook & Emergency Vault (35+ Lines)
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
              Searchable, battle-tested lines for every texting scenario, test, and date escalation
            </p>
          </div>
        </div>

        <span className="badge badge-gold" style={{ fontSize: '0.75rem' }}>
          <Zap size={14} /> FRAME CONTROL APPROVED
        </span>
      </div>

      {/* Search Bar & Category Tabs */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        
        {/* Search Input */}
        <div style={{ position: 'relative' }}>
          <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search lines by keyword (e.g. 'boyfriend', 'dress', 'ghost', 'drinks', 'coffee')..."
            style={{ paddingLeft: '2.6rem', fontSize: '0.9rem' }}
          />
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}
              style={{ fontSize: '0.75rem', padding: '0.35rem 0.8rem', borderRadius: '50px', border: 'none' }}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Playbook Sections List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {filteredSections.map((section, sIdx) => (
          <div key={section.id} className="glass-panel" style={{ padding: '1.25rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-gold)' }}>
                {section.title}
              </h3>
              <span className="badge badge-flame" style={{ fontSize: '0.65rem' }}>
                {section.categoryTag}
              </span>
            </div>

            {/* Golden Rule Banner */}
            <p style={{ fontSize: '0.8rem', color: 'var(--accent-crimson)', fontWeight: 600, marginBottom: '1rem', background: 'rgba(255,42,95,0.1)', padding: '0.45rem 0.85rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-crimson)' }}>
              ⚠️ GOLDEN RULE: {section.rule}
            </p>

            {/* Lines List Grid */}
            <div className="grid-2" style={{ gap: '0.85rem' }}>
              {section.lines.map((item, lIdx) => {
                const uniqueKey = `${section.id}-${lIdx}`;
                return (
                  <div 
                    key={lIdx}
                    style={{
                      background: 'rgba(10,12,20,0.85)',
                      padding: '0.9rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid rgba(255,255,255,0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      justify: 'space-between',
                      gap: '0.75rem'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                        <span className="badge badge-gold" style={{ fontSize: '0.6rem' }}>
                          {item.tag}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 500, margin: 0, lineHeight: 1.4 }}>
                        "{item.line}"
                      </p>
                    </div>

                    {/* Action Bar */}
                    <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'flex-end', paddingTop: '0.4rem', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                      <button 
                        onClick={() => handleCopy(item.line, uniqueKey)}
                        className="btn-primary"
                        style={{ padding: '0.4rem 0.75rem', fontSize: '0.75rem' }}
                      >
                        {copiedKey === uniqueKey ? <Check size={14} /> : <Copy size={14} />}
                        {copiedKey === uniqueKey ? 'COPIED' : 'COPY'}
                      </button>

                      <button 
                        onClick={() => handleSpeak(item.line, uniqueKey)}
                        className="btn-secondary"
                        title="Listen to cadence & tone"
                        style={{ padding: '0.4rem 0.6rem', color: speakingKey === uniqueKey ? 'var(--accent-gold)' : 'var(--text-main)' }}
                      >
                        <Volume2 size={14} />
                      </button>

                      {onSendToPractice && (
                        <button 
                          onClick={() => onSendToPractice(item.line)}
                          className="btn-secondary"
                          title="Practice this line in Arena"
                          style={{ padding: '0.4rem 0.6rem' }}
                        >
                          <Send size={14} />
                        </button>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        ))}

        {filteredSections.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
            No lines found matching your search term. Try searching for "boyfriend", "ghost", or "drinks".
          </div>
        )}

      </div>

    </div>
  );
}
