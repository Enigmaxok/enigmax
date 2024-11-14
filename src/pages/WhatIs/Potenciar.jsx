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
          En Enigmax, creemos firmemente que una de las estrategias más
          efectivas para el crecimiento es la colaboración entre marcas. Si
          tienes una marca y estás interesado en asociarte con nosotros,
          contáctanos. Podemos trabajar juntos para crear un nuevo producto o
          participar en los nuestros. Desde marcas de ropa que vistan a nuestros
          personajes hasta accesorios, productos, juegos y más. ¡Escribinos y
          analicemos cómo podemos colaborar para impulsar ambas marca!
        </p>
      </div>
    </div>
  );
};

export default Potenciar;
