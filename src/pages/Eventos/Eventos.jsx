import React from "react";
import "./eventos.css";
import detective from '../../assets/images/detective-eventos.png'
const Eventos = () => {
  return (
    <div className="eventos-ctn">
      <div className="title">
        <h1>Contrataciones</h1>
        <div className="border"></div>
        <p>Llevá Enigmax a tu evento y sorprendé a todos con nuestras propuestas lúdicas e inmersivas.</p>
      </div>

      <div className="modalidad">
        <div className="mixta">
          <div className="eventos-colored-title">

          <h1>Evento Social</h1>
          </div>
     <p>Transformá un cumple, casamiento, juntada de amigos, despedidas, etc, en una experiencia inolvidable. <br/><br/>
Llevamos todo lo necesario para que no tengas que preocuparte por nada, solo resolver los Enigmax del juego que vos elijas.<br/><br/>
Además del juego elegido, podemos sumar ambientación, catering, vestimenta, torta y mucho más!<br/><br/>
<strong>¡Contactate con nosotros para más info!</strong> </p>
        </div>

        <div className="fija">
        <div className="eventos-colored-title">
          <h1>Evento Empresarial</h1>
          </div>
 <p>Innová en tu empresa con reuniones de trabajo, inicios o cierres de año, presentación de productos, team building, y lo que se te ocurra.<br/><br/>
  Llevamos propuestas de evento a tu espacio, sino también tenés una amplia gama de espacios para vos, con servicios incluidos, invitaciones, acreditación, catering, ambientación, técnica, etc.

También podemos armar experiencias a medida únicas acorde a tu marca, producto y evento.
<br/><br/>
<strong>¡Contactate con nosotros y sorprendé a todos!</strong> </p>
        </div>
      </div>

      <div className="center-img">
      <img src={detective} alt="detective" />
    </div>
 

  
    </div>
  );
};

export default Eventos;
