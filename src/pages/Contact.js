import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  // Configuración de la API (Best Practice)
  
  const API_URL = 'http://localhost/TEST_APP/backend/api/contact.php';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Verificamos si la respuesta es JSON válido
      const text = await response.text();
      let result;
      try {
        result = JSON.parse(text);
      } catch (err) {
        throw new Error("El servidor no devolvió una respuesta válida (JSON).");
      }

      if (result.success) {
        setStatus({ type: 'success', message: '¡Mensaje enviado con éxito! Te contactaremos pronto.' });
        setFormData({ name: '', email: '', message: '' });
        
        // Limpiar mensaje tras 5 seg
        setTimeout(() => setStatus({ type: '', message: '' }), 5000);
      } else {
        setStatus({ type: 'error', message: result.error || 'Hubo un error al procesar tu solicitud.' });
      }
    } catch (error) {
      console.error(error);
      setStatus({ 
        type: 'error', 
        message: 'No pudimos conectar con el servidor. Por favor intenta más tarde o contáctanos por email.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Navbar eliminado para evitar duplicidad */}

      <header className="contact-hero">
        <h1>Contáctanos</h1>
        <p>Estamos aquí para ayudarte. ¡Envíanos un mensaje!</p>
      </header>

      <section className="contact-container">
        
        {/* Formulario */}
        <div className="contact-form">
          <h2>Envíanos un mensaje</h2>
          
          {status.type === 'success' && (
            <div className="success-toast">
              <span>✔</span> {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <label>Nombre Completo</label>
            <input
              type="text"
              name="name"
              placeholder="Ej: Juan Pérez"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />

            <label>Correo Electrónico</label>
            <input
              type="email"
              name="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />

            <label>Mensaje</label>
            <textarea
              name="message"
              placeholder="Cuéntanos sobre tu proyecto..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            ></textarea>

            <button type="submit" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1 }}>
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>

          {status.type === 'error' && (
            <div className="error-toast">
              {status.message}
            </div>
          )}
        </div>

        {/* Información Lateral */}
        <div className="contact-info">
          <h2>Información de Contacto</h2>
          
          <div className="info-item">
            <strong>Email</strong>
            <p>contacto.visualbytes@gmail.com</p>
          </div>
          
          <div className="info-item">
            <strong>Teléfono</strong>
            <p>+56 9 56524788</p>
          </div>
          
          <div className="info-item">
            <strong>Dirección</strong>
            <p>Calle 2 #1808, Maule, Chile</p>
          </div>

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
    </div>
  );
};

export default Contact;