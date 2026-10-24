import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaCheck, FaExclamationTriangle, FaLinkedin, FaGithub } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { profile } from '../data';

const EMPTY = { name: '', email: '', message: '' };

const Contact = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // null | 'success' | 'error'
  const [form, setForm] = useState(EMPTY);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    try {
      const res = await emailjs.sendForm(
        'service_z66jmpi',
        'template_01zcszp',
        formRef.current,
        'GZSsnIJ8Z4N635wuU'
      );
      if (res.status === 200) {
        setStatus('success');
        setForm(EMPTY);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Email sending failed:', err);
      setStatus('error');
    } finally {
      setSending(false);
      setTimeout(() => setStatus(null), 6000);
    }
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionTitle eyebrow="Contact">Let’s work together</SectionTitle>

        <div className="contact-grid">
          <div className="contact-side">
            <p>
              Looking for an intern or junior developer, or have a project in mind? Send me a
              message and I’ll get back to you soon.
            </p>
            <div className="socials">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            </div>
          </div>

          <form ref={formRef} onSubmit={onSubmit} className="card contact-form">
            <label>
              Name
              <input type="text" name="name" required minLength={2} value={form.name} onChange={onChange} placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" required value={form.email} onChange={onChange} placeholder="you@example.com" />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" required minLength={10} value={form.message} onChange={onChange} placeholder="How can I help?" />
            </label>

            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? 'Sending…' : <>Send message <FaPaperPlane /></>}
            </button>

            <div aria-live="polite">
              <AnimatePresence>
                {status && (
                  <motion.div
                    className={`notice ${status}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    {status === 'success' ? <FaCheck /> : <FaExclamationTriangle />}
                    {status === 'success'
                      ? 'Message sent! I’ll get back to you soon.'
                      : 'Something went wrong. Please try again.'}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
