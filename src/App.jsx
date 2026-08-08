import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ScreenshotAnalyzer from './components/ScreenshotAnalyzer';
import AnalysisCard from './components/AnalysisCard';
import ReplyCards from './components/ReplyCards';
import StoryReplyStudio from './components/StoryReplyStudio';
import PracticeArena from './components/PracticeArena';
import PlaybookVault from './components/PlaybookVault';
import ApiKeyModal from './components/ApiKeyModal';
import InstallModal from './components/InstallModal';
import AboutBioModal from './components/AboutBioModal';

import { analyzeChatOrStory } from './services/aiEngine';
import { Flame, Sparkles, Smartphone, Download, Check, HelpCircle, Eye, Zap, Target } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('analyzer'); // 'analyzer', 'story', 'practice', 'playbook'
  const [apiKey, setApiKey] = useState(localStorage.getItem('RIZZGOD_GEMINI_KEY') || '');
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [showBioBanner, setShowBioBanner] = useState(true);

  // Native PWA Install Prompt state
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [practiceLine, setPracticeLine] = useState('');

  useEffect(() => {
    // Listen for PWA install prompt
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleNativeInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      setIsInstallModalOpen(true);
    }
  };

  const handleSaveApiKey = (key) => {
    setApiKey(key);
    localStorage.setItem('RIZZGOD_GEMINI_KEY', key);
  };

  const handleAnalyze = async (payload) => {
    setIsLoading(true);
    try {
      const result = await analyzeChatOrStory({ ...payload, apiKey });
      setAnalysisResult(result);
    } catch (err) {
      console.error('Analysis failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendToPractice = (line) => {
    setPracticeLine(line);
    setActiveTab('practice');
  };

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <Header 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenApiKey={() => setIsApiKeyModalOpen(true)}
        onOpenInstall={handleNativeInstall}
        onOpenAbout={() => setIsAboutModalOpen(true)}
        hasApiKey={!!apiKey}
        isInstallable={!!deferredPrompt}
      />

      {/* Main Content Area */}
      <main className="main-content">

        {/* Website Bio & Mission Banner */}
        {showBioBanner && (
          <div className="glass-panel" style={{ padding: '1.25rem 1.5rem', marginBottom: '1.5rem', borderLeft: '4px solid var(--accent-gold)', background: 'linear-gradient(135deg, rgba(255,183,3,0.08) 0%, rgba(10,12,20,0.85) 100%)', position: 'relative' }}>
            <button 
              onClick={() => setShowBioBanner(false)}
              style={{ position: 'absolute', top: '12px', right: '12px', background: 'transparent', border: 'none', color: 'var(--text-dim)', cursor: 'pointer', fontSize: '0.8rem' }}
              title="Dismiss bio banner"
            >
              ✕
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <span className="badge badge-gold"><Flame size={13} /> ABOUT RIZZGOD AI</span>
              <h2 style={{ fontSize: '1.1rem', margin: 0 }} className="gradient-text-gold">
                Elite AI Texting Coach & DM Subtext Decoder
              </h2>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#e2e8f0', margin: 0, lineHeight: 1.55 }}>
              <strong>What this app does:</strong> RIZZGOD AI analyzes DM screenshots, text messages, and Instagram story posts to decode female subtext, spot hidden openings, and handle defense mechanisms (like <em>"I have a boyfriend"</em> or dry energy). It generates 3 high-tension response options — <strong>The Teaser</strong>, <strong>The Bold Call-Out</strong>, and <strong>The High-Tension Drop</strong> — designed to push the interaction forward to dates.
            </p>

            <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <button onClick={() => setIsAboutModalOpen(true)} className="btn-secondary" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>
                <HelpCircle size={14} color="var(--accent-gold)" /> Full App Bio & Guide
              </button>
              {deferredPrompt && !isInstalled && (
                <button onClick={handleNativeInstall} className="btn-primary animate-pulse-slow" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>
                  <Download size={14} /> 1-CLICK INSTALL APP
                </button>
              )}
            </div>
          </div>
        )}

        {/* Hero Motivational Banner */}
        <div className="glass-panel-glow glass-panel" style={{ padding: '1.15rem 1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', background: 'linear-gradient(135deg, rgba(255,183,3,0.12) 0%, rgba(255,42,95,0.1) 100%)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
              <span className="badge badge-gold"><Flame size={14} /> WINGMAN RULE #1</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Frame Control is Everything</span>
            </div>
            <h2 style={{ fontSize: '1.2rem', margin: 0 }} className="gradient-text-gold">
              Never Apologize. Never Act Desperate. Always Escalate.
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <button onClick={() => setActiveTab('story')} className="btn-intense" style={{ fontSize: '0.85rem', padding: '0.6rem 1.1rem' }}>
              🔥 Story Reply Hooks
            </button>
            <button onClick={() => setActiveTab('practice')} className="btn-primary" style={{ fontSize: '0.85rem', padding: '0.6rem 1.1rem' }}>
              ⚡ Practice Arena
            </button>
          </div>
        </div>

        {/* TAB 1: Screenshot & DM Analyzer */}
        {activeTab === 'analyzer' && (
          <div>
            <ScreenshotAnalyzer onAnalyze={handleAnalyze} isLoading={isLoading} />
            
            {analysisResult && (
              <>
                <AnalysisCard analysis={analysisResult.analysis} />
                <ReplyCards options={analysisResult.options} onSendToPractice={handleSendToPractice} />
              </>
            )}
          </div>
        )}

        {/* TAB 2: Story Reply Studio (Flirty & Intense) */}
        {activeTab === 'story' && (
          <StoryReplyStudio onSendToPractice={handleSendToPractice} />
        )}

        {/* TAB 3: Interactive Practice Arena */}
        {activeTab === 'practice' && (
          <PracticeArena initialLine={practiceLine} />
        )}

        {/* TAB 4: Playbook & Vault */}
        {activeTab === 'playbook' && (
          <PlaybookVault onSendToPractice={handleSendToPractice} />
        )}

      </main>

      {/* API Key Modal */}
      <ApiKeyModal 
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        apiKey={apiKey}
        onSaveApiKey={handleSaveApiKey}
      />

      {/* Phone Installation Modal */}
      <InstallModal 
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
      />

      {/* About App Bio Modal */}
      <AboutBioModal 
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '1.5rem 1rem 5rem', borderTop: '1px solid rgba(255,255,255,0.06)', color: 'var(--text-dim)', fontSize: '0.75rem' }}>
        <p>RIZZGOD AI — Powered by Google Gemini Vision & Elite High-Tension Wingman Intelligence</p>
      </footer>
    </div>
  );
}
