import React from 'react';
import './Skills.css'; // Importamos el CSS del componente

const Services = () => {
  // Lista de servicios que ofrece la empresa
  const services = [
    { name: 'Desarrollo Web', icon: 'fas fa-laptop-code', description: 'Creamos sitios web modernos, rápidos y responsivos.' },
    { name: 'Diseño UX/UI', icon: 'fas fa-palette', description: 'Diseñamos interfaces atractivas y fáciles de usar.' },
    { name: 'Aplicaciones Móviles', icon: 'fas fa-mobile-alt', description: 'Desarrollamos apps para iOS y Android.' },
    { name: 'Consultoría Tecnológica', icon: 'fas fa-cogs', description: 'Te asesoramos para elegir la mejor tecnología para tu proyecto.' },
    { name: 'E-commerce', icon: 'fas fa-shopping-cart', description: 'Implementamos tiendas en línea completas y seguras.' },
    { name: 'Mantenimiento Web', icon: 'fas fa-tools', description: 'Nos encargamos de que tu sitio esté siempre actualizado y funcionando.' },
  ];

  return (
    <section id="servicios" className="section services-section">
      <h2 className="section-title">Nuestros Servicios</h2>
      <div className="services-grid">
        {services.length > 0 ? (
          <>
            {services.map((service, index) => (
              <div key={index} className="service-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="service-icon">
                  <i className={service.icon} />
                </div>
                <h4 className="service-name">{service.name}</h4>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </>
        ) : (
          <p style={{ color: 'red' }}>Error: No skills data or rendering issue.</p>
        )}
      </div>
    </section>
  );
};

export default Services;