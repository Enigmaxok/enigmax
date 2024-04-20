import React from 'react';
import '../Home/Experiencias/experiencias.css';
import { tarjetas } from './constants';
import Card from '../../Components/Cards/Card';
import './whatIs.css'
const Experiencias = () => {
 

  return (
    <div className="experiencias-container">
      <h2>
        <span className='highlighted-title'>Experiencias</span>
      </h2>
      <div className='que-experiencias'>
        
        {tarjetas.map((tarjeta, index) => (
          <div key={index} >
            <Card className="que-exp-card" {...tarjeta} />
          </div>
        ))}
    
        
        </div>   
    </div>
  );
};

export default Experiencias;