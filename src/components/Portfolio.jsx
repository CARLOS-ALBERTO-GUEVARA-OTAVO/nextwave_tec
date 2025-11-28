import './Portfolio.css'; // Importamos el CSS del componente

const Portfolio = () => {
  // Esta sección puede mostrar proyectos, casos de estudio o certificados
  const items = [
    {
      title: 'Proyecto E-commerce para "Tienda X"',
      issuer: 'Caso de Estudio',
      fileUrl: '#' // Puedes enlazar a un PDF con el caso de estudio
    },
    {
      title: 'App Móvil para "Startup Y"',
      issuer: 'Proyecto Interno',
      fileUrl: '#'
    },
    {
      title: 'Certificación en Metodologías Ágiles',
      issuer: 'Scrum Alliance',
      fileUrl: '/certificates/scrum-alliance.pdf'
    }
    // --- Agrega más items aquí ---
  ];

  return (
    <section id="proyectos" className="portfolio-section">
      <h2 className="section-title">Proyectos y Casos de Éxito</h2>
      <div className="portfolio-grid">
        {items.map((item, index) => (
          <div key={index} className="certificate-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <i className="bi bi-file-earmark-text-fill certificate-icon"></i>
            <h3>{item.title}</h3>
            <p className="issuer">Categoría: {item.issuer}</p>
            <a href={item.fileUrl} download className="download-button">
              <i className="bi bi-eye-fill"></i> Ver Detalles
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Portfolio;