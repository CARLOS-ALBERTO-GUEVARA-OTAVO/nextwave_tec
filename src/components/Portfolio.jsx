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
      description: 'Plataforma web para el control de documentación vehicular. Permite configurar recordatorios para la renovación de licencias y SOAT, y consultar multas de tránsito para mantener todo al día.',
      imageUrl: imgProyectoWeb, // Usamos la imagen importada
      demoUrl: 'https://flotaxagc.com/', // Enlace al proyecto desplegado
      technologies: [
        { name: 'PHP', icon: 'devicon-php-plain colored' },
        { name: 'HTML5', icon: 'devicon-html5-plain colored' },
        { name: 'CSS3', icon: 'devicon-css3-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
        { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
        { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
        { name: 'Twilio', icon: 'bi bi-chat-dots-fill' }, // Icono fallback para Twilio
        { name: 'APIs', icon: 'bi bi-diagram-3-fill' }
      ]
    },
    {
      title: 'Sistema de Tickets: Soporte Biofix',
      description: 'Sistema de gestión de tickets que permite a los usuarios reportar incidencias. La plataforma organiza las solicitudes, las asigna a técnicos y permite hacer un seguimiento del estado de cada caso hasta su resolución.',
      imageUrl: imgProyecto2, // Placeholder
      demoUrl: null, // No hay demo pública
      technologies: [
        { name: 'PHP', icon: 'devicon-php-plain colored' },
        { name: 'HTML5', icon: 'devicon-html5-plain colored' },
        { name: 'CSS3', icon: 'devicon-css3-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
        { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
        { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
        { name: 'APIs', icon: 'bi bi-diagram-3-fill' }
      ]
    },
    {
      title: 'API REST: Gestor Documental Biofix',
      description: 'Servicio de backend diseñado para administrar un repositorio de documentos. Proporciona la lógica para la carga, organización, búsqueda y eliminación segura de archivos, gestionando los permisos de acceso.',
      imageUrl: imgProyecto3, // Placeholder
      demoUrl: null,
      technologies: [
        { name: 'PHP', icon: 'devicon-php-plain colored' },
        { name: 'HTML5', icon: 'devicon-html5-plain colored' },
        { name: 'CSS3', icon: 'devicon-css3-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
        { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
        { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
        { name: 'APIs', icon: 'bi bi-diagram-3-fill' }
      ]
    },
    {
      title: 'CLI: Préstamo de Herramientas',
      description: 'Aplicación de consola para el control de inventario de herramientas. Permite a los usuarios registrar, consultar, prestar y devolver herramientas directamente desde la terminal, agilizando la gestión del inventario.',
      imageUrl: imgProyecto4, // Placeholder
      demoUrl: null,
      technologies: [
        { name: 'PHP', icon: 'devicon-php-plain colored' },
        { name: 'HTML5', icon: 'devicon-html5-plain colored' },
        { name: 'CSS3', icon: 'devicon-css3-plain colored' },
        { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
        { name: 'MySQL', icon: 'devicon-mysql-plain colored' }
      ]
    }
    // --- Agrega más proyectos aquí ---
  ];

  return (
    <section id="proyectos" className="portfolio-section py-5" style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 mb-3" style={{ color: '#2c3e50' }}>Proyectos y Casos de Éxito</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Aquí puedes ver una selección de mi trabajo. Un proyecto desplegado y otros repositorios donde exploro diferentes tecnologías.
          </p>
        </div>
        
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card h-100 shadow-sm border-0 overflow-hidden hover-effect" style={{ transition: 'transform 0.3s ease' }}>
                <div className="row g-0 h-100">
                  {/* Imagen del proyecto */}
                  <div className="col-md-12" style={{ height: '250px', overflow: 'hidden', borderBottom: '1px solid #eee' }}>
                    <img 
                      src={project.imageUrl} 
                      className="img-fluid w-100 h-100" 
                      alt={`Vista previa de ${project.title}`} 
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                    />
                  </div>
                  
                  {/* Cuerpo de la tarjeta */}
                  <div className="col-md-12">
                    <div className="card-body d-flex flex-column p-4">
                      <h3 className="card-title h4 fw-bold mb-3" style={{ color: '#333' }}>{project.title}</h3>
                      <p className="card-text text-muted mb-4" style={{ lineHeight: '1.6' }}>{project.description}</p>
                      
                      <div className="mt-auto">
                        <h5 className="text-uppercase text-secondary fw-bold mb-3" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>Stack Tecnológico</h5>
                        <div className="d-flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="badge bg-light text-dark border d-flex align-items-center gap-2 px-3 py-2 rounded-pill fw-normal">
                              <i className={`${tech.icon} fs-6`}></i> {tech.name}
                            </span>
                          ))}
                        </div>
                        
                        {project.demoUrl && (
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100 fw-medium py-2">
                            <i className="bi bi-box-arrow-up-right me-2"></i> Ver Proyecto en Vivo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;