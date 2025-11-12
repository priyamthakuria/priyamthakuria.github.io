// src/components/ThemeToggle.jsx
import './ThemeToggle.css';

function ThemeToggle({ theme, onToggle }) {
  const label = theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme';

  return (
    <button className="theme-toggle" onClick={onToggle} type="button" aria-label={label}>
      <span aria-hidden>{theme === 'light' ? '🌙' : '☀️'}</span>
    </button>
  );
}

export default ThemeToggle;