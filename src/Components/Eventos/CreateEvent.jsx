import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "leaflet/dist/leaflet.css"; // Importa los estilos de Leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./createEvent.css";
import EventList from "./EventList";
import iconMarker from "../../assets/images/location.svg";
const CreateEvent = ({ onEventCreate }) => {
  const [eventName, setEventName] = useState("¿Quién asesinó a Beatriz?");
  const [eventDescription, setEventDescription] = useState("");
  const [eventHour, setEventHour] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventTicketLink, setEventTicketLink] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [eventLugar, setEventLugar] = useState("");
  const mapRef = useRef(null);
  const [eventList, setEventList] = useState([]);
  const [accessKey, setAccessKey] = useState("");
  const [accessKeyVerified, setAccessKeyVerified] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // Nuevo estado para controlar la alerta
  const [editEvent, setEditEvent] = useState(null);
  const [eventIdBeingEdited, setEventIdBeingEdited] = useState(null);
  const [valor, setValor] = useState("");
  const customIcon = L.icon({
    iconUrl: iconMarker,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
  const handleEdit = (event) => {
    setEditEvent(event); // Establecer el evento en edición
    // Asignar los datos del evento al formulario de edición
    setEventIdBeingEdited(event.id); // Guardar el ID del evento en edición
    setEventName(event.nombre);
    setEventDescription(event.descripcion);
    setEventLugar(event.lugar);
    setEventHour(event.hora);
    setEventDate(event.fecha);
    setEventLocation(event.ubicacion);
    setEventTicketLink(event.linkCompra);
    setValor(event.valor);
  };
  useEffect(() => {
    const storedAccessKey = localStorage.getItem("accessKey");
    if (storedAccessKey) {
      setAccessKey(storedAccessKey);
    }
  }, []);
  const verificarAcceso = async () => {
    try {
      const response = await axios.post(
        "https://www.enigmax.com.ar/api/access-key/validate",
        {
          claveSinEncriptar: accessKey,
        }
      );
      console.log(response.data);
      setAccessKeyVerified(true);
      localStorage.setItem("accessKey", accessKey);
      setTimeout(() => {
        localStorage.removeItem("accessKey");
        setAccessKey("");
      }, 10 * 60 * 1000); // 10 minutos en milisegundos
    } catch (error) {
      console.error("Error al verificar la clave de acceso:", error);
      alert(
        "Clave de acceso incorrecta. Por favor, ingresa la clave correcta."
      );
    }
  };

  const handleCreateOrUpdateEvent = async () => {
    if (
      eventName.trim() === "" ||
      eventDescription.trim() === "" ||
      eventHour.trim() === "" ||
      eventDate.trim() === "" ||
      eventLocation.trim() === "" ||
      eventTicketLink.trim() === "" ||
      valor.trim() === "" ||
      !selectedLocation
    ) {
      alert("Por favor completa todos los campos antes de crear el evento.");
      return;
    }

    const eventToUpdateOrNew = {
      nombre: eventName.trim(),
      valor: valor.trim(),
      descripcion: eventDescription.trim(),
      hora: eventHour.trim(),
      fecha: eventDate.trim(),
      ubicacion: eventLocation.trim(),
      linkCompra: eventTicketLink.trim(),
      coordenadas: selectedLocation
        ? [selectedLocation.lat, selectedLocation.lng]
        : null,
      lugar: eventLugar,
    };

    try {
      if (editEvent) {
        const response = await axios.put(
          `https://www.enigmax.com.ar/api/eventos/${eventIdBeingEdited}`,
          eventToUpdateOrNew
        );
        console.log("Respuesta del servidor (Update):", response.data);
        window.alert("Evento actualizado con éxito");
      } else {
        const response = await axios.post(
          "https://www.enigmax.com.ar/api/eventos",
          eventToUpdateOrNew
        );
        console.log("Respuesta del servidor (Create):", response.data);
        window.alert("Evento creado con éxito");
      }

      fetchEvents();
    } catch (error) {
      console.error("Error al crear o actualizar el evento:", error);
    }
  };

  const handleLocationSearch = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${eventLocation}`
      );
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        const newSelectedLocation = {
          lat: parseFloat(lat),
          lng: parseFloat(lon),
        };
        setSelectedLocation(newSelectedLocation);

        if (mapRef.current) {
          mapRef.current.setView(newSelectedLocation, 13);
        }
      }
    } catch (error) {
      console.error("Error al obtener las coordenadas:", error);
    }
  };

  const handleMapClick = (e) => {
    setSelectedLocation(e.latlng);
  };

  return (
    <div className="create-event-container">
      {!accessKeyVerified && (
        <div className="key-ctn">
          <input
            type="password"
            value={accessKey}
            onChange={(e) => setAccessKey(e.target.value)}
            placeholder="Ingrese la clave de acceso"
            style={{ marginTop: "150px" }}
          />
          <button onClick={verificarAcceso}>Verificar Acceso</button>
        </div>
      )}
      {accessKeyVerified && (
        <>
          <h2>Crear Evento</h2>
          <div className="createEvent">
            <div className="input-column">
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="Nombre del evento"
              />
                     <input
                type="text"
                value={eventLugar}
                onChange={(e) => setEventLugar(e.target.value)}
                placeholder="Lugar del evento"
              />
              <input
                type="text"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                placeholder="Ingrese el valor"
              />
           
        
                  <textarea
                type="text"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                placeholder="Descripción del evento"
              />
              <input
                type="time"
                value={eventHour}
                onChange={(e) => setEventHour(e.target.value)}
                placeholder="Hora"
              />
            </div>
            <div className="input-column">
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                placeholder="Fecha"
              />
              <input
                type="text"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
                placeholder="Ubicación"
                onKeyDown={(e) => {
                  if (e.keyCode === 13) {
                    handleLocationSearch();
                  }
                }}
              />
              <button onClick={handleLocationSearch}>Buscar Ubicación</button>
              <input
                type="text"
                value={eventTicketLink}
                onChange={(e) => setEventTicketLink(e.target.value)}
                placeholder="Link de compra"
              />
            </div>
          </div>
          <MapContainer
            ref={mapRef}
            center={[-34.6037, -58.3816]}
            zoom={13}
            className="mapa-create"
            onClick={handleMapClick}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {selectedLocation && (
              <Marker position={selectedLocation} icon={customIcon}>
                <Popup>Ubicación del evento</Popup>
              </Marker>
            )}
          </MapContainer>
          <button className="crear-button" onClick={handleCreateOrUpdateEvent}>
            {editEvent ? "Confirmar Cambios" : "Crear Evento"}
          </button>
          <div className="lista-eventos">
            <EventList onEditEvent={handleEdit} />
          </div>
        </>
      )}
    </div>
  );
};

export default CreateEvent;