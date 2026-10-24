import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => (
  <button
    type="button"
    className="icon-btn"
    onClick={toggleDarkMode}
    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
  >
    {darkMode ? <FaSun /> : <FaMoon />}
  </button>
);

export default ThemeToggle;
