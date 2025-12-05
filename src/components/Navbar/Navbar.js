import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/logotipo.png`}
            alt="Mi Pyme Logo"
            className="logo-image"
          />
        </Link>

        <div
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {['/', '/services', '/projects', '/contact'].map((path) => (
            <li key={path}>
              <Link
                to={path}
                className={location.pathname === path ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {path === '/'
                  ? 'Inicio'
                  : path === '/services'
                    ? 'Servicios'
                    : path === '/projects'
                      ? 'Proyectos'
                      : 'Contacto'}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
