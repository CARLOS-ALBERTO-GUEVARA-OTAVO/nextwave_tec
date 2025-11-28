import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Sobre_mi from './components/sobre_mi';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Download from './components/Download';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {/* Cada componente ahora está envuelto en su propia sección con el nuevo estilo */}
        <section id="inicio" className="page-section hero-section">
          <About />
        </section>
        <section id="nosotros" className="page-section">
          <Sobre_mi />
        </section>
        <section id="servicios" className="page-section">
          <Skills />
        </section>
        <section id="proyectos" className="page-section">
          <Portfolio />
        </section>
        <section id="contacto" className="page-section">
          <Contact />
        </section>
      </main>
      <footer>
        <p>© 2025 Carlos Alberto Guevara Otavo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;