import React, { useState, useEffect } from 'react';
import './Projects.css';

import projectImage from '../assets/images/project1.webp'; 
import projectImage2 from '../assets/images/project2.png';

const projectsData = [
  {
    id: 1,
    title: 'Santa Rita Conectada',
    tags: ['Laravel 12', 'Kotlin Nativo', 'AWS S3', 'Redis', 'Docker'],
    image: projectImage, 
    shortDescription: 'Plataforma integral de gestión comunitaria. Ecosistema distribuido (Web + App Nativa) con transparencia financiera.',
    liveLink: 'https://www.santaritaconectada.cl/',
    fullDescription: {
      problem: 'La organización enfrentaba procesos manuales críticos, pérdida de información histórica en cuadernos, opacidad financiera y una brecha digital en sus usuarios.',      
      solution: 'Diseñamos un ecosistema distribuido robusto. Backend API RESTful en Laravel 12 gestionando roles (RBAC) y tesorería. App nativa Android (Kotlin + Compose) con arquitectura MVVM. Sistema de notificaciones multicanal procesado vía colas en Redis.',
      impact: 'Transparencia total en balances financieros, aumento en la participación de socios, eliminación de burocracia en papel y seguridad de datos garantizada en AWS.',        
      team: 'Arquitectura y Desarrollo Full-Stack (Gonzalo) + Diseño UI/UX y Control de Gestión (Marcelo).'
    }
  },
  {
      id: 2,
      title: 'Seguricor Web',
      tags: ['Astro', 'Tailwind CSS', 'TypeScript', 'Netlify'],
      image: projectImage2,
      shortDescription: 'Sitio corporativo ultrarrápido para empresa de servicios industriales.',
      liveLink: 'https://www.seguricor.cl/',
      fullDescription: {
        problem: 'La empresa requería digitalizar su catálogo de Cortinas Metálicas con foco en captación de leads y posicionamiento local.',
        solution: 'Arquitectura SSG (Static Site Generation) con Astro para velocidad máxima. Implementación de formularios serverless con Netlify y diseño UI moderno con Tailwind.', 
        impact: 'Puntaje de 100/100 en Lighthouse (Core Web Vitals), SEO técnico optimizado y gestión de contactos automatizada.',
        team: 'Desarrollo Fullstack y Diseño UI/UX.'
      }
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Manejo de scroll del body y tecla Escape
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      
      const handleEsc = (e) => {
        if (e.key === 'Escape') setSelectedProject(null);
      };
      window.addEventListener('keydown', handleEsc);
      
      return () => {
        window.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = 'auto';
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  return (
    <div className="projects-page">
      {/* Navbar eliminado para evitar duplicidad */}

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
                onError={(e) => {e.target.style.display='none'}} // Fallback si la imagen falla
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>

              <div className="project-tags">
                {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>

              <p>{project.shortDescription}</p>

              <button
                onClick={() => setSelectedProject(project)}
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
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <button className="close-button" onClick={() => setSelectedProject(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                <div className="modal-tags">Stack: {selectedProject.tags.join(' • ')}</div>
            </div>

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
                    <p style={{marginTop: '10px', fontStyle: 'italic', fontSize: '0.9rem'}}>
                        Equipo: {selectedProject.fullDescription.team}
                    </p>
                </div>
            </div>

            <button 
                className="project-button" 
                onClick={() => setSelectedProject(null)} 
                style={{background: 'var(--text-main)', color: 'white', borderColor: 'var(--text-main)'}}
            >
                Cerrar Detalle
            </button>
          </div>
        </div>
      )}

      {/* Footer eliminado para evitar duplicidad */}
    </div>
  );
};

export default Projects;