import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Hero/Hero.css';
import './Home.css';
import santaRitaMockup from '../assets/images/mockup-santa-rita.webp';

const Home = () => {
  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <header className="hero">
        <div className="hero-content">
          <h1>Ingeniería de Software y Estrategia Digital</h1>
          <p>
            Transformamos procesos complejos en software rentable. Unimos la robustez de la 
            <strong> ingeniería informática</strong> con la <strong>visión de negocios</strong> para 
            que tu inversión digital realmente funcione.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn-hero btn-primary-white">
              Ver Nuestros Proyectos
            </Link>
            <Link to="/contact" className="btn-hero btn-outline-white">
              Hablemos de tu Idea
            </Link>
          </div>
        </div>
      </header>

      {/* 2. BLOQUE "NOSOTROS" */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">El equilibrio entre Lógica y Estrategia</h2>
          <p className="section-subtitle">
            En <strong>VisualBytes</strong> no somos una fábrica de código genérico. 
            Somos un equipo multidisciplinario que entiende ambas caras de la moneda:
          </p>

          <div className="about-grid">
            {/* Núcleo Técnico */}
            <div className="about-card tech">
              <h3>El Núcleo Técnico</h3>
                <p>
                Ingeniero Informático con enfoque empresarial. Especializado en diseñar y 
                desarrollar sistemas escalables, seguros y alineados con objetivos de negocio.
              </p>
            </div>

            {/* Visión de Negocio */}
            <div className="about-card business">
              <h3>La Visión de Negocio</h3>
                <p>
                  Profesional en auditoría y diseño, enfocado en crear soluciones que combinan 
                  estética, eficiencia operativa y viabilidad financiera.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICIOS (Aquí estaba el error de clase) */}
      <section className="section section-bg">
        <div className="container">
          <h2 className="section-title">Soluciones Reales</h2>
          
          {/* CAMBIO: Usamos una clase única para evitar conflictos con Services.js */}
          <div className="home-services-grid">
            {[
              { title: "Software a Medida", text: "Arquitecturas escalables para problemas complejos. Backends potentes y seguridad." },
              { title: "Apps Android Nativas", text: "Desarrollo 100% nativo (Kotlin) para garantizar máxima fluidez y estabilidad." },
              { title: "Consultoría Digital", text: "Auditamos procesos y diseñamos soluciones que reducen costos y errores manuales." },
              { title: "Diseño UI/UX", text: "Interfaces intuitivas alineadas con identidad visual corporativa." }
            ].map((item, index) => (
              <div key={index} className="service-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="view-more-container">
            <Link to="/services" className="link-primary">
              Ver detalles técnicos &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CASO DE ESTUDIO (Santa Rita) */}
      <section className="section">
        <div className="container">
          <div className="case-study-wrapper">
            <div className="case-info">
              <span className="label-pill">Caso de Estudio</span>
              <h2>Comunidad Santa Rita</h2>
              <p>
                <strong>El Reto:</strong> Gestión en papel, opacidad financiera y desinformación vecinal.
              </p>
              <p style={{ marginBottom: '30px' }}>
                <strong>La Solución:</strong> Ecosistema digital completo (App Nativa + Dashboard Laravel).
                <br />
                <span style={{ color: '#059669', fontWeight: 'bold' }}>Resultado: 100% transparencia</span>.
              </p>
              
              <Link to="/projects">
                <button className="btn-dark">Ver Caso Completo</button>
              </Link>
            </div>
            
            <div className="case-image">
              <img 
                src={santaRitaMockup} 
                alt="App Santa Rita Conectada" 
                className="case-mockup"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. STACK TECNOLÓGICO */}
      <section className="section section-bg">
        <div className="container">
          <h2 className="section-title">Nuestra Base Tecnológica</h2>
          <p className="section-subtitle">
            Seleccionamos herramientas probadas para garantizar rendimiento, seguridad y escalabilidad.
          </p>

          <div className="stack-grid">
            {[
              { 
                cat: "Backend & Core", 
                tech: "Java (Spring) • Laravel 12 • Python (Django/FastAPI)" 
              },
              { 
                cat: "Móvil Nativo", 
                tech: "Kotlin • Jetpack Compose • Android SDK" 
              },
              { 
                cat: "Frontend Moderno", 
                tech: "React • Next.js • Astro • Tailwind CSS" 
              },
              { 
                cat: "Gestión & Diseño", 
                tech: "SQL • Power BI • Bizagi • Figma" 
              },
              { 
                cat: "Infraestructura", 
                tech: "AWS • Docker • Redis" 
              }
            ].map((stack, idx) => (
              <div key={idx} className="stack-card">
                <div className="stack-line"></div>
                <h4 style={{ marginBottom: '10px', fontWeight: 'bold' }}>{stack.cat}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{stack.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;