import React from "react";
import "./eventos.css";
import detective from '../../assets/images/detective-eventos.png'
const Eventos = () => {
  return (
    <div className="eventos-ctn">
      <div className="title">
        <h1>Contrataciones</h1>
        <div className="border"></div>
      </div>

      <div className="modalidad">
        <div className="mixta">
          <h1>Modalidad Mixta</h1>
          <ul className="lista">
            <li>Venta de entradas a cargo de Enigmax</li>
            <li>Control de entradas a cargo de Enigmax</li>
            <li>Recaudación de entradas será para Enigmax</li>
            <li>Recaudación de consumiciones será para el establecimiento</li>
          </ul>
        </div>

        <div className="fija">
          <h1>Modalidad Fija</h1>
          <ul className="lista">
            <li>Precio fijo del espectáculo a cargo del establecimiento</li>
            <li>Venta de entradas a cargo del establecimiento</li>
            <li>Control de entradas a cargo del establecimiento</li>
            <li>Recaudación de entradas será para establecimiento</li>
            <li>Recaudación de consumiciones será para el establecimiento</li>
          </ul>
        </div>
      </div>

      <div className="center-img">
      <img src={detective} alt="detective" />
    </div>
 

  
    </div>
  );
};

export default Eventos;
