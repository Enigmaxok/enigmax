import React from 'react';
import './whatIs.css'
import Card from '../../Components/Cards/Card';
import mision from '../../assets/images/mision.png'
import vision from '../../assets/images/vision.png'
import valores from '../../assets/images/valores.png'
const Perspectiva = () => {
  return (
    <div className='perspectiva-ctn'>
        <div className='title-perspectiva'>

      <h1><span>Nuestra</span> Perspectiva</h1>
      <h3>Enigmax se caracteriza desde sus fundamentos en 3 ejes.</h3>
        </div>
      <div className='contenido-perspectiva'>
       <Card className="card" imagen={mision} nombre='Misión' texto='Los valores que guían a Enigmax son la innovación, la calidad, la creatividad y la
visión empresarial desde sus inicios. ' />
 <Card className="card" imagen={vision} nombre='Visión' texto='Destacamos en la búsqueda de
experiencias únicas, diferenciándonos mediante la posibilidad de interactuar con actores y participar activamente en la trama de sus juegos.' />
 <Card className="card" imagen={valores} nombre='Valores' texto='La
escalabilidad y versatilidad del proyecto son puntos clave, junto con un
compromiso firme con la calidad y la innovación. ' />
      </div>
    </div>
  );
};

export default Perspectiva;