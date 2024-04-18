import React from 'react';
import historia from '../../assets/images/historia.jpg'
import './whatIs.css'
const Historia = () => {
  return (
    <div  className='historia'>
        <div>

    <img src={historia} alt="" />
        </div>
    <div className='historia-text'>
    <h1>Historia</h1>
    <p>Enigmax nace de la colaboración entre dos amigos, Mariano y Sebastian, con un
espíritu emprendedor que los llevó a explorar diversos proyectos y empresas. La sinergia de sus habilidades condujo al éxito de un local de salas de escape,
abriendo así las puertas al emocionante mundo de las experiencias inmersivas y
lúdicas. Esta trayectoria  inspiradora culmina en la creación de Enigmax, una empresa dedicada a la realización de juegos de rol inmersivos e innovadores.</p>
    </div>
    </div>
  );
};

export default Historia;