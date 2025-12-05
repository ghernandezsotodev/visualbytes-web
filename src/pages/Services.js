import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

import serviceImg1 from '../assets/images/service1.jpg'; 
import serviceImg2 from '../assets/images/service2.jpg'; 
import serviceImg3 from '../assets/images/service3.png'; 
import serviceImg4 from '../assets/images/service4.png'; 

const servicesData = [
  {
    id: 1,
    category: "EL NÚCLEO TECNOLÓGICO",
    title: '01. Ingeniería de Software & Arquitectura',
    subtitle: 'Sistemas diseñados para soportar la operación crítica de tu negocio.',  
    image: serviceImg1,
    features: [
        { bold: 'Backends de Alto Rendimiento:', text: 'APIs RESTful complejas y desacopladas (Laravel 12 / Java Spring Boot / Flask / FastAPI / Django).' },
        { bold: 'Procesamiento Asíncrono:', text: 'Colas de trabajo con Redis para tareas pesadas sin afectar al usuario.' },    
        { bold: 'Seguridad Empresarial:', text: 'Autenticación OAuth2/Sanctum, RBAC y protección de datos.' },
        { bold: 'Infraestructura Escalable:', text: 'Docker y gestión de servidores Cloud (AWS/DigitalOcean).' }
    ]
  },
  {
    id: 2,
    category: "", // Vacío por estética
    title: '02. Desarrollo Móvil Nativo (Android)',
    subtitle: 'Llevamos tu operación al terreno con aplicaciones reales.',
    image: serviceImg2,
    features: [
        { bold: '100% Nativo:', text: 'Kotlin con Jetpack Compose. Rendimiento real, sin tecnologías híbridas.' },
        { bold: 'Funcionalidad Offline:', text: 'Persistencia de datos local (Room) y sincronización automática.' },
        { bold: 'Integración Total:', text: 'Comunicación vía Retrofit y alertas en tiempo real con Notificaciones Push.' }
    ]
  },
  {
    id: 3, 
    category: "IMPACTO VISUAL",
    title: '03. Diseño UI/UX & Branding', 
    subtitle: 'Diseño que no solo se ve bien, sino que cumple objetivos de negocio.',
    image: serviceImg3,
    features: [
        { bold: 'Diseño de Interfaces (UI/UX):', text: 'Prototipado en Figma enfocado en usabilidad y conversión.' },
        { bold: 'Identidad Visual:', text: 'Logotipos y branding corporativo (Adobe Illustrator/Photoshop).' },
        { bold: 'Modelado 3D:', text: 'Elementos 3D publicitarios de alto impacto en Cinema 4D.' }
    ]
  },
  {
    id: 4, 
    category: "ESTRATEGIA Y NEGOCIOS",
    title: '04. Control de Gestión & BI', 
    subtitle: 'Transformamos datos dispersos en decisiones estratégicas.',
    image: serviceImg4,
    features: [
        { bold: 'Auditoría de Procesos:', text: 'Analizamos y optimizamos flujos operativos antes de digitalizar.' },
        { bold: 'Dashboards & KPIs:', text: 'Paneles en Power BI para monitoreo de desempeño en tiempo real.' },
        { bold: 'Gestión de Riesgos:', text: 'Detección de fugas e ineficiencias para soluciones de raíz.' }
    ]
  }
];

const Services = () => {
  return (
    <div className="services-page">
      {/* Navbar eliminado (ya está en App.js) */}

      {/* HEADER / TÍTULO */}
      <header className="services-hero">
        <h1>Ingeniería, Gestión y Diseño</h1>
        <p>No vendemos "sitios web". Desarrollamos activos digitales que optimizan procesos, reducen riesgos y construyen marca.</p>
      </header>

      {/* GRID DE SERVICIOS DETALLADOS */}
      <section className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card-detail">
            <div className="service-img-container">
                 {/* Añadimos onError por si falla la imagen */}
                 <img 
                    src={service.image} 
                    alt={service.title} 
                    onError={(e) => {e.target.style.display='none'}}
                 />
            </div>
            <div className="service-info">
                {service.category && <span className="service-category">{service.category}</span>}

                <h3>{service.title}</h3>
                <p className="service-subtitle">{service.subtitle}</p>
                <ul className="service-features">
                    {service.features.map((item, index) => (
                        <li key={index}>
                            <strong>{item.bold}</strong> {item.text}
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        ))}
      </section>

      {/* BLOQUE DE CIERRE: METODOLOGÍA */}
      <section className="methodology-section">
        <div className="methodology-container">
            <h2>¿Cómo trabajamos?</h2>
            <p className="methodology-intro">Fusionamos metodologías ágiles con el rigor de la auditoría.</p>

            <div className="methodology-steps">
                <div className="step">
                    <div className="step-number">01</div>
                    <h4>Análisis Estratégico & KPIs</h4>
                    <p>Auditoría de Procesos (BPMN) y definición de indicadores clave de rendimiento (KPIs) para asegurar la viabilidad y rentabilidad del proyecto.</p>
                </div>
                <div className="step">
                    <div className="step-number">02</div>
                    <h4>UX/UI & Prototipado</h4>
                    <p>Diseño de la experiencia de usuario y prototipado interactivo en Figma para obtener la solución visual antes de escribir la primera línea de código.</p>
                </div>
                <div className="step">
                    <div className="step-number">03</div>
                    <h4>Ingeniería & QA</h4>
                    <p>Construcción robusta con arquitectura limpia, código versionado (Git), y aseguramiento de calidad (QA) que garantiza estabilidad y seguridad.</p>
                </div>
                <div className="step">
                    <div className="step-number">04</div>
                    <h4>DevOps & Despliegue</h4>
                    <p>Despliegue automatizado del sistema en contenedores Docker y ambientes Cloud (AWS), garantizando la disponibilidad y la escalabilidad.</p>
                </div>
                <div className="step">
                    <div className="step-number">05</div>
                    <h4>Control de Gestión & BI</h4>
                    <p>Medición de los KPIs definidos en la Fase 1 y creación de Dashboards en Power BI para validar el retorno de la inversión (ROI) con datos reales.</p>
                </div>
            </div>

            {/* CTA FINAL */}
            <div className="services-cta">
                <h3>¿Tu empresa necesita orden y tecnología?</h3>
                <Link to="/contact">
                    <button className="cta-button">Solicitar Evaluación Técnica</button>
                </Link>
            </div>
        </div>
      </section>

      {/* Footer eliminado (ya está en App.js) */}
    </div>
  );
};

export default Services;