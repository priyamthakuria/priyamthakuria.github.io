import Navigation from './Navigation';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="site-title">Priyam Thakuria</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;