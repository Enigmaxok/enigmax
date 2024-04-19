import React from "react";
import cohete from "../../assets/images/cohete.png";
import "./whatIs.css";
const Potenciar = () => {
  return (
    <div className="potenciar">
      <img src={cohete} alt="" className="calidad-img" />

      <div className="calidad-text">
        <div className="potenciar-flex">
        <img src={cohete} alt="" className="cohete-mobile" />
        <h1>
          ¿Querés potenciar <span>tu marca?</span>{" "}
        </h1>
        </div>
        <p>
          ¡Potenciá tu espacio con Enigmax! Ya sea un bar, restaurante, centro
          cultural o salón de eventos, ofrecemos soluciones únicas para
          diferenciarte. Con planes flexibles y servicios personalizados, vas a
          atraer a nuevos clientes e impulsarás tu negocio. Imaginá tu local
          lleno de gente disfrutando de una función única ¡Contactanos!
        </p>
      </div>
    </div>
  );
};

export default Potenciar;
