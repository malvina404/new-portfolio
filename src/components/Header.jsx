import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { profile } from '../data';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Header = ({ darkMode, toggleDarkMode }) => {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  // Scroll-spy: highlight the section that is crossing the middle of the viewport
  useEffect(() => {
    const ids = ['home', ...links.map((l) => l.id)];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          {profile.name}<span>.</span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <button
            type="button"
            className="icon-btn menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
