import { FiMonitor, FiShield, FiCloud, FiCode, FiTool, FiLock } from 'react-icons/fi';

const Skills = () => {
  const skillsData = [
    {
      icon: <FiMonitor />,
      title: 'Systèmes & Réseaux',
      description: 'Administration et configuration d\'infrastructures',
      tags: ['Windows Server', 'Linux', 'Active Directory', 'TCP/IP', 'DNS', 'DHCP', 'VMware']
    },
    {
      icon: <FiShield />,
      title: 'Cybersécurité',
      description: 'Analyse des menaces et sécurisation des systèmes',
      tags: ['NIST CSF/RMF', 'MITRE ATT&CK', 'Analyse vulnérabilités', 'Sécurité réseau']
    },
    {
      icon: <FiCloud />,
      title: 'Cloud & DevOps',
      description: 'Déploiement et automatisation dans le cloud',
      tags: ['Azure', 'Docker', 'Azure DevOps', 'GitHub Actions', 'CI/CD']
    },
    {
      icon: <FiCode />,
      title: 'Programmation',
      description: 'Développement d\'applications et scripts',
      tags: ['Java', 'JavaScript', 'Python', 'C/C++', 'HTML/CSS', 'SQL']
    },
    {
      icon: <FiTool />,
      title: 'Outils',
      description: 'Outils de sécurité et développement',
      tags: ['Git', 'Wireshark', 'Nmap', 'Burp Suite', 'Kali Linux', 'Postman', 'Flutter']
    },
    {
      icon: <FiLock />,
      title: 'Techniques',
      description: 'Exploitation et durcissement applicatif',
      tags: ['SQLi', 'XSS', 'CSRF', 'SMB', 'MFA/2FA', 'Durcissement']
    }
  ];

  const certifications = [
    { name: 'CompTIA Security+', status: 'En préparation' },
    { name: 'Google Cybersecurity Professional', status: 'En préparation' },
    { name: 'Google IT Support Professional', status: 'En cours' },
    { name: 'Créativité & prototypage rapide - Montréal', status: '2024' },
    { name: 'Réseautage et téléphonie (VoIP / ToIP)', status: '2023' }
  ];

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">Compétences Techniques</h2>
        <p className="section-subtitle">
          Les technologies et outils que je maîtrise
        </p>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-tags">
                {skill.tags.map((tag, tagIndex) => (
                  <span className="skill-tag" key={tagIndex}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="certifications">
          <h3 className="certifications-title">Certifications & Formations</h3>
          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <div className="certification-item" key={index}>
                <span className="certification-name">{cert.name}</span>
                <span className="certification-status">{cert.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
