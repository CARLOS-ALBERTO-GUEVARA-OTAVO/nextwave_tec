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
      title: 'Proyecto Web Desplegado',
      description: 'Este es el proyecto principal que está actualmente en producción. Incluye una descripción detallada de su funcionalidad y el stack tecnológico utilizado.',
      imageUrl: imgProyectoWeb, // Usamos la imagen importada
      demoUrl: 'https://flotaxagc.com/', // Enlace al proyecto desplegado
      repoUrl: null // No hay repositorio para este
    },
    {
      title: 'Proyecto Soporte Biofix',
      description: 'Descripción del primer proyecto que se encuentra en GitHub. Ideal para mostrar tus habilidades en el backend o lógica de negocio.',
      imageUrl: imgProyecto2, // Placeholder
      demoUrl: null, // No hay demo pública
      repoUrl: 'https://github.com/CARLOS-ALBERTO-GUEVARA-OTAVO/soporte_biofix' // Enlace al repositorio
    },
    {
      title: 'Proyecto Gestor documental Biofix',
      description: 'Este proyecto muestra la implementación de una API RESTful. El código está documentado y listo para ser revisado.',
      imageUrl: imgProyecto3, // Placeholder
      demoUrl: null,
      repoUrl: 'https://github.com/CARLOS-ALBERTO-GUEVARA-OTAVO/proyecto_gestor'
    },
    {
      title: 'Proyecto de prestamos de herramientas',
      description: 'Una aplicación de consola o herramienta CLI desarrollada para automatizar tareas. Demuestra habilidades en scripting y desarrollo de herramientas.',
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