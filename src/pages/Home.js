import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../components/Hero/Hero.css';
import santaRitaMockup from '../assets/images/mockup-santa-rita.png';

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <h1 style={{ marginBottom: "20px" }}>Ingeniería de Software y Estrategia Digital</h1>
          <p style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.7" }}>
            Transformamos procesos complejos en software rentable. Unimos la robustez de la 
            <strong> ingeniería informática</strong> con la <strong>visión de negocios</strong> y el 
            diseño de experiencia, para que tu inversión digital realmente funcione.
          </p>

          <div 
            style={{ 
              display: 'flex', 
              gap: '15px',
              justifyContent: 'center',
              marginTop: '40px',
              flexWrap: 'wrap'
            }}
          >
            <Link to="/projects">
              <button className="hero-button">
                Ver Nuestros Proyectos
              </button>
            </Link>

            <Link to="/contact">
              <button 
                className="hero-button" 
                style={{
                  background: 'transparent',
                  border: '2px solid white',
                  color: 'white',
                  backdropFilter: 'blur(2px)'
                }}
              >
                Hablemos de tu Idea
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* NOSOTROS */}
      <section style={{ padding: '90px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.6rem', color: '#1F2937', marginBottom: '25px' }}>
            El equilibrio entre Lógica y Estrategia
          </h2>

          <p style={{ 
            fontSize: '1.1rem', 
            color: '#4B5563', 
            lineHeight: '1.8', 
            marginBottom: '50px',
            maxWidth: '800px',
            marginInline: 'auto'
          }}>
            En <strong>VisualBytes</strong> no somos una fábrica de código genérico. Somos un equipo multidisciplinario 
            que entiende ambas caras de la moneda:
          </p>

          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '35px', 
              justifyContent: 'center',
              textAlign: 'left'
            }}
          >
            {/* Núcleo Técnico */}
            <div style={{ 
              flex: '1 1 300px', 
              padding: '24px', 
              borderLeft: '4px solid #4F46E5',
              backgroundColor: '#F9FAFB', 
              borderRadius: '0 10px 10px 0',
              boxShadow: "0 4px 10px rgba(0,0,0,0.04)"
            }}>
              <h3 style={{ color: '#4F46E5', fontSize: '1.3rem', marginBottom: '12px' }}>
                El Núcleo Técnico
              </h3>
              <p style={{ color: '#374151', lineHeight: '1.6' }}>
                Un <strong>Ingeniero Informático</strong> experto en arquitecturas complejas y seguridad. 
                Construye sistemas <strong>blindados, escalables y de alto rendimiento</strong>.
              </p>
            </div>

            {/* Visión de Negocio */}
            <div style={{ 
              flex: '1 1 300px', 
              padding: '24px', 
              borderLeft: '4px solid #059669',
              backgroundColor: '#F9FAFB', 
              borderRadius: '0 10px 10px 0',
              boxShadow: "0 4px 10px rgba(0,0,0,0.04)"
            }}>
              <h3 style={{ color: '#059669', fontSize: '1.3rem', marginBottom: '12px' }}>
                La Visión de Negocio
              </h3>
              <p style={{ color: '#374151', lineHeight: '1.6' }}>
                Un <strong>Auditor y Diseñador</strong> que garantiza que cada desarrollo sea estéticamente impecable, 
                financieramente viable y optimice tus procesos reales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={{ padding: '90px 20px', backgroundColor: '#F3F4F6' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center',
            fontSize: '2.2rem',
            color: '#1F2937',
            marginBottom: '40px'
          }}>
            Soluciones Reales
          </h2>

          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '25px', 
              justifyContent: 'center'
            }}
          >
            {[
              {
                title: "Software a Medida",
                text: "Arquitecturas escalables para problemas complejos. Backends potentes y seguridad a largo plazo."
              },
              {
                title: "Apps Android Nativas",
                text: "Experiencia móvil superior. Desarrollo 100% nativo (Kotlin) para garantizar máxima fluidez y estabilidad."
              },
              {
                title: "Consultoría Digital",
                text: "Auditamos tus procesos actuales y diseñamos soluciones que reducen costos y eliminan errores manuales."
              },
              {
                title: "Diseño UI/UX",
                text: "Interfaces intuitivas alineadas con una identidad visual corporativa que transmite profesionalismo."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                style={{ 
                  background: 'white', 
                  padding: '32px', 
                  borderRadius: '12px',
                  flex: '1 1 250px',
                  boxShadow: '0 6px 14px rgba(0,0,0,0.06)',
                  transition: 'transform .2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <h3 style={{ 
                  color: '#1F2937', 
                  fontSize: '1.3rem',
                  marginBottom: '12px'
                }}>
                  {item.title}
                </h3>
                <p style={{ color: '#4B5563', lineHeight: '1.6' }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link 
              to="/services"
              style={{ 
                textDecoration: 'none', 
                color: '#4F46E5',
                fontWeight: '600',
                fontSize: '1.05rem'
              }}
            >
              Ver detalles técnicos →
            </Link>
          </div>
        </div>
      </section>

      {/* PROYECTO DESTACADO */}
      <section style={{ padding: '90px 20px', background: 'white' }}>
        <div 
          style={{ 
            maxWidth: '1100px', 
            margin: '0 auto', 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            gap: '40px' 
          }}
        >
          <div style={{ flex: '1 1 400px' }}>
            <span style={{ 
              color: '#4F46E5', 
              fontWeight: '700',
              textTransform: 'uppercase',
              fontSize: '0.9rem',
              letterSpacing: '0.5px'
            }}>
              Caso de Estudio
            </span>

            <h2 style={{ 
              fontSize: '2.2rem', 
              color: '#1F2937',
              marginTop: '15px',
              marginBottom: '20px'
            }}>
              Comunidad Santa Rita
            </h2>

            <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '20px' }}>
              <strong>El Reto:</strong> Una organización gestionada en papel, con opacidad financiera y desinformación.
            </p>

            <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '35px' }}>
              <strong>La Solución:</strong> Implementamos un ecosistema digital completo: App móvil nativa, dashboard administrativo web y notificaciones en tiempo real.
              <br /><br />
              <strong>Resultado:</strong> <span style={{color: '#059669', fontWeight: 'bold'}}>
                100% de transparencia financiera
              </span> y reducción drástica en tiempos de gestión.
            </p>

            <Link to="/projects">
              <button 
                style={{
                  padding: '12px 28px',
                  background: '#1F2937',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'opacity .2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '.85'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                Ver Caso de Estudio
              </button>
            </Link>
          </div>

          <div style={{ flex: '1 1 350px', textAlign: 'center' }}>
            <img 
              src={santaRitaMockup}
              alt="Mockup App Santa Rita Conectada"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '14px',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.12)'
              }}
            />
          </div>
        </div>
      </section>

      {/* STACK TECNOLÓGICO */}
      <section style={{ 
        background: '#FFFFFF',
        padding: '90px 20px',
        borderTop: '1px solid #E5E7EB'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.2rem', 
            color: '#1F2937', 
            marginBottom: '12px' 
          }}>
            Nuestra Base Tecnológica
          </h2>

          <p style={{ 
            textAlign: 'center', 
            color: '#4B5563',
            marginBottom: '50px',
            maxWidth: '700px',
            margin: '0 auto 50px auto',
            fontSize: '1.05rem'
          }}>
            Seleccionamos herramientas probadas por la industria para garantizar rendimiento, seguridad y escalabilidad.
          </p>

          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '30px', 
              justifyContent: 'center'
            }}
          >
            {[
              { cat: "Backend Robusto", tech: "Java (Spring Boot) • Laravel 12 • Python" },
              { cat: "Móvil de Alto Rendimiento", tech: "Kotlin Nativo • Jetpack Compose" },
              { cat: "Frontend Interactivo", tech: "React • Next.js • Tailwind CSS" },
              { cat: "Infraestructura Cloud", tech: "AWS • Docker • Redis • SQL" }
            ].map((stack, idx) => (
              <div 
                key={idx} 
                style={{ 
                  flex: '1 1 250px', 
                  textAlign: 'center', 
                  padding: '30px', 
                  background: '#F9FAFB',
                  borderRadius: '12px',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
                  transition: 'transform .2s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div 
                  style={{ 
                    width: '40px',
                    height: '4px',
                    background: '#4F46E5',
                    margin: '0 auto 20px auto',
                    borderRadius: '2px'
                  }}
                ></div>

                <h4 style={{ color: '#1F2937', marginBottom: '12px', fontSize: '1.2rem' }}>
                  {stack.cat}
                </h4>

                <p style={{ 
                  color: '#4B5563',
                  fontSize: '1rem',
                  fontWeight: '500',
                  lineHeight: '1.6'
                }}>
                  {stack.tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
