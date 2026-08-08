import React, { useState } from 'react';
import { Sparkles, Flame, Heart, Camera, Copy, Check, Volume2, Send, Zap } from 'lucide-react';

const STORY_PRESETS = [
  {
    id: 'outfit',
    name: 'Mirror Selfie / Outfit Check',
    icon: '👗',
    desc: 'Posted a hot outfit, dress, or mirror selfie',
    defaultCaption: 'Looking way too good in this black dress for a regular Saturday night',
    teaser: 'You really wore that dress just to make my feed look better? Appreciate the effort.',
    boldCallOut: 'Illegal levels of trouble in that dress. You definitely shouldn’t be left unsupervised tonight.',
    highTensionDrop: 'You look dangerous in black. Next time you dress like that, you’re letting me take you out properly.'
  },
  {
    id: 'gym',
    name: 'Gym & Fitness Clip',
    icon: '🏋️‍♀️',
    desc: 'Posted a workout clip, squat, or gym selfie',
    defaultCaption: 'Leg day survived 💪',
    teaser: 'Not bad form... but I still bet I can out-lift you without breaking a sweat.',
    boldCallOut: 'Are you actually working out or just trying to show off for my DMs?',
    highTensionDrop: 'Keep training like that and I’ll have to recruit you as my personal workout partner... if you can handle my intensity.'
  },
  {
    id: 'beach',
    name: 'Vacation / Beach / Bikini',
    icon: '🏖️',
    desc: 'Poolside, beach bikini, or tropical trip sunset',
    defaultCaption: 'Paradise vibes 🌴☀️',
    teaser: 'It’s actually rude to post sunless envy while I’m working. You owe me a cocktail for that.',
    boldCallOut: 'You’re definitely not coming back from that trip innocent, are you?',
    highTensionDrop: 'That view is almost as stunning as you... but you look like you’re missing some serious company right next to you.'
  },
  {
    id: 'nightlife',
    name: 'Night Out & Cocktails',
    icon: '🍸',
    desc: 'Holding a drink at a club/bar with friends',
    defaultCaption: 'First round on us 🍹',
    teaser: 'Who allowed you out of the house looking that dangerous?',
    boldCallOut: 'That smile looks like a secret you shouldn’t be keeping from me.',
    highTensionDrop: 'Save a drink for me. Because if I was there, we wouldn’t be sitting at separate tables.'
  },
  {
    id: 'latenight',
    name: 'Late Night / Moody Song',
    icon: '🌙',
    desc: 'Dim lighting, late night selfie, playing a song',
    defaultCaption: '1:00 AM thoughts 🎧',
    teaser: 'Up late thinking about bad decisions, or just thinking about me?',
    boldCallOut: 'That song has way too much tension for 1 AM. Are you trying to drive me crazy?',
    highTensionDrop: 'You shouldn’t be posting moody selfies at this hour unless you’re inviting me over to share the vibe.'
  }
];

