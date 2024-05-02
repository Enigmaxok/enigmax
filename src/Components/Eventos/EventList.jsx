import React, { useState, useEffect } from "react";
import axios from "axios";
import "./eventList.css";

const EventList = ({ onDeleteEvent, onEditEvent  }) => {
  const [events, setEvents] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  const [places, setPlaces] = useState([]);
  const [editEventId, setEditEventId] = useState(null); 
  const fetchEvents = async () => {
    try {
      const response = await axios.get("https://www.enigmax.com.ar/api/eventos");
      setEvents(response.data);

      const uniquePlaces = response.data.reduce((acc, event) => {
        if (!acc.includes(event.lugar)) {
          acc.push(event.lugar);
        }
        return acc;
      }, []);
      setPlaces(uniquePlaces);
    } catch (error) {
      console.error("Error al obtener la lista de eventos:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDeleteEvent = async (eventId) => {
    try {
      const confirmed = window.confirm("¿Estás seguro de que deseas eliminar este evento?");
      if (confirmed) {
        const url = `https://www.enigmax.com.ar/api/eventos/${eventId}`;
        await axios.delete(url);
        console.log("Evento eliminado correctamente");
        setEvents(events.filter((event) => event.id !== eventId));
      }
    } catch (error) {
      console.error("Error al eliminar el evento:", error);
    }
  };
 

  const handleFilterChange = (e) => {
    setFilterBy(e.target.value);
  };

  const filteredEvents = filterBy
    ? events.filter((event) => event.lugar === filterBy)
    : events;
    const sortedEvents = filteredEvents.sort((a, b) => {
      const dateA = new Date(a.fecha);
      const dateB = new Date(b.fecha);
      return dateA - dateB;
    });
  return (
    <div className="lista-eventos">
      <h3>Eventos Creados</h3>
      <div>
        <label htmlFor="filterBy">Filtrar por lugar:</label>
        <select id="filterBy" value={filterBy} onChange={handleFilterChange}>
          <option value="">Todos</option>
          {places.map((place) => (
            <option key={place} value={place}>
              {place}
            </option>
          ))}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Lugar</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sortedEvents.map((event) => (
            <tr key={event.id}>
              <td>{event.nombre}</td>
              <td>{event.fecha}</td>
              <td>{event.lugar}</td>
              <td>
                <button onClick={() => handleDeleteEvent(event.id)}>Eliminar</button>
                <button onClick={() => { onEditEvent(event); window.scrollTo(0, 0); }}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;