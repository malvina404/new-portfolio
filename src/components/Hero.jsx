import { motion } from 'framer-motion';
import { FaDownload, FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import useTilt from '../hooks/useTilt';
import { profile } from '../data';

const chips = [
  { label: 'React', style: { top: '6%', left: '-6%' }, depth: 70, delay: 0 },
  { label: 'Node.js', style: { top: '24%', right: '-8%' }, depth: 50, delay: 0.6 },
  { label: 'React Native', style: { bottom: '14%', left: '-10%' }, depth: 90, delay: 1.1 },
  { label: 'MySQL', style: { bottom: '2%', right: '4%' }, depth: 60, delay: 1.6 },
];

const Hero = () => {
  const tilt = useTilt(12);

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
      </div>

      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="pill">Open to internships & junior roles</span>
          <h1>
            Hi, I’m <span className="gradient-text">{profile.name}</span>.
          </h1>
          <p className="lead">
            {profile.role}. I build web and mobile products that solve real problems in
            Cameroon, from medicine availability to bus ticketing.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View my work <FaArrowDown />
            </a>
            <a href={profile.cv} download="Ndote_Malvina_CV.pdf" className="btn btn-ghost">
              <FaDownload /> Download CV
            </a>
          </div>

          <div className="socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div
            className="tilt-stage"
            ref={tilt.ref}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
          >
            <div className="photo-ring" />
            <img src="/profile1.png" alt={profile.fullName} className="photo" />
            {chips.map((c) => (
              <div key={c.label} className="chip-pos" style={{ ...c.style, transform: `translateZ(${c.depth}px)` }}>
                <motion.span
                  className="float-chip"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: c.delay, ease: 'easeInOut' }}
                >
                  {c.label}
                </motion.span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
