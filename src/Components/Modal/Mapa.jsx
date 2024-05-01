import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './modal.css';
import iconMarker from '../../assets/images/location.svg';
const Mapa = ({ onNext }) => {
  const [map, setMap] = useState(null);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [uniqueLocations, setUniqueLocations] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const userMarkerRef = useRef(null);
  const customIcon = L.icon({
    iconUrl: iconMarker,  
    iconSize: [32, 32],  
    iconAnchor: [16, 32], 
   
  });
  useEffect(() => {
    const mapInstance = L.map('map').setView([-34.6037, -58.3816], 13);
    const bounds = L.latLngBounds([-34.7052, -58.5291], [-34.5221, -58.3169]);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInstance);
    mapInstance.fitBounds(bounds);
    setMap(mapInstance);

    // Agregar marcador de usuario al mapa
    const userMarker = L.marker([0, 0], { icon: customIcon }).addTo(mapInstance);
    userMarker.bindPopup('Tu ubicación').openPopup();
    userMarkerRef.current = userMarker;

    return () => {
      mapInstance.remove();
    };
  }, []);
  useEffect(() => {
    if (map && selectedLocation) {
      // Encuentra las coordenadas de la ubicación seleccionada
      const selectedEvent = events.find((event) => event.lugar === selectedLocation);
      if (selectedEvent) {
        const parsedCoordenadas = JSON.parse(selectedEvent.coordenadas);
        const selectedLatLng = L.latLng(parsedCoordenadas[0], parsedCoordenadas[1]);
  
        // Centra el mapa en la ubicación seleccionada
        map.setView(selectedLatLng, 13);
      }
    }
  }, [map, selectedLocation, events]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://www.enigmax.com.ar/api/eventos');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error al obtener los eventos:', error);
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      const locations = events.map((event) => event.lugar);
      const uniqueLocations = [...new Set(locations)];
      setUniqueLocations(uniqueLocations);
    }
  }, [events]);

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation([position.coords.latitude, position.coords.longitude]);
          },
          (error) => {
            console.error('Error al obtener la ubicación del usuario:', error);
            setLocationError('No se pudo obtener la ubicación del usuario.');
          }
        );
      } else {
        console.error('La geolocalización no es compatible con este navegador.');
        setLocationError('La geolocalización no es compatible con este navegador.');
      }
    };

    getUserLocation();
  }, []);

  useEffect(() => {
    if (map && events.length > 0) {
      updateMarkers(selectedLocation);
    }
  }, [map, events, selectedLocation]);

  useEffect(() => {
    if (map && userLocation) {
      userMarkerRef.current.setLatLng(userLocation).update();
      map.setView(userLocation, 13);
    }
  }, [map, userLocation]);

  const updateMarkers = (location) => {
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker && layer !== userMarkerRef.current) {
        map.removeLayer(layer);
      }
    });
  
    for (const event of events) {
      if (event.lugar === location) {
        const parsedCoordenadas = JSON.parse(event.coordenadas);
        const marker = L.marker(parsedCoordenadas, { icon: customIcon }).addTo(map);  
        marker.bindPopup(`<b>${event.nombre}</b><br />${event.descripcion}`);
        marker.on('click', () => {
          setSelectedEvent(event);
          setSelectedLocation(event.lugar);
        });
      }
    }
  };

  const handleNext = () => {
    onNext(selectedLocation);
  };

  return (
    <div className="modal-body">
      <div className='mapa-title'>
        <h1>A dónde <span>quieres ir?</span> </h1>
        <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
          <option value="">Ver ubicaciones</option>
          {uniqueLocations.map((location, index) => (
            <option key={index} value={location}>{location}</option>
          ))}
        </select>
      </div>
      {locationError && <div>Error: {locationError}</div>}
      <div id="map" style={{ width: '100%', height: '350px', marginBottom: '25px' }} />
      <button className='siguiente' onClick={handleNext}>Siguiente</button>
    </div>
  );
};

export default Mapa;