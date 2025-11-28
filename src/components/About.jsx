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
          <h1>NextWave Technologies</h1>
          <p className="slogan">Impulsando tu futuro digital.</p>
          <p className="about-intro">
            Somos arquitectos de soluciones digitales. Fusionamos estrategia, diseño y tecnología para construir la infraestructura digital que su negocio necesita para prosperar. Nuestro enfoque se centra en la eficiencia, la innovación y la creación de valor tangible para nuestros clientes.
          </p>
        </div>
      </div>

      {/* La sección de servicios ahora se muestra debajo del encabezado principal */}
      <div className="services-overview-grid">
        {/* Diseño y Desarrollo Web */}
        <div className="service-overview-card">
          <i className="bi bi-code-slash"></i>
          <h3>Diseño y Desarrollo Web</h3>
          <p>Diseñamos interfaces de usuario (UX/UI) dinámicas y creamos desde landing pages hasta aplicaciones web complejas con sistemas de facturación.</p>
        </div>
        {/* Redes y Cableado Estructurado */}
        <div className="service-overview-card">
          <i className="bi bi-hdd-network-fill"></i>
          <h3>Redes y Cableado Estructurado</h3>
          <p>Instalamos y certificamos redes de datos robustas, incluyendo la manipulación e instalación de fibra óptica para garantizar la máxima velocidad y estabilidad.</p>
        </div>
        {/* Mantenimiento de Equipos */}
        <div className="service-overview-card">
          <i className="bi bi-headset"></i>
          <h3>Mantenimiento de Equipos</h3>
          <p>Ofrecemos mantenimiento preventivo y correctivo para equipos de oficina, asegurando su óptimo rendimiento y prolongando su vida útil.</p>
        </div>
        {/* Instalación de Sistemas Operativos */}
        <div className="service-overview-card">
          <i className="bi bi-pc-display-horizontal"></i>
          <h3>Soporte y Sistemas Operativos</h3>
          <p>Realizamos formateo e instalación de sistemas operativos como Windows 11 y Linux, además de software de Microsoft, optimizando el rendimiento de tus equipos.</p>
        </div>
        {/* Cámaras de Seguridad */}
        <div className="service-overview-card">
          <i className="bi bi-camera-video-fill"></i>
          <h3>Instalación de Cámaras de Seguridad</h3>
          <p>Implementamos sistemas de videovigilancia (CCTV) para proteger tus activos y garantizar la seguridad de tus instalaciones físicas.</p>
        </div>
        {/* Soporte General */}
        <div className="service-overview-card">
          <i className="bi bi-person-check-fill"></i>
          <h3>Soporte Técnico Integral</h3>
          <p>Brindamos soporte técnico especializado para resolver incidencias de software y hardware, garantizando la continuidad operativa de tu negocio.</p>
        </div>
      </div>
    </section>
  );
}

export default About;