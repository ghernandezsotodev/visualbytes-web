import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './Projects.css';

// Usamos una imagen genérica por ahora, asegúrate de tener imágenes en tu carpeta assets
// Si no tienes la imagen específica, react usará la genérica sin romperse
import projectImage from '../assets/images/project1.png'; 
import projectImage2 from '../assets/images/project2.png'

const projectsData = [
  {
    id: 1,
    title: 'Santa Rita Conectada',
    tags: ['Laravel 12', 'Kotlin Nativo', 'AWS S3', 'Docker', 'Redis'],
    image: projectImage, // Idealmente cambia esto por una captura real de tu tesis
    shortDescription: 'Ecosistema de gestión comunitaria. Migración de procesos análogos a arquitectura Cloud híbrida.',
    fullDescription: {
      problem: 'La Junta de Vecinos operaba con cuadernos físicos, generando pérdida de información histórica, desinformación vecinal y opacidad financiera.',
      solution: 'Arquitectura híbrida escalable. Backend en Laravel 12 con patrón de capas, App nativa Android (Kotlin + Jetpack Compose) y despliegue en VPS con Docker.',
      impact: 'Digitalización total de socios, transparencia financiera en tiempo real y comunicación push inmediata.',
      team: 'Arquitectura y Desarrollo Full-Stack + Diseño UI/UX y Control de Gestión.'
    }
  },
  {
      id: 2,
      title: 'Seguricor Web',
      // Cambio: Quitamos React, añadimos TypeScript (o JavaScript) y Netlify
      tags: ['Astro', 'Tailwind CSS', 'TypeScript', 'Netlify'], 
      image: projectImage2, 
      shortDescription: 'Sitio corporativo ultrarrápido para empresa de servicios industriales.',
      fullDescription: {
        problem: 'La empresa requería digitalizar su catálogo de Cortinas Metálicas con foco en captación de leads y posicionamiento local.',
        solution: 'Arquitectura SSG (Static Site Generation) con Astro para velocidad máxima. Implementación de formularios serverless con Netlify y diseño UI moderno con Tailwind.',
        impact: 'Puntaje de 100/100 en Lighthouse (Core Web Vitals), SEO técnico optimizado y gestión de contactos automatizada.',
        team: 'Desarrollo Fullstack y Diseño UI/UX.'
      }
  },
  // Puedes agregar más proyectos aquí
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Evita scroll de fondo
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Restaura scroll
  };

  return (
    <div>
      <Navbar />

      <header className="projects-hero">
        <h1>Nuestros Proyectos</h1>
        <p>Ingeniería de software y transformación digital aplicada.</p>
      </header>

      <section className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              
              {/* Tags de tecnologías */}
              <div className="project-tags">
                {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>

              <p>{project.shortDescription}</p>
              
              <button 
                onClick={() => openModal(project)} 
                className="project-button"
              >
                Ver Caso de Estudio
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* MODAL */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <h2>{selectedProject.title}</h2>
            <p className="modal-subtitle">Stack: {selectedProject.tags.join(' • ')}</p>
            
            <div className="modal-body">
                <div className="modal-section">
                    <h4>El Desafío</h4>
                    <p>{selectedProject.fullDescription.problem}</p>
                </div>
                <div className="modal-section">
                    <h4>La Solución Técnica</h4>
                    <p>{selectedProject.fullDescription.solution}</p>
                </div>
                <div className="modal-section">
                    <h4>Impacto y Sinergia</h4>
                    <p>{selectedProject.fullDescription.impact}</p>
                    <p><em>Equipo: {selectedProject.fullDescription.team}</em></p>
                </div>
            </div>

            <button className="submit-button" onClick={closeModal} style={{marginTop: '20px', width: '100%'}}>
                Cerrar Detalle
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Projects;