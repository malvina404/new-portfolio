import { motion } from 'framer-motion';
import {
  FaReact, FaJs, FaHtml5, FaBootstrap, FaMobileAlt, FaNodeJs, FaPhp, FaGitAlt, FaGithub,
} from 'react-icons/fa';
import { SiExpress, SiMysql } from 'react-icons/si';
import SectionTitle from './SectionTitle';
import { skillGroups } from '../data';

const icons = {
  React: <FaReact />,
  JavaScript: <FaJs />,
  'HTML / CSS': <FaHtml5 />,
  Bootstrap: <FaBootstrap />,
  'React Native': <FaReact />,
  'Apache Cordova': <FaMobileAlt />,
  'Node.js': <FaNodeJs />,
  Express: <SiExpress />,
  PHP: <FaPhp />,
  MySQL: <SiMysql />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
};

const Skills = () => (
  <section id="skills" className="section section-alt">
    <div className="container">
      <SectionTitle eyebrow="Skills">What I work with</SectionTitle>

      <div className="skills-grid">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.title}
            className="card skill-group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <h3>{g.title}</h3>
            <ul className="chips">
              {g.items.map((s) => (
                <li key={s} className="chip">
                  {icons[s]} {s}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