export default function StoryReplyStudio({ onSendToPractice }) {
  const [selectedPreset, setSelectedPreset] = useState(STORY_PRESETS[0]);
  const [customDescription, setCustomDescription] = useState(STORY_PRESETS[0].defaultCaption);
  const [copiedKey, setCopiedKey] = useState(null);
  const [intensity, setIntensity] = useState('max'); // 'playful', 'intense', 'max'

  const handleSelect = (preset) => {
    setSelectedPreset(preset);
    setCustomDescription(preset.defaultCaption);
  };

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSpeak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.88;
      utterance.pitch = 0.92;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '1.75rem', borderTop: '4px solid var(--accent-crimson)' }}>
      
      {/* Title */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ padding: '0.6rem', borderRadius: '12px', background: 'rgba(255, 42, 95, 0.2)', border: '1px solid rgba(255, 42, 95, 0.4)' }}>
            <Sparkles size={24} color="var(--accent-crimson)" />
          </div>
          <div>
            <h2 style={{ fontSize: '1.4rem', margin: 0 }} className="gradient-text-flame">
              🔥 Story Reply Hook Studio (Intense Flirtation)
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
              Craft unapologetic, high-tension IG & Snap Story replies designed to bypass small talk and spark immediate flirtation
            </p>
          </div>
        </div>

        <span className="badge badge-crimson" style={{ fontSize: '0.75rem' }}>
          <Flame size={14} /> HIGH TENSION GUARANTEED
        </span>
      </div>

      {/* Preset Selector */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.75rem' }}>
          Select Story Type:
        </label>
        
        <div className="grid-3" style={{ gap: '0.85rem' }}>
          {STORY_PRESETS.map((preset) => (
            <div 
              key={preset.id}
              onClick={() => handleSelect(preset)}
              className="glass-panel"
              style={{
                padding: '0.9rem 1.1rem',
                cursor: 'pointer',
                border: selectedPreset.id === preset.id ? '2px solid var(--accent-crimson)' : '1px solid rgba(255,255,255,0.08)',
                background: selectedPreset.id === preset.id ? 'rgba(255, 42, 95, 0.12)' : 'rgba(0,0,0,0.3)',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{preset.icon}</span>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: selectedPreset.id === preset.id ? '#ffffff' : 'var(--text-main)' }}>
                  {preset.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {preset.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Context Description */}
      <div style={{ marginBottom: '1.75rem' }}>
        <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>
          Describe Story / Caption:
        </label>
        <input 
          type="text" 
          value={customDescription}
          onChange={(e) => setCustomDescription(e.target.value)}
          placeholder="e.g. She posted a photo wearing a red dress with a drink in hand"
        />
      </div>

      {/* Output Results */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Zap size={18} color="var(--accent-flame)" /> High-Tension Story Hooks
          </h3>
          <span style={{ fontSize: '0.8rem', color: 'var(--accent-crimson)', fontWeight: 600 }}>
            Never send emojis (😍/🔥) — Send these lines instead
          </span>
        </div>

        <div className="grid-3" style={{ gap: '1.25rem' }}>
          
          {/* Card 1: The Teaser */}
          <div className="glass-panel" style={{ padding: '1.25rem', background: 'linear-gradient(135deg, rgba(255,183,3,0.08) 0%, rgba(0,0,0,0.5) 100%)', borderColor: 'rgba(255,183,3,0.3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span className="badge badge-gold">1. THE PLAYFUL TEASER</span>
              <Sparkles size={16} color="var(--accent-gold)" />
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Light banter hook</p>
            <div style={{ background: 'rgba(0,0,0,0.6)', padding: '0.9rem', borderRadius: '10px', minHeight: '85px', marginBottom: '1rem' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.4 }}>
                "{selectedPreset.teaser}"
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={() => handleCopy(selectedPreset.teaser, 't1')}
                className="btn-primary"
                style={{ flex: 1, padding: '0.55rem', fontSize: '0.8rem', justifyContent: 'center' }}
              >
                {copiedKey === 't1' ? <Check size={14} /> : <Copy size={14} />}
                {copiedKey === 't1' ? 'COPIED!' : 'COPY'}
              </button>
              <button onClick={() => handleSpeak(selectedPreset.teaser)} className="btn-secondary" style={{ padding: '0.55rem' }}>
                <Volume2 size={14} />
              </button>
            </div>
          </div>

          {/* Card 2: The Bold Call-Out */}
          <div className="glass-panel" style={{ padding: '1.25rem', background: 'linear-gradient(135deg, rgba(255,42,95,0.08) 0%, rgba(0,0,0,0.5) 100%)', borderColor: 'rgba(255,42,95,0.3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span className="badge badge-crimson">2. THE BOLD CALL-OUT</span>
              <Zap size={16} color="var(--accent-crimson)" />
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Direct frame challenge</p>
            <div style={{ background: 'rgba(0,0,0,0.6)', padding: '0.9rem', borderRadius: '10px', minHeight: '85px', marginBottom: '1rem' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.4 }}>
                "{selectedPreset.boldCallOut}"
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={() => handleCopy(selectedPreset.boldCallOut, 't2')}
                className="btn-primary"
                style={{ flex: 1, padding: '0.55rem', fontSize: '0.8rem', justifyContent: 'center' }}
              >
                {copiedKey === 't2' ? <Check size={14} /> : <Copy size={14} />}
                {copiedKey === 't2' ? 'COPIED!' : 'COPY'}
              </button>
              <button onClick={() => handleSpeak(selectedPreset.boldCallOut)} className="btn-secondary" style={{ padding: '0.55rem' }}>
                <Volume2 size={14} />
              </button>
            </div>
          </div>

          {/* Card 3: The High Tension Drop */}
          <div className="glass-panel" style={{ padding: '1.25rem', background: 'linear-gradient(135deg, rgba(255,84,0,0.12) 0%, rgba(138,43,226,0.15) 100%)', borderColor: 'var(--accent-flame)', boxShadow: '0 0 20px rgba(255,84,0,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span className="badge badge-flame">3. HIGH-TENSION DROP</span>
              <Flame size={16} color="var(--accent-flame)" />
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Heavy sexual/flirty escalation</p>
            <div style={{ background: 'rgba(0,0,0,0.6)', padding: '0.9rem', borderRadius: '10px', minHeight: '85px', marginBottom: '1rem' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.4 }}>
                "{selectedPreset.highTensionDrop}"
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={() => handleCopy(selectedPreset.highTensionDrop, 't3')}
                className="btn-intense"
                style={{ flex: 1, padding: '0.55rem', fontSize: '0.8rem', justifyContent: 'center' }}
              >
                {copiedKey === 't3' ? <Check size={14} /> : <Copy size={14} />}
                {copiedKey === 't3' ? 'COPIED!' : 'COPY LINE'}
              </button>
              <button onClick={() => handleSpeak(selectedPreset.highTensionDrop)} className="btn-secondary" style={{ padding: '0.55rem' }}>
                <Volume2 size={14} />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
