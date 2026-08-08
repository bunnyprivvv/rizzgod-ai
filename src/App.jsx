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

import { analyzeChatOrStory } from './services/aiEngine';
import { Flame, Sparkles, Smartphone, Download, Check } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('analyzer'); // 'analyzer', 'story', 'practice', 'playbook'
  const [apiKey, setApiKey] = useState(localStorage.getItem('RIZZGOD_GEMINI_KEY') || '');
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);

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
        hasApiKey={!!apiKey}
        isInstallable={!!deferredPrompt}
      />

      {/* Main Content Area */}
      <main className="main-content">

        {/* Hero Motivational & Install Banner */}
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
            {deferredPrompt && !isInstalled ? (
              <button onClick={handleNativeInstall} className="btn-primary animate-pulse-slow" style={{ fontSize: '0.85rem', padding: '0.6rem 1.1rem' }}>
                <Download size={16} /> 1-CLICK INSTALL APP
              </button>
            ) : isInstalled ? (
              <span className="badge badge-gold" style={{ padding: '0.5rem 0.8rem', fontSize: '0.75rem' }}>
                <Check size={14} /> APP INSTALLED
              </span>
            ) : (
              <button onClick={() => setIsInstallModalOpen(true)} className="btn-secondary" style={{ fontSize: '0.8rem', padding: '0.5rem 0.9rem' }}>
                <Smartphone size={15} color="var(--accent-gold)" /> Phone App Guide
              </button>
            )}

            <button onClick={() => setActiveTab('story')} className="btn-intense" style={{ fontSize: '0.85rem', padding: '0.6rem 1.1rem' }}>
              🔥 Story Reply Hooks
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

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '1.5rem 1rem 5rem', borderTop: '1px solid rgba(255,255,255,0.06)', color: 'var(--text-dim)', fontSize: '0.75rem' }}>
        <p>RIZZGOD AI — Powered by Google Gemini Vision & Elite High-Tension Wingman Intelligence</p>
      </footer>
    </div>
  );
}
