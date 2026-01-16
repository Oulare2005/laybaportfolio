import { useState } from 'react';
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { useLanguage } from '../LanguageContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    const templateParams = {
      name: formData.name,
      email: formData.email,
      title: formData.subject,
      message: formData.message
    };

    emailjs.send(
      'service_dkkcp1s',
      'template_o06o9f6',
      templateParams,
      '2c3dyrOGKmKMznlG5'
    )
    .then(() => {
      setStatus({ type: 'success', message: t.contact.form.successMessage || 'Message envoyé avec succès!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch(() => {
      setStatus({ type: 'error', message: t.contact.form.errorMessage || 'Erreur lors de l\'envoi. Veuillez réessayer.' });
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="section-subtitle">
          {t.contact.subtitle}
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>{t.contact.talkTitle}</h3>
            <p>
              {t.contact.talkDesc}
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
                  <h4>{t.contact.location}</h4>
                  <span>Chicoutimi(Québec), Canada</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {status.message && (
              <div className={`form-message ${status.type}`}>
                {status.type === 'success' ? <FiCheck /> : <FiAlertCircle />}
                {status.message}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">{t.contact.form.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.contact.form.namePlaceholder}
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t.contact.form.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.contact.form.emailPlaceholder}
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">{t.contact.form.subject}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t.contact.form.subjectPlaceholder}
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.contact.form.message}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.contact.form.messagePlaceholder}
                required
                disabled={isLoading}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              <FiSend /> {isLoading ? 'Envoi en cours...' : t.contact.form.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
