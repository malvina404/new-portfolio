import { motion } from 'framer-motion';

const SectionTitle = ({ eyebrow, children }) => (
  <motion.div
    className="section-title"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{children}</h2>
  </motion.div>
);

export default SectionTitle;
