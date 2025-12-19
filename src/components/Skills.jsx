import React from 'react';
import Slider from 'react-slick';
import './Skills.css'; // Importamos el CSS del componente

// Importamos los estilos del carrusel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importamos los íconos para que las flechas funcionen

// --- IMPORTANTE ---
// Debes crear estas imágenes y ponerlas en tu carpeta de assets.
import bgDesarrollo from '../assets/imagen_1.png';
import bgRedes from '../assets/imagen_2.png';
import bgMantenimiento from '../assets/imagen_3.png';
import bgSoporte from '../assets/imagen_4.png';
import bgSeguridad from '../assets/imagen_5.png';
import bgMantenimiento_2 from '../assets/imagen_6.png';

const Services = () => {
  // Definimos los servicios en un array para mapearlos fácilmente
  const services = [
    {
      icon: 'bi bi-code-slash',
      title: 'Diseño y Desarrollo Web',
      description: 'Creamos experiencias digitales únicas, desde landing pages impactantes hasta aplicaciones web complejas con interfaces (UX/UI) intuitivas y dinámicas.',
      backgroundImage: bgDesarrollo
    },
    {
      icon: 'bi bi-hdd-network-fill',
      title: 'Redes y Cableado Estructurado',
      description: 'Diseñamos e implementamos infraestructuras de red robustas y escalables. Certificamos cableado estructurado y fibra óptica para máxima velocidad.',
      backgroundImage: bgRedes
    },
    {
      icon: 'bi bi-headset',
      title: 'Mantenimiento de Equipos',
      description: 'Aseguramos la longevidad y el rendimiento óptimo de tu hardware con planes de mantenimiento preventivo y correctivo para equipos de oficina.',
      backgroundImage: bgMantenimiento
    },
    {
      icon: 'bi bi-pc-display-horizontal',
      title: 'Soporte y Sistemas Operativos',
      description: 'Optimizamos tus estaciones de trabajo mediante la instalación y configuración de sistemas operativos (Windows, Linux) y software esencial.',
      backgroundImage: bgSoporte
    },
    {
      icon: 'bi bi-camera-video-fill',
      title: 'Instalación de Cámaras de Seguridad',
      description: 'Protegemos tus activos con la instalación profesional de sistemas de videovigilancia (CCTV), ofreciendo monitoreo y seguridad constante.',
      backgroundImage: bgSeguridad
    },
    {
      icon: 'bi bi-person-check-fill',
      title: 'Soporte Técnico Integral',
      description: 'Ofrecemos asistencia técnica especializada para resolver cualquier incidencia de software o hardware, garantizando la continuidad de tu negocio.',
      backgroundImage: bgMantenimiento_2 
    }
  ];

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 0 }
      }
    ]
  };

  return (
    <section id="servicios" className="services-section" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="section-header text-center mb-5 px-3">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Entendemos tus necesidades y las transformamos en soluciones tecnológicas robustas y eficientes. Explora cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
        </div>
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="service-slide">
              <div 
                className="service-overview-card"
                style={{ backgroundImage: `url(${service.backgroundImage})` }}
              >
                <div className="card-overlay"></div>
                <div className="card-content">
                  <i className={service.icon}></i>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contacto" className="card-action-button" onClick={(e) => e.stopPropagation()}>
                    Saber más... <i className="bi bi-arrow-right-short"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
    </section>
  );
};

export default Services;