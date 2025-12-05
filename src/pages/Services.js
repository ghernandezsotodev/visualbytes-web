import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './Services.css';

// Imágenes
import serviceImg1 from '../assets/images/service1.png'; 
import serviceImg2 from '../assets/images/service2.png'; 
import serviceImg3 from '../assets/images/service3.png'; 

const servicesData = [
  {
    id: 1,
    category: "EL NÚCLEO TECNOLÓGICO",
    title: '01. Ingeniería de Software & Arquitectura',
    subtitle: 'Sistemas diseñados para soportar la operación crítica de tu negocio.',
    image: serviceImg1,
    features: [
        { bold: 'Backends de Alto Rendimiento:', text: 'APIs RESTful complejas y desacopladas (Laravel 12 / Java Spring Boot).' },
        { bold: 'Procesamiento Asíncrono:', text: 'Colas de trabajo con Redis para tareas pesadas sin afectar al usuario.' },
        { bold: 'Seguridad Empresarial:', text: 'Autenticación OAuth2/Sanctum, RBAC y protección de datos.' },
        { bold: 'Infraestructura Escalable:', text: 'Docker y gestión de servidores Cloud (AWS/DigitalOcean).' }
    ]
  },
  {
    id: 2,
    category: "", // Se mantiene vacío para limpieza visual al ser del mismo bloque
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
    category: "ESTRATEGIA Y NEGOCIOS",
    title: '03. Control de Gestión & BI',
    subtitle: 'Transformamos datos dispersos en decisiones estratégicas.',
    image: serviceImg3,
    features: [
        { bold: 'Auditoría de Procesos:', text: 'Analizamos y optimizamos flujos operativos antes de digitalizar.' },
        { bold: 'Dashboards & KPIs:', text: 'Paneles en Power BI para monitoreo de desempeño en tiempo real.' },
        { bold: 'Gestión de Riesgos:', text: 'Detección de fugas e ineficiencias para soluciones de raíz.' }
    ]
  },
  {
    id: 4,
    category: "IMPACTO VISUAL",
    title: '04. Diseño UI/UX & Branding',
    subtitle: 'Diseño que no solo se ve bien, sino que cumple objetivos de negocio.',
    image: serviceImg1, 
    features: [
        { bold: 'Diseño de Interfaces (UI/UX):', text: 'Prototipado en Figma enfocado en usabilidad y conversión.' },
        { bold: 'Identidad Visual:', text: 'Logotipos y branding corporativo (Adobe Illustrator/Photoshop).' },
        { bold: 'Modelado 3D:', text: 'Elementos 3D publicitarios de alto impacto en Cinema 4D.' }
    ]
  }
];

const Services = () => {
  return (
    <div className="services-page">
      <Navbar />
      
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
                 <img src={service.image} alt={service.title} />
            </div>
            <div className="service-info">
                {/* Renderizado condicional: Solo muestra la categoría si tiene texto */}
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

      {/* BLOQUE DE CIERRE: METODOLOGÍA (Versión Clean) */}
      <section className="methodology-section">
        <div className="methodology-container">
            <h2>¿Cómo trabajamos?</h2>
            <p className="methodology-intro">Fusionamos metodologías ágiles con el rigor de la auditoría.</p>
            
            <div className="methodology-steps">
                <div className="step">
                    <div className="step-number">01</div>
                    <h4>Diagnóstico</h4>
                    <p>Auditoría para entender el negocio y los "dolores" operativos.</p>
                </div>
                <div className="step">
                    <div className="step-number">02</div>
                    <h4>Diseño (UI/UX)</h4>
                    <p>Prototipamos la solución visual antes de escribir código.</p>
                </div>
                <div className="step">
                    <div className="step-number">03</div>
                    <h4>Ingeniería</h4>
                    <p>Construcción robusta con código limpio (Laravel/Kotlin).</p>
                </div>
                <div className="step">
                    <div className="step-number">04</div>
                    <h4>Entrega y BI</h4>
                    <p>Lanzamiento y medición de impacto con datos reales.</p>
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

      <Footer />
    </div>
  );
};

export default Services;