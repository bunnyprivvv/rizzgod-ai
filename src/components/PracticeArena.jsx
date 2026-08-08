import React, { useState } from 'react';
import { MessageSquare, Send, Sparkles, Flame, ShieldAlert, Award, RefreshCw, Zap } from 'lucide-react';

const PERSONAS = [
  {
    id: 'bf-test',
    name: 'Chloe (The Boyfriend Tester)',
    avatar: '💁‍♀️',
    initialMsg: 'Haha you are cute but I have a boyfriend lol',
    vibe: 'Shit-Test',
    difficulty: 'Hard'
  },
  {
    id: 'sassy',
    name: 'Maya (The Sassy Hard-to-Get)',
    avatar: '💅',
    initialMsg: 'Are you always this flirty with girls or do you just use templates on everyone?',
    vibe: 'Playful Banter',
    difficulty: 'Medium'
  },
  {
    id: 'dry',
    name: 'Jessica (The Dry Texter)',
    avatar: '😒',
    initialMsg: 'haha yeah cool',
    vibe: 'Dry Energy',
    difficulty: 'Extreme'
  },
  {
    id: 'story-girl',
    name: 'Sophia (The IG Story Queen)',
    avatar: '✨',
    initialMsg: '[Posted a mirror selfie in a black dress looking at her phone]',
    vibe: 'Story Hook',
    difficulty: 'Medium'
  }
];

