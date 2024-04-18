import React from 'react';
import calidad from '../../assets/images/calidad-img.webp'
import './whatIs.css'
const Calidad = () => {
  return (
    <div  className='calidad'>
        <div>

    <img src={calidad} alt="" />
        </div>
    <div className='calidad-text'>
    <h1>Calidad y seriedad</h1>
    <p>La identidad de marca de Enigmax se concibe para  transmitir robustez, liderazgo
y confianza. Busca que los clientes perciban la marca como sinónimo de éxito
asegurado en sus eventos y experiencias. La marca aspira a proyectar una
imagen sólida y confiable desde el primer contacto.</p>
    </div>
    </div>
  );
};

export default Calidad;