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
        {/* Fundador 1 */}
        <div className="founder-profile">
          <div className="founder-photo-wrapper">
            <img src={fotoDesarrollador} alt="Foto de Carlos Guevara" className="founder-photo" />
          </div>
          <div className="founder-details">
            <h3>Carlos Alberto Guevara Otavo </h3>
            <h4>Desarrollador Web</h4>
            <p>Experto en desarrollo frontend y apasionado por crear interfaces de usuario intuitivas y dinámicas.</p>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a>
            </div>
          </div>
        </div>

        {/* Fundador 2 */}
        <div className="founder-profile">
          <div className="founder-photo-wrapper">
            <img src={fotoTecnico} alt="Foto del segundo fundador" className="founder-photo" />
          </div>
          <div className="founder-details">
            <h3>Haider Joaquin Rodriguez Cruz</h3>
            <h4>Especialista en Redes y Cableado</h4>
            <p>Especialista en diseño UX/UI, enfocado en la experiencia del usuario y la estética visual de los proyectos.</p>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre_mi;