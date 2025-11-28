import React from 'react';
import imagenPerfil from '../assets/logo_nextwave.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
// Importamos los nuevos estilos para esta sección
import './About.css';

function About() {
  return (
    <section id="inicio" className="company-about-container">
      {/* Contenedor principal para el diseño de dos columnas */}
      <div className="about-layout">
        {/* Columna Izquierda: Logo */}
        <div className="about-logo-column">
          <img src={imagenPerfil} alt="Logo de NextWave Technologies" className="hero-logo" />
        </div>

        {/* Columna Derecha: Información */}
        <div className="about-info-column">
          <h1>NextWave Technologies</h1>
          <p className="slogan">Impulsando tu futuro digital.</p>
          <p className="about-intro">
            Somos arquitectos de soluciones digitales. Fusionamos estrategia, diseño y tecnología para construir la infraestructura digital que su negocio necesita para prosperar. Nuestro enfoque se centra en la eficiencia, la innovación y la creación de valor tangible para nuestros clientes.
          </p>
        </div>
      </div>

      {/* La sección de servicios ahora se muestra debajo del encabezado principal */}
      <div className="services-overview-grid">
        {/* Servicio 1 */}
        <div className="service-overview-card">
          <i className="bi bi-code-slash"></i>
          <h3>Desarrollo Web a la Medida</h3>
          <p>Construimos tu presencia digital desde cero, con un diseño responsivo (mobile-first) que garantiza una experiencia de usuario impecable.</p>
        </div>
        {/* Servicio 2 */}
        <div className="service-overview-card">
          <i className="bi bi-hdd-network-fill"></i>
          <h3>Infraestructura de Redes</h3>
          <p>Diseñamos e implementamos soluciones de conectividad robustas para asegurar una red estable, segura y de alta velocidad.</p>
        </div>
        {/* Servicio 3 */}
        <div className="service-overview-card">
          <i className="bi bi-headset"></i>
          <h3>Soporte Técnico Especializado</h3>
          <p>Garantizamos la continuidad operativa de tus sistemas con asistencia remota para diagnóstico y resolución de incidencias.</p>
        </div>
        {/* Servicio 4 */}
        <div className="service-overview-card">
          <i className="bi bi-robot"></i>
          <h3>Integración de IA</h3>
          <p>Potenciamos tu web con IA, desde chatbots conversacionales hasta sistemas de recomendación personalizados.</p>
        </div>
      </div>
    </section>
  );
}

export default About;