import React, { useState } from 'react';
import { Camera, Upload, Sparkles, RefreshCw, MessageSquare, Image, Check } from 'lucide-react';
import { SCENARIO_PRESETS } from '../services/playbookData';

export default function ScreenshotAnalyzer({ onAnalyze, isLoading }) {
  const [imagePreview, setImagePreview] = useState(null);
  const [textInput, setTextInput] = useState('');
  const [mode, setMode] = useState('chat'); // 'chat' or 'story'
  const [isScanning, setIsScanning] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        triggerScanAnimation();
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerScanAnimation = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2200);
  };

  const handleSelectPreset = (preset) => {
    setTextInput(preset.girlText);
    setMode(preset.category === 'Story Hook' ? 'story' : 'chat');
    triggerScanAnimation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!textInput && !imagePreview) return;

    onAnalyze({
      text: textInput,
      imageBase64: imagePreview,
      mode: mode
    });
  };

  return (
    <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
      
      {/* Title */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Camera size={22} color="var(--accent-gold)" />
          <div>
            <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Screenshot & Chat Vision Scanner</h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Drop a screenshot of a DM, text, or Story post to decode her subtext</p>
          </div>
        </div>

        {/* Mode Selector */}
        <div style={{ display: 'flex', gap: '0.4rem', background: 'rgba(0,0,0,0.4)', padding: '0.25rem', borderRadius: '10px' }}>
          <button 
            type="button"
            onClick={() => setMode('chat')}
            className={mode === 'chat' ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem', border: 'none' }}
          >
            <MessageSquare size={14} /> DM / Chat
          </button>
          <button 
            type="button"
            onClick={() => setMode('story')}
            className={mode === 'story' ? 'btn-intense' : 'btn-secondary'}
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem', border: 'none' }}
          >
            <Sparkles size={14} /> Story Reply
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid-2" style={{ gap: '1.25rem' }}>
          
          {/* Upload / Image Zone */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              1. Upload Screenshot (Optional)
            </label>
            
            <div 
              className={`glass-panel ${isScanning ? 'scanner-overlay' : ''}`}
              style={{
                height: '210px',
                border: '2px dashed rgba(255,255,255,0.15)',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justify: 'center',
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden',
                background: imagePreview ? '#000' : 'rgba(0,0,0,0.2)'
              }}
            >
              {imagePreview ? (
                <>
                  <img 
                    src={imagePreview} 
                    alt="Screenshot preview" 
                    style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.85 }} 
                  />
                  <button 
                    type="button"
                    onClick={() => setImagePreview(null)}
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'rgba(0,0,0,0.75)',
                      color: '#fff',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '50%',
                      width: '28px',
                      height: '28px',
                      cursor: 'pointer',
                      fontSize: '0.8rem'
                    }}
                  >
                    ✕
                  </button>
                </>
              ) : (
                <label style={{ cursor: 'pointer', textAlign: 'center', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                  <Upload size={32} color="var(--accent-gold)" style={{ marginBottom: '0.5rem' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Click or Drag Screenshot Here</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Supports PNG, JPG, WebP</span>
                  <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
                </label>
              )}
            </div>
          </div>

          {/* Text Input & Quick Presets */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              2. Text Content / Story Caption
            </label>

            <textarea 
              rows={4}
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder={mode === 'story' ? "e.g. Posted a stunning mirror selfie in a black dress..." : "e.g. She said: 'haha you're cute but I have a boyfriend'"}
              style={{ resize: 'none', minHeight: '120px' }}
            />

            {/* Quick Sample Presets */}
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>
                OR TRY SAMPLE TEST CASES:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {SCENARIO_PRESETS.slice(0, 4).map((preset) => (
                  <button 
                    key={preset.id}
                    type="button"
                    onClick={() => handleSelectPreset(preset)}
                    className="btn-secondary"
                    style={{ fontSize: '0.7rem', padding: '0.3rem 0.6rem', borderRadius: '6px' }}
                  >
                    {preset.title}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Submit Bar */}
        <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem', alignItems: 'center' }}>
          <button 
            type="submit" 
            className={mode === 'story' ? 'btn-intense' : 'btn-primary'}
            disabled={isLoading || (!textInput && !imagePreview)}
            style={{ width: '100%', maxWidth: '320px', justifyContent: 'center' }}
          >
            {isLoading ? (
              <>
                <RefreshCw size={18} className="spin-icon" style={{ animation: 'spin 1s linear infinite' }} />
                ANALYZING SUBTEXT...
              </>
            ) : (
              <>
                <Sparkles size={18} />
                DECODE & CRAFT REPLIES
              </>
            )}
          </button>
        </div>
      </form>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

    </div>
  );
}
