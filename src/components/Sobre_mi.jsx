import React from 'react';
import './Sobre_mi.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importamos los íconos de Bootstrap

import fotoTecnico from '../assets/descarga.png';
import fotoDesarrollador from '../assets/desarrollador.png';

// Datos de los fundadores para facilitar la escalabilidad
const foundersData = [
  {
    name: 'Carlos Alberto Guevara Otavo',
    role: 'Desarrollador Web Full-Stack',
    description: 'Especialista en el diseño de interfaces (UX/UI) y desarrollo de aplicaciones web. Transforma ideas en sistemas complejos y funcionales, y ofrece soporte técnico integral.',
    photo: fotoDesarrollador,
    linkedin: 'https://www.linkedin.com/in/carlos-guevara-84a697380/',
    github: 'https://github.com/CARLOS-ALBERTO-GUEVARA-OTAVO',
  },
  {
    name: 'Haider Joaquin Rodriguez Cruz',
    role: 'Especialista en Infraestructura y Seguridad',
    description: 'Experto en instalación y certificación de redes, fibra óptica y CCTV. Garantiza la robustez y seguridad de la infraestructura tecnológica y administra sistemas operativos.',
    photo: fotoTecnico,
    linkedin: '#', // Reemplazar con el link real
    github: '#', // Reemplazar con el link real
    photoClassName: 'haider-photo-adjustment', // Clase específica para ajustar su foto
  },
];

// Componente para el perfil individual para no repetir código
const FounderProfile = ({ name, role, description, photo, linkedin, github, photoClassName }) => (
  <div className="about-card">
    <div className="about-card-header">
      <img src={photo} alt={`Foto de ${name}`} className={`about-photo ${photoClassName || ''}`} />
    </div>
    <div className="about-card-body">
      <h3>{name}</h3>
      <h4>{role}</h4>
      <p>{description}</p>
      <div className="about-social-links">
        <a 
          href={linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
          className={linkedin === '#' ? 'disabled' : ''}>
          <i className="bi bi-linkedin" />
        </a>
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
          className={github === '#' ? 'disabled' : ''}>
          <i className="bi bi-github" />
        </a>
      </div>
    </div>
  </div>
);

const Sobre_mi = () => {
  return (
    <section id="nosotros" className="about-us-section">
      <div className="about-us-container">
        <div className="about-us-header">
          <h2 className="about-us-title">Sobre Nosotros</h2>
          <p className="about-us-subtitle">
            Somos un equipo apasionado por la tecnología, dedicado a crear soluciones digitales innovadoras y de alta calidad.
          </p>
        </div>
        <div className="about-cards-container">
          {foundersData.map((founder, index) => (
            <FounderProfile
              key={index}
              name={founder.name}
              role={founder.role}
              description={founder.description}
              photo={founder.photo}
              linkedin={founder.linkedin}
              github={founder.github}
              photoClassName={founder.photoClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sobre_mi;