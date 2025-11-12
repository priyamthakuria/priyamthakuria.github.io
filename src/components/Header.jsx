import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import './Header.css';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/home';

  return (
    <header className="header">
      <div className="header-content">
        {isHome ? (
          <h1 className="site-title">Home</h1>
        ) : (
          <Link to="/" className="site-title">Home</Link>
        )}
        <div className="header-actions">
          <Navigation mobileOpen={mobileMenuOpen} />
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;