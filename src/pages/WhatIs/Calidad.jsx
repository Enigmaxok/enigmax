import React from "react";
import calidad from "../../assets/images/se-parte.jpg";
import "./whatIs.css";
const Calidad = () => {
  return (
    <div className="calidad">
      <img src={calidad} alt="" className="calidad-img" />

      <div className="calidad-text">
        <h1>
          Sé parte de <span>Enigmax </span>{" "}
        </h1>
        <p>
          ¡Potenciá tu espacio con Enigmax! Ya sea un bar, restaurante, centro
          cultural o salón de eventos, ofrecemos soluciones únicas para
          diferenciarte. Con planes flexibles y servicios personalizados, vas a
          atraer a nuevos clientes e impulsarás tu negocio. Imaginá tu local
          lleno de gente disfrutando de una función única ¡Escribinos para
          ponernos en contacto!
        </p>
      </div>
    </div>
  );
};

export default Calidad;
