import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Importamos y configuramos AOS (Animation On Scroll)
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

// 1. Importamos el componente ClickSpark
import ClickSpark from './components/ClickSpark.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClickSpark
      sparkColor='#000000' /* Cambiado a color negro */
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <App />
    </ClickSpark>
  </React.StrictMode>
);
