import React from 'react';
import howToPlayData from './constants'; // Ajusta la ruta de importación según sea necesario
import './how.css'
const HowToPlay = ( ) => {
    return (
      <div className="how-to-play-container">
        <h2><span className="highlightedTitle">¿Cómo</span> se juega?</h2>
        {howToPlayData.map((step, index) => (
          <div key={index} className={`how-to-play-step ${index % 2 === 0 ? 'image-alternate' : ''}`}>
            <div className="step-content">
              <div className={`step-title-container ${index % 2 === 0 ? 'title-alternate' : 'title-normal'}`}>
                <h3 className="step-title">{step.title}</h3>
              </div>
              <p>{step.description}</p>
            </div>
            <img src={step.icon} alt={step.title} />
          </div>
        ))}
      </div>
    );
  };
  
  export default HowToPlay;