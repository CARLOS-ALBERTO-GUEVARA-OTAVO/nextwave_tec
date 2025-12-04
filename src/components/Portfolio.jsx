import './Portfolio.css'; // Importamos el CSS del componente

// 1. Importamos las imágenes de los proyectos desde la carpeta de assets
import imgProyectoWeb from '../assets/proyecto_web.png';
import imgProyecto2 from '../assets/Proyecto1.png';
import imgProyecto3 from '../assets/Proyecto2.png';
import imgProyecto4 from '../assets/Proyecto3.png'; // Usaremos esta imagen como placeholder

const Portfolio = () => {
  // Arreglo de proyectos con la nueva estructura
  const projects = [
    {
      title: 'App de Gestión de Flotas: Flotaxa AGC',
      description: 'Plataforma web para la gestión logística de flotas que permite el seguimiento de vehículos en tiempo real, la asignación de rutas y la generación de reportes analíticos para optimizar operaciones.',
      imageUrl: imgProyectoWeb, // Usamos la imagen importada
      demoUrl: 'https://flotaxagc.com/', // Enlace al proyecto desplegado
      repoUrl: null // No hay repositorio para este
    },
    {
      title: 'Sistema de Tickets: Soporte Biofix',
      description: 'Sistema de gestión de tickets que permite a los usuarios reportar incidencias. La plataforma organiza las solicitudes, las asigna a técnicos y permite hacer un seguimiento del estado de cada caso hasta su resolución.',
      imageUrl: imgProyecto2, // Placeholder
      demoUrl: null, // No hay demo pública
      repoUrl: 'https://github.com/CARLOS-ALBERTO-GUEVARA-OTAVO/soporte_biofix' // Enlace al repositorio
    },
    {
      title: 'API REST: Gestor Documental Biofix',
      description: 'Servicio de backend diseñado para administrar un repositorio de documentos. Proporciona la lógica para la carga, organización, búsqueda y eliminación segura de archivos, gestionando los permisos de acceso.',
      imageUrl: imgProyecto3, // Placeholder
      demoUrl: null,
      repoUrl: 'https://github.com/CARLOS-ALBERTO-GUEVARA-OTAVO/proyecto_gestor'
    },
    {
      title: 'CLI: Préstamo de Herramientas',
      description: 'Aplicación de consola para el control de inventario de herramientas. Permite a los usuarios registrar, consultar, prestar y devolver herramientas directamente desde la terminal, agilizando la gestión del inventario.',
      imageUrl: imgProyecto4, // Placeholder
      demoUrl: null,
      repoUrl: 'https://github.com/CARLOS-ALBERTO-GUEVARA-OTAVO/prestamo_herramientas'
    }
    // --- Agrega más proyectos aquí ---
  ];

  return (
    <section id="proyectos" className="portfolio-section">
      <h2 className="section-title">Proyectos y Casos de Éxito</h2>
      <p className="section-subtitle">
        Aquí puedes ver una selección de mi trabajo. Un proyecto desplegado y otros repositorios donde exploro diferentes tecnologías.
      </p>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="project-visual">
              <img src={project.imageUrl} alt={`Vista previa de ${project.title}`} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-button demo">
                    <i className="bi bi-box-arrow-up-right"></i> Ver Proyecto
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-button github">
                    <i className="bi bi-github"></i> Ver Código
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;