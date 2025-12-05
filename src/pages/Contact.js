import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      if (result.success) {
        setShowSuccessMessage(true);
        setStatusMessage('Mensaje enviado con éxito.');
        setFormData({ name: '', email: '', message: '' });

        // Oculta el mensaje después de 5 segundos
        setTimeout(() => {
          setShowSuccessMessage(false);
          setStatusMessage('');
        }, 5000);
      } else {
        setStatusMessage('Error: ' + result.error);
      }
    } catch (error) {
      setStatusMessage('Error al conectar con el servidor.');
    }
  };

  return (
    <div>
      <Navbar />

      <header className="contact-hero">
        <h1>Contáctanos</h1>
        <p>Estamos aquí para ayudarte. ¡Envíanos un mensaje!</p>
      </header>

      <section className="contact-container">
        <div className="contact-form">
          <h2>Envíanos un mensaje</h2>
          {showSuccessMessage && (
            <div className="success-toast">
              <span className="check-icon">✔</span> {statusMessage}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <label>Nombre Completo</label>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Correo Electrónico</label>
            <input
              type="email"
              name="email"
              placeholder="tuemail@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Mensaje</label>
            <textarea
              name="message"
              placeholder="Escribe tu mensaje aquí..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Enviar Mensaje</button>
          </form>
          {statusMessage && !showSuccessMessage && (
            <p className="status-message">{statusMessage}</p>
          )}
        </div>

        <div className="contact-info">
          <h2>Información de Contacto</h2>
          <p>
            <strong>Email:</strong> contacto.visualbytes@gmail.com
          </p>
          <p>
            <strong>Teléfono:</strong> +56 9 56524788
          </p>
          <p>
            <strong>Dirección:</strong> Calle 2 #1808, Maule
          </p>

          <div className="contact-map">
            <iframe
              title="Mapa de ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093646!2d144.9537353159048!3d-37.8162793797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f1f1b7%3A0x4a8a23cf3f99ef67!2sMelbourne%20Central!5e0!3m2!1ses-419!2scl!4v1644682031823!5m2!1ses-419!2scl"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
