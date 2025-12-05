import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <h2>Nuestros Servicios</h2>
      <p className="services-description">
        En <strong>VisualBytes</strong>, ofrecemos soluciones innovadoras y
        personalizadas para ayudarte a hacer crecer tu negocio de manera
        eficiente y sostenible. Descubre nuestros servicios a continuación:
      </p>

      <div className="services-container">
        <div className="service-card">
          <img
            src={require('../../assets/images/service1.png')}
            alt="Consultoría"
            className="service-icon"
          />
          <h3>Consultoría</h3>
          <p>
            Ayudamos a tu empresa a optimizar procesos y maximizar resultados
            mediante un análisis detallado.
          </p>
          <a href="#consultoria" className="service-button">
            Más información
          </a>
        </div>
        <div className="service-card">
          <img
            src={require('../../assets/images/service2.png')}
            alt="Desarrollo Web"
            className="service-icon"
          />
          <h3>Desarrollo Web</h3>
          <p>
            Creación de sitios web modernos, rápidos y optimizados, enfocados en
            brindar una excelente experiencia al usuario.
          </p>
          <a href="#desarrollo" className="service-button">
            Más información
          </a>
        </div>
        <div className="service-card">
          <img
            src={require('../../assets/images/service3.png')}
            alt="Marketing Digital"
            className="service-icon"
          />
          <h3>Marketing Digital</h3>
          <p>
            Desarrollamos estrategias digitales personalizadas para atraer más
            clientes y aumentar tu presencia online.
          </p>
          <a href="#marketing" className="service-button">
            Más información
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
