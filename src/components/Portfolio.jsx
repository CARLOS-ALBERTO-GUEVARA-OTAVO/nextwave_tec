import './Portfolio.css'; // Importamos el CSS del componente

// 1. Importamos las imágenes de los proyectos desde la carpeta de assets
import imgProyectoWeb from '../assets/proyecto_web.png'; // Usaremos esta imagen como placeholder

const Portfolio = () => {
  // Arreglo de proyectos con la nueva estructura
  const projects = [
    {
      title: 'Proyecto Web Desplegado',
      description: 'Este es el proyecto principal que está actualmente en producción. Incluye una descripción detallada de su funcionalidad y el stack tecnológico utilizado.',
      imageUrl: imgProyectoWeb, // Usamos la imagen importada
      demoUrl: 'https://ejemplo.com/proyecto-desplegado', // Enlace al proyecto desplegado
      repoUrl: null // No hay repositorio para este
    },
    {
      title: 'Proyecto en GitHub 1',
      description: 'Descripción del primer proyecto que se encuentra en GitHub. Ideal para mostrar tus habilidades en el backend o lógica de negocio.',
      imageUrl: imgProyectoWeb, // Placeholder
      demoUrl: null, // No hay demo pública
      repoUrl: 'https://github.com/usuario/repositorio-1' // Enlace al repositorio
    },
    {
      title: 'Proyecto en GitHub 2',
      description: 'Este proyecto muestra la implementación de una API RESTful. El código está documentado y listo para ser revisado.',
      imageUrl: imgProyectoWeb, // Placeholder
      demoUrl: null,
      repoUrl: 'https://github.com/usuario/repositorio-2'
    },
    {
      title: 'Proyecto en GitHub 3',
      description: 'Una aplicación de consola o herramienta CLI desarrollada para automatizar tareas. Demuestra habilidades en scripting y desarrollo de herramientas.',
      imageUrl: imgProyectoWeb, // Placeholder
      demoUrl: null,
      repoUrl: 'https://github.com/usuario/repositorio-3'
    },
    {
      title: 'Proyecto en GitHub 4',
      description: 'Este repositorio contiene un proyecto experimental o una prueba de concepto utilizando una nueva tecnología o framework.',
      imageUrl: imgProyectoWeb, // Placeholder
      demoUrl: null,
      repoUrl: 'https://github.com/usuario/repositorio-4'
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