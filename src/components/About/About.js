import React from 'react';
import './About.css';
// Asegúrate de usar la ruta correcta a tu imagen
import teamImage from '../../assets/images/about-image.png'; 

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h2>Ingeniería y Estrategia Visual</h2>
        <p className="intro-text">
          Fusionamos la robustez de la <strong>Ingeniería Informática</strong> con la precisión del <strong>Control de Gestión</strong> y el Diseño Gráfico. 
          No solo escribimos código; optimizamos procesos y creamos experiencias visuales que impulsan negocios.
        </p>
      </div>

      <div className="about-content">
        {/* Perfil 1: Gonzalo (Informático) */}
        <div className="profile-card">
            <div className="profile-image-container">
                <img src={teamImage} alt="Gonzalo Hernández" />
            </div>
            <div className="profile-text">
                <h3>Gonzalo Hernández</h3>
                <span className="profile-role">Ingeniero en Informática Empresarial</span>
                <p>
                    El arquitecto del sistema. Especialista en lógica de negocio compleja, 
                    arquitectura de software y despliegue en la nube.
                </p>
                <div className="profile-skills">
                    <span>Laravel 12</span> • <span>Docker</span> • <span>Kotlin</span> • <span>AWS</span>
                </div>
            </div>
        </div>

        {/* Perfil 2: Marcelo (Auditor/Diseñador) */}
        <div className="profile-card">
            <div className="profile-image-container">
                <img src={teamImage} alt="Marcelo Hernández" />
            </div>
            <div className="profile-text">
                <h3>Marcelo Hernández</h3>
                <span className="profile-role">Auditor, Ing. Control de Gestión & Diseñador</span>
                <p>
                    El estratega visual y de negocio. Aporta la visión de auditoría para blindar los procesos financieros 
                    y el talento en diseño gráfico para crear interfaces intuitivas.
                </p>
                <div className="profile-skills">
                    <span>Adobe Suite</span> • <span>UI/UX</span> • <span>Auditoría</span> • <span>Gestión</span>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;