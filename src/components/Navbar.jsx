import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export default function Navbar() {
  const { user, authLogout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    authLogout();
    navigate('/login');
    setMobileMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <div className="logo-icon">🧠</div>
          <span>InterviewAI</span>
        </Link>

        {user && (
          <div className="navbar-links">
            <Link to="/dashboard" className={isActive('/dashboard')}>Dashboard</Link>
            <Link to="/interview" className={isActive('/interview')}>Practice</Link>
            <Link to="/history" className={isActive('/history')}>History</Link>
          </div>
        )}

        <div className="navbar-actions">
          {user ? (
            <button onClick={handleLogout} className="btn btn-outline btn-sm">
              Sign Out
            </button>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
              <Link to="/register" className="btn btn-primary btn-sm">Get Started</Link>
            </>
          )}
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger-btn ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu active">
          <div className="mobile-menu-header">
            <div className="mobile-menu-title">Navigation</div>
            <button className="mobile-menu-close" onClick={closeMobileMenu} aria-label="Close menu">
              ✕
            </button>
          </div>
          {user && (
            <>
              <Link to="/dashboard" className={isActive('/dashboard')} onClick={closeMobileMenu}>
                Dashboard
              </Link>
              <Link to="/interview" className={isActive('/interview')} onClick={closeMobileMenu}>
                Practice
              </Link>
              <Link to="/history" className={isActive('/history')} onClick={closeMobileMenu}>
                History
              </Link>
              <Link to="/admin" className={isActive('/admin')} onClick={closeMobileMenu}>
                Admin
              </Link>
              <div style={{ borderTop: '1px solid var(--border)', marginTop: '16px', paddingTop: '16px' }}>
                <button onClick={handleLogout} className="btn btn-outline" style={{ width: '100%' }}>
                  Sign Out
                </button>
              </div>
            </>
          )}
          {!user && (
            <>
              <Link to="/login" className="btn btn-outline" onClick={closeMobileMenu} style={{ width: '100%' }}>
                Login
              </Link>
              <Link to="/register" className="btn btn-primary" onClick={closeMobileMenu} style={{ width: '100%' }}>
                Get Started
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
