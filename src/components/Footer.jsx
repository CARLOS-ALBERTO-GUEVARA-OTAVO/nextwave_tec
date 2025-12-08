import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';
import logoEmpresa from '../assets/logo_nextwave.png';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Columna Sobre Nosotros */}
        <div className="footer-column about">
          <div className="footer-logo">
            <img src={logoEmpresa} alt="Logo NextWave" />
            <span className="footer-logo-text">NWT</span>
          </div>
          <p>Transformamos tus ideas en soluciones tecnológicas robustas y eficientes, construyendo el futuro digital de tu negocio.</p>
        </div>

        {/* Columna de Enlaces Rápidos */}
        <div className="footer-column links">
          <h4>Navegación</h4>
          <ul>
            <li><Link to="inicio" smooth={true} duration={500} offset={-140}>Inicio</Link></li>
            <li><Link to="servicios" smooth={true} duration={500} offset={-140}>Servicios</Link></li>
            <li><Link to="nosotros" smooth={true} duration={500} offset={-140}>Nosotros</Link></li>
            <li><Link to="proyectos" smooth={true} duration={500} offset={-140}>Proyectos</Link></li>
          </ul>
        </div>

        {/* Columna de Contacto */}
        <div className="footer-column contact">
          <h4>Contacto</h4>
          <p><i className="bi bi-envelope-fill"></i> nextwavetechnologiesjc@gmail.com</p>
          <p><i className="bi bi-whatsapp"></i> (+57) 314 431 2796</p> {/* Placeholder */}
        </div>

        {/* Columna de Redes Sociales */}
        <div className="footer-column social">
          <h4>Síguenos</h4>
          <div className="footer-social-icons">
            <a href="https://www.linkedin.com/in/carlos-guevara-84a697380/" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com/CARLOS-ALBERTO-GUEVARA-OTAVO" aria-label="GitHub"><i className="bi bi-github"></i></a>
            <a href="https://www.tiktok.com/@nextwave.technolo?_r=1&_t=ZS-91mejfumB2v" aria-label="TikTok"><i className="bi bi-tiktok"></i></a>
          </div>
        </div>
      </div>

      {/* Barra Inferior de Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2025 Tecnologías NextWave. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;