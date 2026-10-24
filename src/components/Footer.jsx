import { profile } from '../data';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      © {new Date().getFullYear()} {profile.fullName} · Built with React
    </div>
  </footer>
);

export default Footer;
