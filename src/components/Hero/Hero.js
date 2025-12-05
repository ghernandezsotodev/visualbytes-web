import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleContactClick = () => {
    if (window.innerWidth < 768) {
      window.location.href = '/contact';
    } else {
      setIsModalOpen(true);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        'http://localhost/TEST_APP/backend/api/contact.php',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      console.log(result);

      if (result.success) {
        setShowSuccessMessage(true);
        setFormData({ name: '', email: '', message: '' });
        setIsModalOpen(false); // Cierra el modal después del envío exitoso
        setTimeout(() => setShowSuccessMessage(false), 5000); // Cierra el mensaje después de 5s
      } else {
        alert('Error: ' + result.error);
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      alert('Error al conectar con el servidor');
    }
  };

  return (
    <section className="hero">
      {showSuccessMessage && (
        <div className="success-toast">
          <span className="check-icon">✔</span> Mensaje enviado con éxito
        </div>
      )}

      <div className="hero-content">
        <h1>Impulsa tu negocio con soluciones digitales</h1>
        <p>Desarrollo web, marketing digital y software a medida</p>
        <button className="hero-button" onClick={handleContactClick}>
          Contáctame
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Cerrar modal"
            >
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor">
                <path
                  d="M13 1L1 13M1 1L13 13"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <h2>¿Listo para Transformar Tu Negocio?</h2>
            <p className="modal-subtitle">
              Complete el formulario y nos pondremos en contacto en menos de 24
              horas
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre completo</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ej. Juan Pérez"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  placeholder="juan@empresa.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  name="message"
                  placeholder="Describe tus necesidades..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
