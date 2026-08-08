import React from 'react';
import { Smartphone, X, Share, MoreVertical, Wifi, ArrowRight, Check } from 'lucide-react';

export default function InstallModal({ isOpen, onClose }) {
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
      <div className="glass-panel animate-fade-in" style={{ maxWidth: '520px', width: '100%', padding: '1.5rem', position: 'relative', border: '1px solid var(--accent-gold)' }}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
          <Smartphone size={24} color="var(--accent-gold)" />
          <h2 style={{ fontSize: '1.25rem', margin: 0 }} className="gradient-text-gold">
            Install RIZZGOD AI on Your Phone
          </h2>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
          Follow these quick steps to run RizzGod AI as a native app on your iPhone or Android:
        </p>

        {/* Step 1: Wi-Fi Access */}
        <div style={{ background: 'rgba(255,183,3,0.08)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,183,3,0.2)', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--accent-gold)', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
            <Wifi size={16} /> STEP 1: Connect Phone to PC Wi-Fi
          </div>
          <p style={{ fontSize: '0.8rem', color: '#e2e8f0', margin: 0, lineHeight: 1.4 }}>
            Make sure your phone and PC are connected to the same Wi-Fi network. Open your phone's browser and type your PC's IP address (e.g. <code style={{ color: 'var(--accent-gold)', background: 'rgba(0,0,0,0.5)', padding: '2px 6px', borderRadius: '4px' }}>http://192.168.x.x:3000</code>).
          </p>
        </div>

        {/* Step 2: Install as PWA */}
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.25rem' }}>
          <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.75rem', color: '#fff' }}>
            STEP 2: Add to Home Screen (Instant App)
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            
            {/* iOS */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.8rem', color: 'var(--text-main)' }}>
              <span className="badge badge-gold" style={{ flexShrink: 0 }}>iPhone / iOS</span>
              <span>
                In Safari, tap the <strong>Share button</strong> <Share size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> at the bottom, scroll down and tap <strong>"Add to Home Screen"</strong>.
              </span>
            </div>

            {/* Android */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.8rem', color: 'var(--text-main)' }}>
              <span className="badge badge-flame" style={{ flexShrink: 0 }}>Android</span>
              <span>
                In Chrome, tap the <strong>3 dots menu</strong> <MoreVertical size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> and select <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.
              </span>
            </div>

          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={onClose} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            <Check size={16} /> Got It! Close Guide
          </button>
        </div>

      </div>
    </div>
  );
}
