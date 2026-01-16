import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <a href="#" className="footer-logo">
            Layba Oulare
          </a>

          <div className="footer-social">
            <a href="mailto:oularelayba05@gmail.com" aria-label="Email">
              <FiMail />
            </a>
            <a href="https://linkedin.com/in/layba-oulare-2b3b342a5/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://github.com/Oulare2005" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Layba Oulare - Portfolio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
