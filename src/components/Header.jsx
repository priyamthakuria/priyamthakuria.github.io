import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';
import './Header.css';

function Header({ theme, onToggleTheme }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="site-title">Priyam Thakuria</h1>
        <div className="header-actions">
          <Navigation />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}

export default Header;