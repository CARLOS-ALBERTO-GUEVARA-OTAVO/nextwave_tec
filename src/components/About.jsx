import React from 'react';
import imagenPerfil from '../assets/fondo.gif';                 
// Importamos Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
// Importamos los nuevos estilos para esta sección
import FuzzyText from './FuzzyText.jsx'; // Importamos el componente de texto difuminado
import './About.css';

function About() {
  return (
    <section id="inicio" className="company-about-container" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Estilos específicos para móvil inyectados aquí para asegurar la adaptación */}
      <style>
        {`
          @media (max-width: 768px) {
            .company-about-container {
              padding: 3rem 1.5rem !important; /* Ajustamos padding para que no quede pegado al borde pero no se salga */
              overflow-x: hidden; /* Evita que aparezca barra de scroll horizontal */
            }
            .about-layout {
              flex-direction: column;
              text-align: center;
              width: 100%;
              margin: 0;
            }
            .about-logo-column {
              margin-bottom: 25px;
              width: 100%;
              display: flex;
              justify-content: center;
            }
            .hero-logo {
              /* Logo adaptable: ni muy grande ni muy pequeño */
              width: 65% !important; 
              max-width: 280px !important;
              height: auto;
            }
            .about-info-column {
              width: 100%;
              padding: 0; /* Eliminamos padding extra que pueda causar desborde */
              box-sizing: border-box;
            }
            .slogan {
              font-size: 1.1rem !important;
              margin-bottom: 1rem !important;
            }
            .about-intro {
              font-size: 0.95rem !important; /* Tamaño legible */
              line-height: 1.6 !important;
              width: 100%;
              word-wrap: break-word; /* Asegura que el texto no se salga si hay palabras largas */
            }
            .our-pillars {
              flex-direction: column;
              gap: 20px;
              margin-top: 2rem !important;
            }
            .pillar-card {
              width: 100%; /* Tarjetas ocupan el ancho disponible */
              box-sizing: border-box;
            }
            .fuzzy-title-container {
              justify-content: center;
              margin-left: 0 !important;
            }
            /* Solución para que el título no se corte en móvil */
            .fuzzy-title-container canvas {
              max-width: 100% !important;
              height: auto !important;
            }
          }
        `}
      </style>
      {/* Contenedor principal para el diseño de dos columnas */}
      <div className="about-layout">
        {/* Columna Izquierda: Logo */}
        <div className="about-logo-column">
          <img src={imagenPerfil} alt="Logo de NextWave Technologies" className="hero-logo" />
        </div>

        {/* Columna Derecha: Información */}
        <div className="about-info-column">
          {/* Título con el nuevo efecto FuzzyText */}
          <div className="fuzzy-title-container">
            <FuzzyText
              color="var(--primary-dark)"
              fontSize="clamp(2rem, 8vw, 3.5rem)"
              fontWeight={700}
              baseIntensity={0.05}  // Reducido para un efecto más sutil
              hoverIntensity={0.10} // Reducido para un efecto más sutil al pasar el ratón
            >
              NextWave Technologies
            </FuzzyText>
          </div>

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