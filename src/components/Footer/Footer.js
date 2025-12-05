import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// IMPORTAMOS TU LOGO BLANCO
import logoFooter from '../../assets/images/logo-visualbytes-white.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-container">
            {/* Logo en lugar de texto */}
            <img 
                src={logoFooter} 
                alt="VisualBytes Logo" 
                className="footer-logo-img" 
            />
        </div>

        <p className="footer-description">
          Construyendo experiencias digitales robustas y elegantes.
        </p>

        <div className="social-icons">
          <SocialIcon link="https://facebook.com" icon={<FaFacebook />} />
          <SocialIcon link="https://twitter.com" icon={<FaTwitter />} />
          <SocialIcon link="https://instagram.com" icon={<FaInstagram />} />
          <SocialIcon link="https://linkedin.com" icon={<FaLinkedin />} />
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} VisualBytes. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

const SocialIcon = ({ link, icon }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
    aria-label="Social Link"
  >
    {icon}
  </a>
);

export default Footer;