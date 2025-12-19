import React from 'react';
import './Sobre_mi.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importamos los íconos de Bootstrap

import fotoTecnico from '../assets/descarga.png';
import fotoDesarrollador from '../assets/desarrollador.png';

// Datos de los fundadores para facilitar la escalabilidad
const foundersData = [
  {
    name: 'Carlos Alberto <br /> Guevara Otavo',
    role: 'Desarrollador Full-Stack',
    description: 'Encargado de construir aplicaciones web completas. Transforma ideas en soluciones de software funcionales, trabajando tanto en la lógica del servidor (backend) como en la interfaz del usuario (frontend).',
    photo: fotoDesarrollador,
    linkedin: 'https://www.linkedin.com/in/carlos-guevara-84a697380/',
    github: 'https://github.com/CARLOS-ALBERTO-GUEVARA-OTAVO',
    instagram: 'https://www.instagram.com/carlos.g_1822?igsh=MXIybDR4NWpwMjkwbA==',
  },
  {
    name: 'Haider Joaquin <br /> Rodriguez Cruz',
    role: 'Especialista en Infraestructura y Redes',
    description: 'Responsable de la infraestructura tecnológica. Diseña e implementa redes de cableado estructurado y fibra óptica, instala sistemas de seguridad (CCTV) y administra sistemas operativos.',
    photo: fotoTecnico,
    linkedin: 'https://www.linkedin.com/in/haider-cruz-95048b3a0?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    github: null, // No tiene GitHub
    instagram: 'https://www.instagram.com/next.wavetechnologies?igsh=MWh1Ym1iZ3Flem4zbA==', // Reemplazar con el link real
    photoClassName: 'haider-photo-adjustment', // Clase específica para ajustar su foto
  },
];

// Componente para el perfil individual para no repetir código
const FounderProfile = ({ name, role, description, photo, linkedin, github, instagram, photoClassName }) => (
  <div className="about-card">
    <div className="about-card-header">
      <img src={photo} alt={`Foto de ${name}`} className={`about-photo ${photoClassName || ''}`} />
    </div>
    <div className="about-card-body">
      <h3 dangerouslySetInnerHTML={{ __html: name }} />
      <h4>{role}</h4>
      <p>{description}</p>
      <div className="about-social-links">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={linkedin === '#' ? 'disabled' : ''}>
            <i className="bi bi-linkedin" />
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={github === '#' ? 'disabled' : ''}>
            <i className="bi bi-github" />
          </a>
        )}
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={instagram === '#' ? 'disabled' : ''}>
            <i className="bi bi-instagram" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Sobre_mi = () => {
  return (
    <section id="nosotros" className="about-us-section" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
              instagram={founder.instagram}
              photoClassName={founder.photoClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sobre_mi;