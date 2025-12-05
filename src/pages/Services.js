import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './Services.css';

// Usamos tus imágenes existentes. 
// TIP: Para el futuro, busca íconos o fotos que representen: Código, Móvil, Finanzas/Auditoría y Diseño.
import serviceImg1 from '../assets/images/service1.png'; 
import serviceImg2 from '../assets/images/service2.png'; 
import serviceImg3 from '../assets/images/service3.png'; 

const servicesData = [
  {
    id: 1,
    title: 'Desarrollo de Software a Medida',
    description: 'Sistemas robustos y escalables. Backend en Laravel 12 con Docker y Frontends rápidos en React o Astro. Arquitectura limpia para negocios que necesitan crecer.',
    image: serviceImg1,
    highlight: 'Laravel & Docker'
  },
  {
    id: 2,
    title: 'Desarrollo Android Móvil Nativo',
    description: 'No hacemos apps híbridas lentas. Desarrollamos 100% nativo en Android con Kotlin y Jetpack Compose para garantizar el máximo rendimiento y fluidez.',
    image: serviceImg2,
    highlight: 'Kotlin Nativo'
  },
  {
    id: 3,
    title: 'Control de Gestión & Procesos',
    description: 'Aplicamos visión de auditoría para analizar, corregir y optimizar los flujos de tu negocio antes de digitalizarlos. Software que cuadra financieramente.',
    image: serviceImg3, // Si tienes una imagen más "administrativa", úsala aquí
    highlight: 'Auditoría & KPIs'
  },
  {
    id: 4,
    title: 'Diseño Gráfico & UI/UX',
    description: 'Identidad visual completa. Desde logotipos y branding corporativo hasta el diseño de interfaces de usuario intuitivas y profesionales con Adobe Suite.',
    image: serviceImg1, // Reutilizamos la 1 por ahora si no tienes una 4ta imagen
    highlight: 'Branding & UI'
  }
];

const Services = () => {
  return (
    <div className="services-page">
      <Navbar />
      
      {/* HERO SECTION */}
      <header className="services-hero">
        <h1>Soluciones Integrales</h1>
        <p>Donde la Ingeniería Informática se encuentra con el Diseño y la Gestión.</p>
      </header>

      {/* INTRODUCCIÓN ESTRATÉGICA */}
      <section className="services-intro">
        <p>
          En <strong>VisualBytes</strong>, no solo programamos. Ofrecemos un enfoque multidisciplinario 
          que combina la lógica técnica de un <strong>Ingeniero Informático</strong> con la visión estratégica 
          y estética de un <strong>Auditor y Diseñador</strong>.
        </p>
      </section>

      {/* GRID DE SERVICIOS */}
      <section className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-item">
            <div className="image-wrapper" style={{height: '180px', overflow: 'hidden', borderRadius: '8px 8px 0 0', marginBottom: '15px'}}>
                 <img src={service.image} alt={service.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <h3>{service.title}</h3>
            <span className="price">{service.highlight}</span> {/* Usamos la clase 'price' para el destacado técnico */}
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      {/* SECCIÓN: POR QUÉ ELEGIRNOS (Beneficios) */}
      <section className="why-choose-us">
        <h2>¿Por qué VisualBytes?</h2>
        <div className="benefits">
          <div className="benefit">
            <h3>Visión 360°</h3>
            <p>Entendemos el código, pero también entendemos los balances financieros y la identidad de marca.</p>
          </div>
          <div className="benefit">
            <h3>Tecnología de Punta</h3>
            <p>Usamos stacks modernos (Laravel 12, Kotlin, AWS) que garantizan seguridad y escalabilidad a largo plazo.</p>
          </div>
          <div className="benefit">
            <h3>Diseño que Vende</h3>
            <p>Interfaces pensadas para el usuario final, no para el programador. Estética pulida y profesional.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;