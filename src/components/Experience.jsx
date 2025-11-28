import './Timeline.css'; // Importamos el estilo compartido

const Experience = () => {
  return (
    <section id="experiencia" className="timeline-section">
      <h2 className="section-title">Experiencia</h2>
      <div className="timeline-item">
        <h3>Desarrollador Frontend</h3>
        <p>Empresa XYZ | 2023 - Presente</p>
        <ul>
          <li>Desarrollo de interfaces con React</li>
          <li>Implementación de diseños responsivos</li>
        </ul>
      </div>
    </section>
  );
};
export default Experience;