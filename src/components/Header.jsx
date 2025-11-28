import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css'; // Importamos los nuevos estilos
// 1. Importamos el logo desde la carpeta assets
import logoEmpresa from '../assets/logo_nextwave.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        {/* Espacio para el logo de tu empresa */}
        <img src={logoEmpresa} alt="Logo de NextWave" />
      </div>
      <nav className="main-nav">
        <div className="nav-links">
          <Link to="inicio" smooth={true} duration={500} offset={-140} activeClass="active">Inicio</Link>
          <Link to="nosotros" smooth={true} duration={500} offset={-140} activeClass="active">Nosotros</Link>
          <Link to="servicios" smooth={true} duration={500} offset={-140} activeClass="active">Servicios</Link>
          <Link to="proyectos" smooth={true} duration={500} offset={-140} activeClass="active">Proyectos</Link>
        </div>
        {/* Botón de Llamada a la Acción (CTA) */}
        <Link to="contacto" smooth={true} duration={500} offset={-140} className="cta-button">Contáctanos</Link>
      </nav>
    </header>
  );
};

export default Header;