import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Landing() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'clamp(60px, 10vw, 100px) clamp(12px, 5vw, 24px) clamp(40px, 8vw, 60px)',
        position: 'relative'
      }}>
        {/* Animated orbs */}
        <div style={{
          position: 'absolute', top: '15%', left: '10%', width: '400px', height: '400px',
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.15), transparent)',
          filter: 'blur(60px)', animation: 'float 6s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute', bottom: '20%', right: '10%', width: '300px', height: '300px',
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.12), transparent)',
          filter: 'blur(60px)', animation: 'float 8s ease-in-out infinite reverse'
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)',
            borderRadius: '999px', padding: 'clamp(4px, 2vw, 6px) clamp(12px, 4vw, 18px)', marginBottom: 'clamp(16px, 4vw, 32px)',
            fontSize: 'clamp(0.7rem, 2vw, 0.85rem)', color: 'var(--indigo-light)', fontWeight: 500,
            flexWrap: 'wrap', justifyContent: 'center'
          }}>
            🚀 AI-Powered Interview Preparation Platform
          </div>

          <h1 style={{ fontSize: 'clamp(1.8rem, 7vw, 4rem)', lineHeight: 1.1, marginBottom: 'clamp(16px, 3vw, 24px)', letterSpacing: '-0.02em' }}>
            Ace Your Next Interview<br />
            <span className="gradient-text">with AI Coaching</span>
          </h1>

          <p style={{
            fontSize: 'clamp(0.9rem, 2.2vw, 1.15rem)', color: 'var(--text-secondary)',
            maxWidth: '600px', margin: '0 auto clamp(32px, 6vw, 48px)', lineHeight: 1.7
          }}>
            Practice real interview questions, get instant AI feedback, and track your improvement.
            Simulate HR, Technical & Behavioral interviews with voice support.
          </p>

          <div style={{ display: 'flex', gap: 'clamp(8px, 3vw, 16px)', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 'clamp(40px, 8vw, 72px)' }}>
            {user ? (
              <button className="btn btn-primary btn-lg" onClick={() => navigate('/interview')}>
                🎯 Start Interview
              </button>
            ) : (
              <>
                <Link to="/register" className="btn btn-primary btn-lg">Get Started Free →</Link>
                <Link to="/login" className="btn btn-outline btn-lg">Login</Link>
              </>
            )}
          </div>

          {/* Stats Row */}
          <div style={{
            display: 'flex', gap: 'clamp(24px, 8vw, 48px)', justifyContent: 'center', marginTop: 0,
            flexWrap: 'wrap'
          }}>
            {[
              { num: '500+', label: 'Interview Questions' },
              { num: '3', label: 'Interview Types' },
              { num: 'AI', label: 'Powered Feedback' },
              { num: '100%', label: 'Free Practice' }
            ].map(stat => (
              <div key={stat.label} style={{ textAlign: 'center', minWidth: '80px' }}>
                <div style={{ fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', fontWeight: 800, background: 'var(--gradient-main)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.num}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)', marginTop: '4px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: 'clamp(60px, 10vw, 80px) clamp(12px, 5vw, 24px)', background: 'rgba(13,18,32,0.5)' }}>
        <div className="container">
          <div className="page-hero">
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: 'clamp(12px, 2vw, 16px)' }}>Why <span className="gradient-text">InterviewAI</span>?</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>Everything you need to land your dream job</p>
          </div>
          <div className="grid-3">
            {[
              { icon: '🤖', title: 'AI-Powered Feedback', desc: 'Get instant, detailed feedback on every answer with keyword analysis, score breakdown, and personalized tips.', color: 'var(--indigo)' },
              { icon: '🎤', title: 'Voice Recognition', desc: 'Speak your answers naturally. Our speech-to-text converts and analyzes your verbal communication skills.', color: 'var(--purple)' },
              { icon: '⏱️', title: 'Real Interview Timer', desc: 'Practice under realistic time pressure. Each question has time limits just like real interviews.', color: 'var(--cyan)' },
              { icon: '📊', title: 'Performance Dashboard', desc: 'Track your scores, see progress over time, and identify your strengths and areas for improvement.', color: 'var(--emerald)' },
              { icon: '💼', title: '3 Interview Types', desc: 'Practice HR, Technical, and Behavioral interviews. Master all aspects of the interview process.', color: 'var(--amber)' },
              { icon: '🎯', title: 'Smart Question Bank', desc: '500+ curated questions across difficulty levels — Easy, Medium, Hard — for all career stages.', color: 'var(--rose)' }
            ].map(f => (
              <div key={f.title} className="glass-card" style={{ padding: 'clamp(20px, 4vw, 32px)', cursor: 'default' }}>
                <div style={{
                  width: 'clamp(44px, 8vw, 56px)', height: 'clamp(44px, 8vw, 56px)', borderRadius: '16px', fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `${f.color}22`, marginBottom: 'clamp(14px, 2vw, 20px)', border: `1px solid ${f.color}44`
                }}>{f.icon}</div>
                <h3 style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', marginBottom: '10px' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.85rem, 1.8vw, 0.9rem)', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: 'clamp(60px, 10vw, 80px) clamp(12px, 5vw, 24px)' }}>
        <div className="container">
          <div className="page-hero">
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: 'clamp(12px, 2vw, 16px)' }}>How It <span className="gradient-text">Works</span></h2>
          </div>
          <div style={{ display: 'flex', gap: '0', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
            {[
              { step: '01', icon: '👤', title: 'Create Account', desc: 'Sign up in 30 seconds — completely free.' },
              { step: '02', icon: '🎯', title: 'Pick Interview Type', desc: 'Choose HR, Technical, or Behavioral interview.' },
              { step: '03', icon: '💬', title: 'Answer Questions', desc: 'Type or speak your answers with real-time timer.' },
              { step: '04', icon: '🏆', title: 'Get AI Feedback', desc: 'Receive score, keywords, and improvement tips.' }
            ].map((s, i) => (
              <div key={s.step} style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                <div style={{ textAlign: 'center', width: 'clamp(160px, 25vw, 200px)', padding: 'clamp(16px, 3vw, 24px) clamp(12px, 3vw, 16px)' }}>
                  <div style={{
                    width: 'clamp(56px, 10vw, 70px)', height: 'clamp(56px, 10vw, 70px)', margin: '0 auto clamp(12px, 2vw, 16px)',
                    background: 'var(--gradient-main)', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', boxShadow: 'var(--shadow-glow)'
                  }}>{s.icon}</div>
                  <div style={{ color: 'var(--indigo-light)', fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)', fontWeight: 700, marginBottom: '8px', letterSpacing: '0.1em' }}>STEP {s.step}</div>
                  <h3 style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.75rem, 1.5vw, 0.82rem)' }}>{s.desc}</p>
                </div>
                {i < 3 && (
                  <div style={{ color: 'var(--indigo)', fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', opacity: 0.4, padding: '0 clamp(4px, 1vw, 8px)' }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(60px, 10vw, 80px) clamp(12px, 5vw, 24px)', textAlign: 'center' }}>
        <div style={{
          maxWidth: '700px', margin: '0 auto', padding: 'clamp(40px, 8vw, 60px)',
          background: 'var(--gradient-card)', borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--border)'
        }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: 'clamp(12px, 2vw, 16px)' }}>Ready to <span className="gradient-text">Ace Your Interview</span>?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'clamp(24px, 5vw, 36px)', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>Join thousands of candidates who improved their interview performance with AI.</p>
          <Link to="/register" className="btn btn-primary btn-lg">Start Practicing Now →</Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: 'clamp(20px, 3vw, 32px) clamp(12px, 5vw, 24px)', borderTop: '1px solid var(--border)', textAlign: 'center', color: 'var(--text-muted)', fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)' }}>
        <p>© 2024 InterviewAI — Smart Interview Platform | Built with React + Node.js + AI</p>
      </footer>
    </div>
  );
}
