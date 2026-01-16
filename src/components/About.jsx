import { FiMapPin, FiMail, FiBriefcase, FiAward, FiShield, FiCode } from 'react-icons/fi';

const About = () => {
  const highlights = [
    {
      icon: <FiShield />,
      title: 'Cybersécurité',
      description: 'Spécialisation en sécurité des systèmes et réseaux'
    },
    {
      icon: <FiCode />,
      title: 'Développement',
      description: 'Applications web et mobiles sécurisées'
    },
    {
      icon: <FiAward />,
      title: 'UQAC',
      description: 'Baccalauréat en informatique - Finissant'
    }
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">À propos de moi</h2>
        <p className="section-subtitle">
          Découvrez mon parcours et ma passion pour l'informatique
        </p>

        {/* Highlights Cards */}
        <div className="about-highlights">
          {highlights.map((item, index) => (
            <div className="about-highlight-card" key={index}>
              <div className="about-highlight-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="about-main">
          <div className="about-description">
            <p>
              Je suis finissant au baccalauréat en informatique à l'<strong>Université du
              Québec à Chicoutimi (UQAC)</strong>, avec une spécialisation en cybersécurité et
              un fort intérêt pour la protection des systèmes, des réseaux et des
              applications.
            </p>
            <p>
              J'aime analyser des environnements techniques, comprendre les risques
              et mettre en place des solutions concrètes pour réduire les
              vulnérabilités et les accès non autorisés.
            </p>
            <p>
              En parallèle, je développe des compétences en <strong>programmation
              et en développement d'applications</strong>. J'ai travaillé sur des projets de
              développement mobile et web, ce qui me permet d'intégrer les bonnes pratiques de
              sécurité dès la conception.
            </p>
          </div>

          {/* Info Cards */}
          <div className="about-info-cards">
            <div className="about-info-card">
              <FiMapPin className="about-info-icon" />
              <div>
                <span className="about-info-label">Localisation</span>
                <span className="about-info-value">Chicoutimi(Québec), Canada</span>
              </div>
            </div>
            <div className="about-info-card">
              <FiMail className="about-info-icon" />
              <div>
                <span className="about-info-label">Email</span>
                <span className="about-info-value">oularelayba05@gmail.com</span>
              </div>
            </div>
            <div className="about-info-card">
              <FiBriefcase className="about-info-icon" />
              <div>
                <span className="about-info-label">Disponibilité</span>
                <span className="about-info-value">Stage / Poste junior</span>
              </div>
            </div>
            <div className="about-info-card">
              <FiAward className="about-info-icon" />
              <div>
                <span className="about-info-label">Formation</span>
                <span className="about-info-value">Baccalauréat - UQAC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
