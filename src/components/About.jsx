import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaUsers } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { profile } from '../data';

const facts = [
  { icon: <FaGraduationCap />, title: 'Education', text: 'Software engineering student' },
  { icon: <FaBriefcase />, title: 'Experience', text: 'Academic internship at  OIC' },
  { icon: <FaBriefcase />, title: 'Experience', text: 'Academic internship at  Further Market SA' },
  { icon: <FaBriefcase />, title: 'Experience', text: 'Junior Web and Mobile Developer at  Further Market SA' },
  { icon: <FaUsers />, title: 'Teamwork', text: 'Team projects at IME Bafoussam' },
  { icon: <FaMapMarkerAlt />, title: 'Based in', text: profile.location },
];

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <SectionTitle eyebrow="About">A bit about me</SectionTitle>

      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-text">
          <p>
            I’m a software engineering student who enjoys turning real-world problems into
            working products. During my internship I built the backend, security model and
            mobile client of a crowdsourced medicine-availability platform, and with my team
            I delivered a complete bus-ticketing system.
          </p>
          <p>
            I work across the stack — React and React Native on the front, Node.js and PHP on
            the back — and I care about clean code, clear interfaces and software that works
            on the networks and devices people actually have. I speak French and English.
          </p>
        </div>

        <ul className="facts">
          {facts.map((f) => (
            <li key={f.title}>
              <span className="fact-icon">{f.icon}</span>
              <div>
                <strong>{f.title}</strong>
                <span>{f.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default About;
