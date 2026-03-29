import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

function Navigation({ mobileOpen }) {
  const { pathname } = useLocation();

  return (
    <nav className={`navigation ${mobileOpen ? 'open' : ''}`}>
      {navLinks.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className={`nav-link ${pathname === to ? 'active' : ''}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
