import React, { useState, useEffect } from 'react';
import Mapa from './Mapa';
import Evento from './Evento';
import Compra from './Compra';
import './modal.css';

function Modal({ isOpen, onClose }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleNext = (data) => {
    switch (currentPage) {
      case 0:
        setSelectedLocation(data);
        break;
      case 1:
        setSelectedEvent(data);
        break;
      default:
        break;
    }
    setCurrentPage(currentPage + 1);
  };

  const handlePurchase = () => {
    alert("Compra realizada con éxito.");
    onClose();
  };

  const pages = [
    <Mapa onNext={handleNext} />,
    <Evento onNext={handleNext} selectedLocation={selectedLocation} />, // Agrega selectedMarker como prop
    <Compra onPurchase={handlePurchase} />
  ];

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {pages[currentPage]}
      </div>
    </div>
  );
}

export default Modal;