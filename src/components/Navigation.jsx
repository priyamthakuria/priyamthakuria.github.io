import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation({ mobileOpen }) {
  const location = useLocation();
  
  return (
    <nav className={`navigation ${mobileOpen ? 'mobile-open' : ''}`}>
      <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link>
      <Link to="/works" className={location.pathname === '/works' ? 'active' : ''}>Works</Link>
      <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
    </nav>
  );
}

export default Navigation;