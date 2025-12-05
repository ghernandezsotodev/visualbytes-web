import React from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from '../../assets/images/logo-footer.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo y descripción */}
        <div className="logo-container">
          <img src={logo} alt="VisualBytes Logo" className="footer-logo" />
        </div>

        <p className="footer-description">
          Construyendo experiencias digitales.
        </p>

        {/* Redes sociales */}
        <div className="social-icons">
          <SocialIcon link="https://facebook.com" icon="fa-facebook" />
          <SocialIcon link="https://twitter.com" icon="fa-twitter" />
          <SocialIcon link="https://instagram.com" icon="fa-instagram" />
          <SocialIcon link="https://linkedin.com" icon="fa-linkedin" />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} VisualBytes. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

// Componente de iconos sociales reutilizable
const SocialIcon = ({ link, icon }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <i className={`fa ${icon}`}></i>
  </a>
);

export default Footer;
