import React from 'react';
import imagenPerfil from '../assets/logo_nextwave_V3.gif';                 
// Importamos Bootstrap Icons
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
          <h1>NextWave Technologies C</h1>
          <p className="slogan">Impulsando tu futuro digital.</p>
          <p className="about-intro">
            Somos arquitectos de soluciones digitales. Fusionamos estrategia y tecnología para construir la infraestructura que tu negocio necesita para prosperar. Convertimos tus ideas en realidades digitales eficientes, innovadoras y de alto impacto.
          </p>
          {/* Nueva sección de acciones y redes sociales */}
          <div className="about-actions">
            <a href="#contacto" className="cta-button-main">Hablemos de tu Proyecto</a>
            <div className="social-media-links">
              <a href="https://www.linkedin.com/in/carlos-guevara-84a697380/" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a href="https://github.com/CARLOS-ALBERTO-GUEVARA-OTAVO" aria-label="GitHub"><i className="bi bi-github"></i></a>
              <a href="https://www.instagram.com/next.wavetechnologies?igsh=MWh1Ym1iZ3Flem4zbA==" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              
            </div>
          </div>
        </div>
      </div>

      {/* Nueva sección de pilares o valores */}
      <div className="our-pillars">
        <div className="pillar-card">
          <i className="bi bi-lightbulb-fill"></i>
          <h4>Innovación Constante</h4>
          <p>Aplicamos las últimas tecnologías para ofrecer soluciones vanguardistas y eficientes.</p>
        </div>
        <div className="pillar-card">
          <i className="bi bi-gem"></i>
          <h4>Calidad Garantizada</h4>
          <p>Nos comprometemos con la excelencia en cada proyecto, asegurando resultados robustos y duraderos.</p>
        </div>
        <div className="pillar-card">
          <i className="bi bi-person-check-fill"></i>
          <h4>Enfoque en el Cliente</h4>
          <p>Tu visión es nuestra prioridad. Trabajamos contigo para alcanzar tus metas de negocio.</p>
        </div>
      </div>
    </section>
  );
}

export default About;