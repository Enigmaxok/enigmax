import React, { useState, useEffect } from 'react';
import axios from 'axios';
import detective from '../../assets/images/detective-evento.png';
import quien from '../../assets/images/quien-asesino.svg';
import './modal.css';

const Evento = ({ selectedLocation }) => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventSelect = (event) => {
    setSelectedEvent(selectedEvent === event ? null : event);
  };

  const handleBuyTicketClick = (event) => {
    event.stopPropagation(); // Detiene la propagación del evento de clic
    // Coloca aquí la lógica para comprar el boleto
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://www.enigmax.com.ar/api/eventos');
        const eventosConColor = response.data.map((evento, index) => ({
          ...evento,
          color: coloresEvento[index % coloresEvento.length],
        }));
        setEvents(eventosConColor);
      } catch (error) {
        console.error('Error al obtener los eventos:', error);
      }
    };

    fetchEvents();
  }, []);

  const coloresEvento = ['#262626', '#793535', '#61428C', '#553924'];

  const filteredEvents = selectedLocation ? events.filter(event => event.lugar === selectedLocation) : events;

  return (
    <div className="modal-body">
      {filteredEvents.map((event, index) => (
  <div
  key={index}
  className={`evento-ctn ${selectedEvent === event ? 'expanded' : ''}`}
  style={{
    backgroundColor: event.color,
    clipPath: index % 2 === 0 ? 'polygon(0% 10%, 100% 0%, 100% 90%, 0% 78%)' : 'polygon(100% 80%, 0% 90%, 0% 0%, 100% 10%)',
    WebkitClipPath: index % 2 === 0 ? 'polygon(0% 10%, 100% 0%, 100% 90%, 0% 78%)' : 'polygon(100% 80%, 0% 90%, 0% 0%, 100% 10%)',
    height: selectedEvent === event ? '450px' : '150px', // Altura ajustada según si está seleccionado o no
  }}
  onClick={() => handleEventSelect(event)}
>
          <div>
            <div className={`evento-content ${selectedEvent === event ? 'expanded' : ''}`}>
              <img className='quien-evento' src={quien} alt="" />
              <img className='detective-evento' src={detective} alt="" />
              <div className='fecha-hora'>
                <h1>{event.fecha}</h1>
                <p>{event.hora}</p>
              </div>
            </div>
            {selectedEvent === event && (
              <div className="expanded-content">
                <p><strong>{event.titulo}</strong></p>
                <p>{event.descripcion}</p>
                <button  onClick={(e) => handleBuyTicketClick(e)}>  <a href={event.linkCompra} target='_blank' className="comprar-link">Comprar boleto</a></button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Evento;