export default function PracticeArena({ initialLine }) {
  const [activePersona, setActivePersona] = useState(PERSONAS[0]);
  const [chatHistory, setChatHistory] = useState([
    { sender: 'girl', text: PERSONAS[0].initialMsg, time: 'Just now' }
  ]);
  const [userInput, setUserInput] = useState(initialLine || '');
  const [tensionScore, setTensionScore] = useState(65);
  const [lastFeedback, setLastFeedback] = useState(null);
  const [isAiReplying, setIsAiReplying] = useState(false);

  const handleSelectPersona = (persona) => {
    setActivePersona(persona);
    setChatHistory([{ sender: 'girl', text: persona.initialMsg, time: 'Just now' }]);
    setTensionScore(50);
    setLastFeedback(null);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userText = userInput.trim();
    const newHistory = [...chatHistory, { sender: 'user', text: userText, time: 'Just now' }];
    setChatHistory(newHistory);
    setUserInput('');
    setIsAiReplying(true);

    // Evaluate user's text for Wingman Feedback & Tension Gain
    const lower = userText.toLowerCase();
    let tensionGain = 10;
    let rank = 'A';
    let feedback = 'Good confident frame. You pushed the conversation forward.';

    if (lower.includes('why are you still texting') || lower.includes('steal') || lower.includes('coffee') || lower.includes('trouble') || lower.includes('dress') || lower.includes('earn')) {
      tensionGain = 25;
      rank = 'S RANK 🔥';
      feedback = 'EXCELLENT FRAME FLIP! You called out her bluff with zero hesitation. High attraction generated.';
    } else if (lower.includes('sorry') || lower.includes('my bad') || lower.includes('what do you like') || lower.includes('how was your day')) {
      tensionGain = -15;
      rank = 'WEAK FRAME ⚠️';
      feedback = 'WARNING: You acted apologetic or turned into an interviewer. Never ask generic questions when she tests you!';
    } else if (lower.length > 80) {
      tensionGain = -10;
      rank = 'OVER-INVESTED ⚠️';
      feedback = 'Your message was too long compared to hers. Keep your replies concise and high-impact.';
    }

    const newTension = Math.min(100, Math.max(10, tensionScore + tensionGain));
    setTensionScore(newTension);
    setLastFeedback({ rank, feedback });

    // Simulate AI Girl reply after 1.2s
    setTimeout(() => {
      let reply = "Haha okay wow, you are definitely not like other guys.";
      if (newTension >= 80) {
        reply = "Okay stop... you are making me blush now. When are you taking me out?";
      } else if (newTension <= 35) {
        reply = "K kinda boring honestly lol";
      } else if (activePersona.id === 'bf-test') {
        reply = "Lol you are ridiculous. He doesn't need to know anyway 😉";
      }

      setChatHistory((prev) => [...prev, { sender: 'girl', text: reply, time: 'Just now' }]);
      setIsAiReplying(false);
    }, 1200);
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '1.5rem' }}>
      
      {/* Title */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <MessageSquare size={22} color="var(--accent-gold)" />
          <div>
            <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Interactive Practice Arena</h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Test your lines against realistic AI personas with live Tension Coaching</p>
          </div>
        </div>

        {/* Tension Meter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(0,0,0,0.4)', padding: '0.5rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,183,3,0.2)' }}>
          <Flame size={20} color={tensionScore > 70 ? 'var(--accent-flame)' : 'var(--accent-gold)'} />
          <div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700 }}>TENSION LEVEL</div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }}>{tensionScore}%</div>
          </div>
        </div>
      </div>

      <div className="grid-2" style={{ gap: '1.25rem' }}>
        
        {/* Persona Selector */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            Choose Target Persona:
          </label>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {PERSONAS.map((p) => (
              <div 
                key={p.id}
                onClick={() => handleSelectPersona(p)}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  background: activePersona.id === p.id ? 'rgba(255,183,3,0.12)' : 'rgba(0,0,0,0.3)',
                  border: activePersona.id === p.id ? '1px solid var(--accent-gold)' : '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.4rem' }}>{p.avatar}</span>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{p.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Vibe: {p.vibe}</div>
                  </div>
                </div>

                <span className="badge badge-gold" style={{ fontSize: '0.65rem' }}>{p.difficulty}</span>
              </div>
            ))}
          </div>

          {/* Wingman Coach Feedback Panel */}
          {lastFeedback && (
            <div className="glass-panel animate-fade-in" style={{ padding: '1rem', marginTop: '0.5rem', borderLeft: '4px solid var(--accent-flame)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-gold)' }}>WINGMAN FEEDBACK</span>
                <span className="badge badge-flame">{lastFeedback.rank}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#e2e8f0', margin: 0, lineHeight: 1.4 }}>
                {lastFeedback.feedback}
              </p>
            </div>
          )}
        </div>

        {/* Chat Interface */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '420px', padding: '1rem', background: 'rgba(5,6,10,0.85)' }}>
          
          {/* Chat Header */}
          <div style={{ paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>{activePersona.avatar}</span>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>{activePersona.name}</div>
              <div style={{ fontSize: '0.7rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                ● Active now
              </div>
            </div>
          </div>

          {/* Chat Stream */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {chatHistory.map((msg, index) => (
              <div 
                key={index}
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%',
                  background: msg.sender === 'user' ? 'linear-gradient(135deg, #ffb703 0%, #ff5400 100%)' : 'rgba(255,255,255,0.08)',
                  color: msg.sender === 'user' ? '#000' : '#fff',
                  fontWeight: msg.sender === 'user' ? 600 : 400,
                  padding: '0.75rem 1rem',
                  borderRadius: msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                  fontSize: '0.9rem',
                  boxShadow: msg.sender === 'user' ? '0 4px 15px rgba(255,183,3,0.3)' : 'none'
                }}
              >
                {msg.text}
              </div>
            ))}
            
            {isAiReplying && (
              <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.08)', padding: '0.5rem 0.8rem', borderRadius: '12px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {activePersona.name.split(' ')[0]} is typing...
              </div>
            )}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <input 
              type="text" 
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your bold reply..."
              style={{ flex: 1, padding: '0.6rem 0.8rem', fontSize: '0.85rem' }}
            />
            <button type="submit" className="btn-primary" style={{ padding: '0.6rem 1rem', border: 'none' }}>
              <Send size={16} />
            </button>
          </form>

        </div>

      </div>

    </div>
  );
}
