import React from 'react';
import './Contact.css'; // Importamos los nuevos estilos
import 'bootstrap-icons/font/bootstrap-icons.css'; // Aseguramos que los íconos estén disponibles

const Contact = () => {
  const email = "contacto@nextwavetech.com"; // Puedes cambiar este correo

  return (
    <section id="contacto" className="contact-section">
      <h2 className="section-title">Hablemos</h2>
      <p className="section-subtitle">
        ¿Listo para llevar tu proyecto al siguiente nivel? Contáctanos. Estamos aquí para ayudarte a construir el futuro digital de tu negocio.
      </p>

      <div className="contact-options-container">
        {/* Tarjeta de Email */}
        <div className="contact-card email-card">
          <i className="bi bi-envelope-paper-heart-fill"></i>
          <h3>Escríbenos un Correo</h3>
          <p>La forma más directa de contarnos sobre tu idea. Copia nuestra dirección o haz clic en el botón.</p>
          <div className="email-address">{email}</div>
          <a href={`mailto:${email}?subject=Consulta sobre proyecto web`} className="contact-button">
            Redactar Correo
          </a>
        </div>

        {/* Tarjeta de Redes Sociales */}
        <div className="contact-card social-card">
          <i className="bi bi-chat-dots-fill"></i>
          <h3>Otras Vías de Contacto</h3>
          <p>También puedes encontrarnos y conversar con nosotros en nuestras redes sociales.</p>
          <div className="contact-social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><i className="bi bi-telegram"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
