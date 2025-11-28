import React from 'react';

const Download = () => {
  return (
    <section className="download-section">
      <div className="download-container">
        <h2>Descarga mi CV</h2>
        <p>Disponible en formato PDF</p>
        <a 
          href="/Hoja_De_Vida.pdf" 
          download="Carlos_Guevara_CV.pdf"
          className="download-btn"
        >
          <i className="bi bi-download"></i> Descargar CV
        </a>
      </div>
    </section>
  );
};

export default Download;