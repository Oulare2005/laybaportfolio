import { useState } from 'react';
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ouvre le client email avec les informations pré-remplies
    const mailtoLink = `mailto:oularelayba05@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`De: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Me Contacter</h2>
        <p className="section-subtitle">
          N'hésitez pas à me contacter pour discuter d'opportunités
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Parlons de votre projet</h3>
            <p>
              Je suis actuellement à la recherche d'un stage ou d'un poste junior
              en cybersécurité ou en informatique. Ouvert à toutes les opportunités
              qui me permettront de mettre mes compétences en pratique.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <FiMail />
                </div>
                <div className="contact-item-text">
                  <h4>Email</h4>
                  <a href="mailto:oularelayba05@gmail.com">oularelayba05@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <FiLinkedin />
                </div>
                <div className="contact-item-text">
                  <h4>LinkedIn</h4>
                  <a href="https://linkedin.com/in/layba-oulare-2b3b342a5/" target="_blank" rel="noreferrer">
                    linkedin.com/in/layba-oulare
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <FiGithub />
                </div>
                <div className="contact-item-text">
                  <h4>GitHub</h4>
                  <a href="https://github.com/Oulare2005" target="_blank" rel="noreferrer">
                    github.com/Oulare2005
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <FiMapPin />
                </div>
                <div className="contact-item-text">
                  <h4>Localisation</h4>
                  <span>Chicoutimi(Québec), Canada</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Sujet de votre message"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              <FiSend /> Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
