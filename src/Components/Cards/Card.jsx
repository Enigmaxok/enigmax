import React from 'react';
import './card.css'
const Card = ({ imagen, nombre, texto }) => {
  return (
    <div className="card">
      <img src={imagen} alt={nombre} />
      <div className="card-body">
        <h3>{nombre}</h3>
        <p>{texto}</p>
      </div>
    </div>
  );
};

export default Card;