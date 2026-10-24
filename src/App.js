import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

// const getInitialTheme = () => {
//   try {
//     const saved = localStorage.getItem('theme');
//     if (saved) return saved === 'dark';
//   } catch (e) { /* storage unavailable */ }
//   return window.matchMedia('(prefers-color-scheme: dark)').matches;
// };
const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
  } catch (e) { /* storage unavailable */ }
  return true; // dark by default
};


function App() {
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    try { localStorage.setItem('theme', darkMode ? 'dark' : 'light'); } catch (e) { /* ignore */ }
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode((d) => !d)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
