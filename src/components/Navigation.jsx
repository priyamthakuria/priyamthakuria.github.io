import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/talks">Talks</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navigation;