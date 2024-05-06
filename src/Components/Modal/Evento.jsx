import React, { useState, useEffect } from "react";
import axios from "axios";
import detective from "../../assets/images/detective-evento.png";
import quien from "../../assets/images/quien-asesino.svg";
import "./modal.css";

const Evento = ({ selectedLocation }) => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleEventSelect = (event) => {
    setSelectedEvent(selectedEvent === event ? null : event);
  };

  const handleBuyTicketClick = (event) => {
    event.stopPropagation(); 

  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://www.enigmax.com.ar/api/eventos"
        );
        const eventosConColor = response.data.map((evento, index) => ({
          ...evento,
          color: coloresEvento[index % coloresEvento.length],
        }));
        setEvents(eventosConColor);
      } catch (error) {
        console.error("Error al obtener los eventos:", error);
      }
    };

    fetchEvents();
  }, []);

  const coloresEvento = ["#262626", "#793535", "#61428C", "#553924"];

  const filteredEvents = selectedLocation
    ? events.filter((event) => event.lugar === selectedLocation)
    : events;

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const day = dateObj.getDate() +1;
    const month = dateObj.getMonth() + 1;
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDate = `${formattedDay}-${formattedMonth}`;
    return formattedDate;
  };

  const formatTime = (timeString) => {
    const timeObj = new Date(`1970-01-01T${timeString}`);
    const hours = timeObj.getHours();
    const minutes = timeObj.getMinutes();

    let formattedTime = `${hours}:${minutes.toString().padStart(2, "0")}`;

    return formattedTime;
  };

  const sortedEvents = filteredEvents.sort((a, b) => {
    const dateA = new Date(a.fecha);
    const dateB = new Date(b.fecha);
    return dateA - dateB;
  });
  return (
    <div className="modal-body">
      {sortedEvents.map((event, index) => (
        <div
          key={index}
          className={`evento-ctn ${selectedEvent === event ? "expanded" : ""} ${
            index % 2 === 0 ? "polygon-1" : "polygon-2"
          } ${selectedEvent === event ? "selected" : ""}`}
          style={{
            backgroundColor: event.color,
            height: selectedEvent === event ? "450px" : (windowWidth < 650 ? "120px" : "150px"),
          }}
          onClick={() => handleEventSelect(event)}
        >
          <div className="ctn-event">
            <div
              className={`evento-content ${
                selectedEvent === event ? "expanded" : ""
              }`}
            >
              {index % 2 === 0 ? ( 
                <>
                  <div className="event-images">
                    <img className="quien-evento" src={quien} alt="" />
                    <img  className={`detective-evento ${
                        selectedEvent === event ? "expanded-detective" : ""
                      }`} src={detective} alt="" />
                    <div
                      className={`fecha-hora ${
                        selectedEvent === event ? "expanded-margin" : ""
                      }`}
                    >
                      <h1>{formatDate(event.fecha)}</h1>
                      <p>{formatTime(event.hora)} hs</p>
                    </div>
                  </div>
                </>
              ) : (
            
                <>
                  <div className="event-images">
                    <div
                      className={`fecha-hora ${
                        selectedEvent === event ? "expanded-margin" : ""
                      }`}
                    >
                      <h1>{formatDate(event.fecha)}</h1>
                      <p>{formatTime(event.hora)} hs</p>
                    </div>
                    <img  className={`detective-evento ${
                        selectedEvent === event ? "expanded-detective" : ""
                      }`} src={detective} alt="" />
                    <img className={`quien-evento ${
                        selectedEvent === event ? "expanded-quien" : ""
                      }`}  src={quien} alt="" />
                  </div>
                </>
              )}
            </div>

            {selectedEvent === event && (
              <div className="expanded-content">
                <p className="valor">
                  <strong>${event.valor}</strong>
                </p>
              
                <p className="descripcion">
                  <strong>{event.descripcion}</strong>{" "}
                </p>
                <button onClick={(e) => handleBuyTicketClick(e)}>
                  {" "}
                  <a
                    href={event.linkCompra}
                    target="_blank"
                    className="comprar-link"
                  >
                    Reservá tu lugar 
                  </a>
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Evento;
