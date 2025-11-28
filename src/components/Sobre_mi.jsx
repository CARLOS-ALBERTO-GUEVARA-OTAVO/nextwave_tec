import React from 'react';
import './Sobre_mi.css';
// 1. Importamos ambas imágenes desde la carpeta de assets
import fotoTecnico from '../assets/descarga.png';
import fotoDesarrollador from '../assets/desarrollador.png';

const Sobre_mi = () => {
  return (
    // Renombramos la sección a "Nosotros"
    <section id="nosotros" className="about-section">
      <h2 className="section-title">Sobre Nosotros</h2>
      <p className="section-subtitle">
        Somos un equipo apasionado por la tecnología, dedicado a crear soluciones digitales innovadoras y de alta calidad.
      </p>
      <div className="founders-container">
        {/* Perfil 1: Desarrollador */}
        <div className="founder-profile">
          <div className="founder-photo-wrapper">
            <img src={fotoDesarrollador} alt="Foto de Carlos Guevara" className="founder-photo" />
          </div>
          <div className="founder-details">
            <h3>Carlos Alberto Guevara Otavo </h3>
            <h4>Desarrollador Web</h4>
            <p>Especialista en el diseño de interfaces (UX/UI) y desarrollo de aplicaciones web, desde landing pages hasta sistemas complejos. También ofrece soporte técnico, incluyendo formateo de equipos e instalación de sistemas operativos.</p>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a>
            </div>
          </div>
        </div>

        {/* Perfil 2: Especialista en Infraestructura (con layout invertido) */}
        <div className="founder-profile reverse-layout">
          <div className="founder-details">
            <h3>Haider Joaquin Rodriguez Cruz</h3>
            <h4>Especialista en Infraestructura y Seguridad</h4>
            <p>Experto en la instalación y certificación de redes y cableado estructurado, incluyendo fibra óptica. Se encarga del mantenimiento de equipos, la instalación de sistemas de videovigilancia (CCTV) y la administración de sistemas operativos.</p>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a>
            </div>
          </div>
          <div className="founder-photo-wrapper">
            <img src={fotoTecnico} alt="Foto del segundo fundador" className="founder-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre_mi;