import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import useTilt from '../hooks/useTilt';
import { projects } from '../data';

const ProjectCard = ({ project, index }) => {
  const tilt = useTilt(8);

  return (
    <motion.div
      className="project-wrap"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
    >
      <article
        className="card project-card"
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
      >
        <div className="project-top">
          <span className="project-kind">{project.kind}</span>
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}>
                <FaGithub />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="chips small">
          {project.tags.map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
        </ul>
      </article>
    </motion.div>
  );
};

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <SectionTitle eyebrow="Projects">Things I’ve built</SectionTitle>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
