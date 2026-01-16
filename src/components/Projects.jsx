import { FiGithub, FiDownload } from 'react-icons/fi';
import { FaShieldAlt, FaLink, FaMobileAlt, FaSearch, FaUserLock, FaBus } from 'react-icons/fa';

const Projects = () => {
  const projectsData = [
    {
      icon: <FaShieldAlt />,
      title: 'Analyse de risques techniques (Projet Red Team)',
      year: '2025',
      context: 'UQAC',
      description: 'Analyse et exploitation d\'un environnement simulé : Windows Server, AD, client Windows.',
      details: [
        'Identification des risques : SMB, exposition Web, élévation de privilèges',
        'Attaques DVWA : SQLi, XSS, bruteforce et classification des vulnérabilités',
        'Cartographie des risques selon MITRE ATT&CK',
        'Recommandations de mesures correctives'
      ],
      tech: ['Kali Linux', 'Nmap', 'Docker', 'DVWA', 'MITRE ATT&CK'],
      category: 'Cybersécurité',
      report: '/Rapport_RedTeam_Layba_Oulare.docx',
      reportLabel: 'Rapport (DOCX)'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Développement d\'un système 2FA',
      year: '2025',
      context: 'UQAC - Sujet spécial',
      description: 'Application mobile Flutter jouant le rôle de jeton logiciel 2FA.',
      details: [
        'Activation en arrière-plan lors d\'un événement de sécurité',
        'Contrôle d\'accès renforcé : réduction du phishing',
        'Documentation orientée gestion des risques et contrôles de sécurité'
      ],
      tech: ['Flutter', 'Mobile Security', '2FA/MFA'],
      category: 'Mobile / Sécurité',
      report: null
    },
    {
      icon: <FaLink />,
      title: 'Projet Blockchain Monarc',
      year: '2025',
      context: 'Collaboration entreprise',
      description: 'Développement front-end pour une solution de traçabilité blockchain.',
      details: [
        'Analyse des risques applicatifs : intégrité des données, API, gestion des accès',
        'Utilisation de Git pour le versionnement et collaboration'
      ],
      tech: ['Front-end', 'Git', 'Sécurité applicative', 'Blockchain'],
      category: 'Web / Sécurité',
      report: '/Rapport-Monarc.pdf',
      reportLabel: 'Rapport (PDF)'
    },
    {
      icon: <FaSearch />,
      title: 'Analyse de vulnérabilités - Nessus',
      year: '2025',
      context: 'UQAC',
      description: 'Analyse de vulnérabilités à l\'aide de Nessus sur des environnements Windows.',
      details: [
        'Étude détaillée de rapports Nessus (CSV) par hôte',
        'Chaînage de vulnérabilités critiques pour évaluer des scénarios d\'attaque',
        'Calcul du score global de risque basé sur le CVSS',
        'Recherche et validation des remédiations via la NVD',
        'Recommandations de patch management'
      ],
      tech: ['Nessus', 'CVSS', 'NVD', 'Windows', 'Patch Management'],
      category: 'Cybersécurité',
      report: '/Rapport_TP_Nessus.docx',
      reportLabel: 'Rapport (DOCX)'
    },
    {
      icon: <FaUserLock />,
      title: 'Contrôle d\'accès RBAC - Application Android',
      year: '2025',
      context: 'UQAC',
      description: 'Application Android intégrant un contrôle d\'accès basé sur les rôles (RBAC).',
      details: [
        'Trois rôles : administrateur, préposé résidentiel, préposé d\'affaires',
        'Authentification et inscription sécurisées via Firebase',
        'Attribution des rôles et séparation stricte des permissions',
        'Accès aux pages filtré selon le rôle utilisateur'
      ],
      tech: ['Android', 'Java', 'Firebase Auth', 'RBAC'],
      category: 'Mobile / Sécurité',
      report: null
    },
    {
      icon: <FaBus />,
      title: 'Application Transport Collectifs',
      year: '2024',
      context: 'UQAC - Développement Mobile',
      description: 'Application Android permettant de rechercher, annoncer et réserver des trajets.',
      details: [
        'Création de compte, connexion, annonces, recherche par ville, réservation',
        'Profil utilisateur : modification infos, photo, mode sombre/clair',
        'Contraintes UX : validation des champs, boutons contextuels, interface intuitive'
      ],
      tech: ['Android', 'Java', 'UI/UX', 'Mobile'],
      category: 'Mobile',
      report: null
    }
  ];

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">Projets Académiques</h2>
        <p className="section-subtitle">
          Mes réalisations en cybersécurité et développement
        </p>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                {project.icon}
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                <span className="project-context">{project.context}</span>
                <p>{project.description}</p>
                <ul className="project-details">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href="https://github.com/Oulare2005" target="_blank" rel="noreferrer" className="project-link">
                    <FiGithub /> GitHub
                  </a>
                  {project.report && (
                    <a href={project.report} download className="project-link project-download">
                      <FiDownload /> {project.reportLabel}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
