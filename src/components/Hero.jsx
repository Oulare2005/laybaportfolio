import { Link } from 'react-scroll';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Disponible pour stage / poste junior
          </div>
          <p className="hero-greeting">Bonjour, je suis</p>
          <h1 className="hero-title">
            Layba <span>Oulare</span>
          </h1>
          <p className="hero-description">
            Finissant en informatique à l'UQAC, spécialisé en cybersécurité.
            Passionné par la sécurité des systèmes et le développement d'applications sécurisées.
          </p>
          <div className="hero-buttons">
            <Link to="contact" smooth={true} duration={500}>
              <button className="btn btn-primary">
                Me contacter <FiArrowRight />
              </button>
            </Link>
            <a href="/Layba-Oulare-CV.pdf" download className="btn btn-outline">
              <FiDownload /> Télécharger CV
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img src="/photo.jpeg" alt="Layba Oulare" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
