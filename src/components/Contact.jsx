import React, { useState } from 'react';
import './Contact.css'; // Importamos los nuevos estilos
import 'bootstrap-icons/font/bootstrap-icons.css'; // Aseguramos que los íconos estén disponibles

const Contact = () => {
  const email = "nextwavetechnologiesjc@gmail.com";
  const [copyFeedback, setCopyFeedback] = useState(<i className="bi bi-clipboard"></i>); // Icono inicial: portapapeles vacío
  
  // Preparamos el asunto y el cuerpo del correo para la URL
  const subject = encodeURIComponent("Consulta sobre servicios de NextWave");
  const body = encodeURIComponent(
    "Hola, equipo de NextWave.\n\n" +
    "Estoy interesado/a en sus servicios y me gustaría obtener más información sobre:\n\n" +
    "[Por favor, especifica aquí el servicio de tu interés, ej: Diseño Web, Redes, etc.]\n\n" +
    "Gracias,\n" +
    "[Tu Nombre]"
  );

  const handleCopy = () => {
    console.log('Intentando copiar el correo:', email); // Mensaje en consola para depuración
    navigator.clipboard.writeText(email).then(() => {
      console.log('Correo copiado exitosamente!');
      setCopyFeedback('¡Copiado!');
      setTimeout(() => {
        setCopyFeedback(<i className="bi bi-clipboard"></i>); // Vuelve al ícono de portapapeles vacío
      }, 2000); // El mensaje vuelve al ícono después de 2 segundos
    }).catch(err => {
      console.error('Error al copiar el correo: ', err);
    });
  };

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
          <p>La forma más directa de contarnos sobre tu idea. Haz clic para copiar nuestra dirección o usa el botón para redactar.</p>
          <div className="email-address" onClick={handleCopy} title="Haz clic para copiar">
            <span className="copy-feedback">{copyFeedback}</span>
            <span>{email}</span>
          </div>
          <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`} target="_blank" rel="noopener noreferrer" className="contact-button">
            <i className="bi bi-pencil-square"></i> Redactar Correo
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
