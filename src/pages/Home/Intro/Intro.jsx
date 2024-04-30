import React, {useState} from 'react';
import quien from "../../../assets/images/quien-asesino.svg";
import detective from '../../../assets/images/detective-home.webp';
import './intro.css'; // Importa los estilos CSS

 
import Modal from '../../../Components/Modal/Modal'; // Importa el componente Modal

const Intro = () => {
  const [modalOpen, setModalOpen] = useState(false); // Estado local para controlar si el modal está abierto o cerrado

  // Función para abrir el modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="intro-container">
      <div className="image-container detective-container">
        <img src={detective} alt="Detective" className="detective-image" />
      </div>
      <div className="image-container quien-container">
        <img src={quien} alt="Quién Asesino" className="quien-image" />
        <div className="text-container">
          <p>¡Viví una experiencia teatral única! Resolvé enigmas, interrogá sospechosos y descifra pistas para atrapar al asesino.</p>
        </div>
        {/* Botón para abrir el modal */}
        <button onClick={openModal}>Reservá tu lugar</button>
        {/* Renderiza el modal, solo si modalOpen es true */}
        {modalOpen && <Modal isOpen={modalOpen} onClose={closeModal} />}
      </div>
    </div>
  );
};

export default Intro;