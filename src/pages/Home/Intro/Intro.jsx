import React from 'react';
import quien from "../../../assets/images/quien-asesino.svg";
import detective from '../../../assets/images/detective-home.webp';
import './intro.css'; // Importa los estilos CSS

const Intro = () => {
    return (
      <div className="intro-container">
        <div className="image-container detective-container">
          <img src={detective} alt="Detective" className="detective-image" />
        </div>
        <div className="image-container quien-container">
          <img src={quien} alt="Quién Asesino" className="quien-image" />
          <div className="text-container">
          <p >¡Viví una experiencia teatral única! Resolvé enigmas, interrogá sospechosos y descifra pistas para atrapar al asesino.</p>
        </div>
        <button>
  <a href="https://www.eventbrite.com.ar/o/enigmax-72358799663"  target="_blank">Reservá tu lugar</a>
</button>
        </div>
      </div>
    );
  };
  
  export default Intro;