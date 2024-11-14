import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import detective from "../../assets/images/detective-evento.png";
import quien from "../../assets/images/quien-asesino.svg";
import "./modal.css";

const Evento = ({ selectedLocation }) => {
  const [state, setState] = useState({
    events: [],
    selectedEvent: null,
    windowWidth: window.innerWidth,
    isExpanded: false,
  });

  const { events, selectedEvent, windowWidth, isExpanded } = state;
const handleEventSelect = useCallback((event) => {
  setState((prevState) => ({
    ...prevState,
    selectedEvent: prevState.selectedEvent === event ? null : event,
    isExpanded: prevState.selectedEvent === event ? !prevState.isExpanded : true,
  }));
}, []);

  const handleBuyTicketClick = (event) => {
    event.stopPropagation();
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get("https://www.enigmax.com.ar/api/eventos");
      const eventosConColor = response.data.map((evento, index) => ({
        ...evento,
        color: coloresEvento[index % coloresEvento.length],
      }));
      setState((prevState) => ({ ...prevState, events: eventosConColor }));
    } catch (error) {
      console.error("Error al obtener los eventos:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setState((prevState) => ({ ...prevState, windowWidth: window.innerWidth }));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const coloresEvento = ["#262626", "#793535", "#61428C", "#553924"];

  const filteredEvents = selectedLocation
    ? events.filter((event) => event.lugar === selectedLocation)
    : events;

  const formatDate = useCallback((dateString) => {
    const dateObj = new Date(dateString);
    const day = dateObj.getDate() + 1;
    const month = dateObj.getMonth() + 1;
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    return `${formattedDay}-${formattedMonth}`;
  }, []);

  const formatTime = useCallback((timeString) => {
    const timeObj = new Date(`1970-01-01T${timeString}`);
    const hours = timeObj.getHours();
    const minutes = timeObj.getMinutes();
    return `${hours}:${minutes.toString().padStart(2, "0")}`;
  }, []);

  const sortedEvents = filteredEvents.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

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
            height: selectedEvent === event
              ? "450px"
              : windowWidth < 650
                ? "120px"
                : "150px",
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
                    <img
                      className={`detective-evento ${
                        selectedEvent === event ? "expanded-detective" : ""
                      }`}
                      src={detective}
                      alt=""
                    />
                    <div
                      className={`fecha-hora ${
                        selectedEvent === event ? "expanded-margin" : ""
                      }`}
                    >
                      <h1>{formatDate(event.fecha)}</h1>
                      <p>{formatTime(event.hora)} hs</p>
                      <div className="lugar-par">
                        <h3>{event.lugar}</h3>
                        {selectedEvent === event && (
                          <div>{isExpanded && <p>${event.valor}</p>}</div>
                        )}
                      </div>
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

                      <div className="lugar-impar">
                        <h3>{event.lugar}</h3>
                        {selectedEvent === event && (
                          <div>{isExpanded && <p>${event.valor}</p>}</div>
                        )}
                      </div>
                    </div>

                    <img
                      className={`detective-evento ${
                        selectedEvent === event ? "expanded-detective" : ""
                      }`}
                      src={detective}
                      alt=""
                    />
                    <img
                      className={`quien-evento ${
                        selectedEvent === event ? "expanded-quien" : ""
                      }`}
                      src={quien}
                      alt=""
                    />
                  </div>
                </>
              )}
            </div>

            {selectedEvent === event && isExpanded && (
              <div className="expanded-content">
                <p className="descripcion">{event.descripcion}</p>
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
