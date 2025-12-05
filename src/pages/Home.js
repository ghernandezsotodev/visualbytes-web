import React from 'react';
import { Link } from 'react-router-dom'; // Importante para la navegación
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../components/Hero/Hero.css'; // Asegúrate de importar los estilos del Hero

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* HERO SECTION PRINCIPAL */}
      <header className="hero">
        <div className="hero-content">
          <h1>Transformación Digital con Estándar Profesional</h1>
          <p>
            Consultoría tecnológica que fusiona <strong>Ingeniería de Software</strong>, 
            <strong>Control de Gestión</strong> y <strong>Diseño de Alto Nivel</strong>.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '30px' }}>
            <Link to="/projects">
                <button className="hero-button">Ver Portafolio</button>
            </Link>
            <Link to="/contact">
                {/* Un botón secundario con estilo outline (borde blanco) */}
                <button className="hero-button" style={{background: 'transparent', border: '2px solid white', color: 'white'}}>
                    Contáctanos
                </button>
            </Link>
          </div>
        </div>
      </header>

      {/* SECCIÓN RESUMEN (Breve vistazo a lo que hacen) */}
      <section style={{ padding: '80px 20px', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#1F2937', marginBottom: '20px' }}>
            Más que una agencia de desarrollo
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#4B5563', lineHeight: '1.6' }}>
            Somos un equipo dual. Un <strong>Ingeniero Informático</strong> experto en arquitecturas complejas y 
            un <strong>Auditor & Diseñador</strong> experto en procesos y experiencia de usuario. 
            Creamos software que funciona, se ve increíble y hace rentable tu negocio.
        </p>
        
        <div style={{ marginTop: '40px' }}>
             <Link to="/services" style={{ textDecoration: 'none', color: '#4F46E5', fontWeight: 'bold', fontSize: '1.1rem' }}>
                Explorar nuestros servicios &rarr;
             </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;