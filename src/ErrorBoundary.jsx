import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("RIZZGOD AI Error Boundary Caught Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#07080c',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
          fontFamily: 'sans-serif'
        }}>
          <div style={{
            background: 'rgba(22, 24, 36, 0.95)',
            padding: '2rem',
            borderRadius: '20px',
            border: '1px solid rgba(255, 42, 95, 0.4)',
            maxWidth: '500px',
            boxShadow: '0 0 30px rgba(255, 42, 95, 0.3)'
          }}>
            <h1 style={{ color: '#ff2a5f', fontSize: '1.5rem', marginBottom: '1rem' }}>
              🔥 RIZZGOD AI System Refresh Required
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              A temporary browser cache glitch occurred. Click below to refresh and clear cache.
            </p>
            <button 
              onClick={() => {
                localStorage.clear();
                window.location.reload(true);
              }}
              style={{
                background: 'linear-gradient(135deg, #ffb703 0%, #ff5400 100%)',
                color: '#000',
                fontWeight: 'bold',
                padding: '0.8rem 1.5rem',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              🔄 RELOAD & CLEAR BROWSER CACHE
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
